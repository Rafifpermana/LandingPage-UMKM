import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allPosts } from "../data/blogData";
import {
  Calendar,
  User,
  MessageCircle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";
import BlogSidebar from "../components/BlogPageComponents/BlogSidebar";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!post || !post.images || post.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % (post.images?.length || 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [post]);

  const nextImage = () =>
    post && setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  const prevImage = () =>
    post &&
    setCurrentImageIndex(
      (prev) => (prev - 1 + post.images.length) % post.images.length
    );

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-6">
          Maaf, artikel yang Anda cari tidak ada.
        </p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const renderContentWithImages = (content, contentImages) => {
    if (!content) return null;
    const parts = content.split(/(\[IMAGE_CONTENT_\d+\])/);

    return parts.map((part, index) => {
      const match = part.match(/\[IMAGE_CONTENT_(\d+)\]/);
      if (match) {
        const imageIndex = parseInt(match[1], 10) - 1;
        if (contentImages && contentImages[imageIndex]) {
          return (
            <img
              key={`content-img-${imageIndex}`}
              src={contentImages[imageIndex]}
              alt={`Ilustrasi konten ${imageIndex + 1}`}
              className="my-6 rounded-lg shadow-md mx-auto"
            />
          );
        }
        return null;
      }
      return (
        <React.Fragment key={`content-text-${index}`}>{part}</React.Fragment>
      );
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);
  const socialShares = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${shareTitle}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Telegram",
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(
        shareUrl
      )}&text=${shareTitle}`,
    },
  ];

  return (
    <div className="bg-white pt-8 lg:pt-12 pb-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <article className="lg:col-span-2">
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
              {post.category}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-8 pb-4 border-b">
              <div className="flex items-center">
                <User size={16} className="mr-1.5" />
                <span>Oleh {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1.5" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg shadow-lg group">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {post.images.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${post.title} - slide ${index + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {post.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition text-white opacity-0 group-hover:opacity-100 duration-300 z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition text-white opacity-0 group-hover:opacity-100 duration-300 z-10"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                    {post.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white/90 w-5"
                            : "bg-white/50 w-2 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </>
              )}
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {renderContentWithImages(post.content, post.contentImages)}
            </div>

            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <ArrowLeft size={18} /> Kembali ke Daftar Artikel
              </Link>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 hidden sm:inline">
                  Bagikan:
                </span>
                {socialShares.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Bagikan ke ${social.name}`}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </article>

          <div className="lg:col-span-1">
            <BlogSidebar posts={allPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
