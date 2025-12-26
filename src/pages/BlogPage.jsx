import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlogHero from "../components/BlogPageComponents/BlogHero";
import BlogListing from "../components/BlogPageComponents/BlogListing";
import { blogService } from "../services/blogService";

export default function BlogPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await blogService.getPublicPosts();
        setPosts(response.data || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Gagal memuat berita.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <BlogHero />

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-blue-600 w-10 h-10" />
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-500">{error}</div>
      ) : (
        <BlogListing searchQuery={searchQuery} dataPosts={posts} />
      )}
    </div>
  );
}
