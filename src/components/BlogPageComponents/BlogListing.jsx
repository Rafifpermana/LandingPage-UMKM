import React, { useState, useMemo, useEffect } from "react";
import BlogPostCard from "./BlogPostCard";
import Pagination from "./Pagination";
import { allPosts } from "../../data/blogData";
import BlogSidebar from "./BlogSidebar";

const POSTS_PER_PAGE = 8;

export default function BlogListing({ searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;
    if (searchQuery) {
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return posts;
  }, [searchQuery]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  }, [filteredPosts]);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredPosts]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({
        top: document.getElementById("blog-listing-section")?.offsetTop || 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <section id="blog-listing-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {searchQuery && (
          <div className="mb-8 text-center bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-gray-700">
              Menampilkan hasil pencarian untuk:{" "}
              <strong className="text-blue-700">"{searchQuery}"</strong>
            </p>
          </div>
        )}

        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700">
              Belum Ada Postingan
            </h3>
            <p className="text-gray-500 mt-2">Silakan cek kembali nanti.</p>
          </div>
        )}

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
          <div className="lg:col-span-2">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
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
          <div className="lg:col-span-1">
            <BlogSidebar posts={allPosts} />
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
