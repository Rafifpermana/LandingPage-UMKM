import React from "react";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white h-96 lg:h-[450px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">Hubungi Kami</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengarkan.
        </p>
      </div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBmcm9tPSItNyIgYmVnaW49IjBzIiBkdXI9IjBzIiB0bz0iMjAiIGZpbGw9ImZyZWV6ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+PC9yZWN0Pjwvc3ZnPg==')]"></div>
    </section>
  );
}
