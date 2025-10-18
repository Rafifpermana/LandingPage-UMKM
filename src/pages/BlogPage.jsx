import React from "react";
import BlogHero from "../components/BlogPageComponents/BlogHero";
import BlogListing from "../components/BlogPageComponents/BlogListing";

export default function BlogPage() {
  return (
    <div className="bg-gray-50">
      <BlogHero />
      <BlogListing />
    </div>
  );
}
