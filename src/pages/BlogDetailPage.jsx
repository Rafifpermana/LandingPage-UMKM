import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Send,
  Twitter,
  User,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "../components/BlogPageComponents/BlogSidebar";
import Dataloading from "../components/Loaders/DataLoading";
import { API_IMAGE_URL } from "../services/api.js";
import { blogService } from "../services/blogService";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getSafeString = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object" && data.String) return data.String;
    return "";
  };

  const getMediaUrl = (path) => {
    const cleanPath = getSafeString(path);
    if (!cleanPath) return "";
    if (cleanPath.startsWith("http")) return cleanPath;
    return `${API_IMAGE_URL}/${cleanPath}`;
  };

  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const response = await blogService.getPostBySlug(slug);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetail();
  }, [slug]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await blogService.getPublicPosts();
        setRecentPosts(res.data?.slice(0, 5) || []);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRecent();
  }, []);

  useEffect(() => {
    if (!post || !post.images || post.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [post]);

  const nextImage = () =>
    post && setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  const prevImage = () =>
    post &&
    setCurrentImageIndex(
      (prev) => (prev - 1 + post.images.length) % post.images.length
    );

  if (isLoading) {
    return <Dataloading />;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(getSafeString(post.title));

  return (
    <div className="bg-white pt-8 lg:pt-12 pb-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <article className="lg:col-span-2">
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
              {getSafeString(post.category)}
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {getSafeString(post.title)}
            </h1>

            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-8 pb-4 border-b">
              <div className="flex items-center">
                <User size={16} className="mr-1.5" />
                <span>Oleh {getSafeString(post.author)}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1.5" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            {post.images && post.images.length > 0 ? (
              <div className="relative mb-8 aspect-video overflow-hidden rounded-xl shadow-lg group bg-gray-100">
                <div
                  className="flex transition-transform duration-1000 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {post.images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={getMediaUrl(imgSrc)}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-contain bg-black flex-shrink-0 flex"
                    />
                  ))}
                </div>

                {post.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300 z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300 z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            ) : (
              post.image && (
                <div className="relative mb-8 aspect-video overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={getMediaUrl(post.image)}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line mb-10">
              {getSafeString(post.content)}
            </div>

            {post.content_videos && post.content_videos.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
                  <Video className="text-red-600" /> Video Terkait
                </h3>
                <div className="space-y-6">
                  {post.content_videos.map((vid, idx) => (
                    <div
                      key={idx}
                      className="aspect-video rounded-xl overflow-hidden bg-black shadow-md"
                    >
                      <video
                        controls
                        src={getMediaUrl(vid)}
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <ArrowLeft size={18} /> Kembali ke Daftar Artikel
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Bagikan:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-sky-500 hover:text-white transition"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition"
                >
                  <Send size={16} />
                </a>
              </div>
            </div>
          </article>

          <div className="lg:col-span-1">
            <BlogSidebar posts={recentPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
