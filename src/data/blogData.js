const generatePosts = (count) => {
  const titles = [
    "5 Ide Bisnis Rumahan",
    "Peluang Bisnis Kopi",
    "Branding Produk UMKM",
    "Catatan Keuangan Sederhana",
    "Strategi Pemasaran Digital",
    "Tips Manajemen Stok",
    "Membangun Tim Solid",
  ];
  const categories = ["BLOG", "TIPS BISNIS", "PEMASARAN", "KEUANGAN"];

  const posts = [];
  const baseDate = new Date(2025, 9, 18);

  for (let i = 0; i < count; i++) {
    const title = `${titles[Math.floor(Math.random() * titles.length)]} #${
      i + 1
    }`;
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() - i * 2);

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);

    const mainImages = [
      `https://placehold.co/1200x600/${randomColor}/ffffff?text=Slide+1`,
      `https://placehold.co/1200x600/${randomColor2}/ffffff?text=Slide+2`,
      `https://placehold.co/1200x600/${randomColor3}/ffffff?text=Slide+3`,
    ];

    const contentImages = [
      `https://placehold.co/800x500/${Math.floor(
        Math.random() * 16777215
      ).toString(16)}/ffffff?text=Konten+A`,
      `https://placehold.co/800x500/${Math.floor(
        Math.random() * 16777215
      ).toString(16)}/ffffff?text=Konten+B`,
    ];

    posts.push({
      id: i + 1,
      title: title,
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      date: date.toISOString(),
      comments: Math.floor(Math.random() * 5),
      excerpt: `Ini adalah cuplikan singkat untuk artikel '${title}'. Hai Sobat Hebat! Membahas topik ini sangat penting untuk...`,

      content: `Ini adalah konten lengkap untuk artikel **${title}**. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

[IMAGE_CONTENT_1]

Paragraf setelah gambar pertama. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.

In voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.

Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est.


[IMAGE_CONTENT_2]

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

* Poin penting pertama.
* Poin penting kedua.
* Poin penting ketiga.

Nantikan artikel menarik lainnya!`,

      image: mainImages[0],
      images: mainImages,
      contentImages: contentImages,

      category: categories[Math.floor(Math.random() * categories.length)],
      author: "Tim UMKM Hebat",
    });
  }

  return posts;
};

export const allPosts = generatePosts(150);
