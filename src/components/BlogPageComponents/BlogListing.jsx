import React, { useState, useMemo } from "react";
import BlogPostCard from "./BlogPostCard";
import Pagination from "./Pagination";

const allPosts = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  title: `Judul Artikel Blog Menarik #${i + 1}`,
  date: new Date(2025, 9, 18 - i).toISOString(),
  comments: Math.floor(Math.random() * 5),
  excerpt: `Ini adalah cuplikan singkat untuk artikel blog #${
    i + 1
  }. Hai Sobat Hebat! Siapa yang tidak ingin bisnisnya terus berkembang dan dikenal banyak orang? Tentu saja semua...`,
  image: `https://placehold.co/600x400/${Math.floor(
    Math.random() * 16777215
  ).toString(16)}/ffffff?text=Blog+${i + 1}`,
  category: "BLOG",
}));

const POSTS_PER_PAGE = 9;

export default function BlogListing() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(allPosts.length / POSTS_PER_PAGE);
  }, []);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return allPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({
        top: document.getElementById("blog-listing-section")?.offsetTop || 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="blog-listing-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700">
              Belum Ada Postingan
            </h3>
            <p className="text-gray-500 mt-2">Silakan cek kembali nanti.</p>
          </div>
        )}
      </div>
    </section>
  );
}
