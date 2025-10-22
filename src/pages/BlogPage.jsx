import React from "react";
import { useSearchParams } from "react-router-dom";
import BlogHero from "../components/BlogPageComponents/BlogHero";
import BlogListing from "../components/BlogPageComponents/BlogListing";

export default function BlogPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  return (
    <div className="bg-gray-50">
      <BlogHero />
      <BlogListing searchQuery={searchQuery} />
    </div>
  );
}
