import {
  FileVideo,
  Image as ImageIcon,
  Layers,
  Plus,
  Save,
  Trash2,
  Upload,
  Video,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function BlogFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  // State Data Teks
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    author: "",
    excerpt: "",
    content: "",
    is_published: false,
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  const [contentImageFiles, setContentImageFiles] = useState([]);
  const [contentImagePreviews, setContentImagePreviews] = useState([]);

  const [videoFiles, setVideoFiles] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);

  const thumbnailInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const contentImageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        category: initialData.category || "",
        author: initialData.author || "",
        excerpt: initialData.excerpt || "",
        content: initialData.content || "",
        is_published: initialData.is_published || false,
      });

      if (initialData.image) setThumbnailPreview(initialData.image);
      if (initialData.images?.length > 0)
        setGalleryPreviews(initialData.images);
      if (initialData.content_images?.length > 0)
        setContentImagePreviews(initialData.content_images);
      if (initialData.content_videos?.length > 0)
        setVideoPreviews(initialData.content_videos);
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "Berita",
        author: "Admin",
        excerpt: "",
        content: "",
        is_published: false,
      });
      setThumbnailFile(null);
      setThumbnailPreview("");
      setGalleryFiles([]);
      setGalleryPreviews([]);
      setContentImageFiles([]);
      setContentImagePreviews([]);
      setVideoFiles([]);
      setVideoPreviews([]);
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (!initialData) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, title, slug }));
    } else {
      setFormData((prev) => ({ ...prev, title }));
    }
  };

  const handleFileSelect = (
    e,
    setFilesState,
    setPreviewsState,
    isVideo = false
  ) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFilesState((prev) => [...prev, ...files]);
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setPreviewsState((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleRemoveItem = (index, setFilesState, setPreviewsState) => {
    setFilesState((prev) => prev.filter((_, i) => i !== index));
    setPreviewsState((prev) => prev.filter((_, i) => i !== index));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };
  const handleRemoveThumbnail = () => {
    setThumbnailFile(null);
    setThumbnailPreview("");
    if (thumbnailInputRef.current) thumbnailInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. KONSEP "TANPA UBAH BACKEND":
    // Karena backend hanya menerima STRING URL, Anda harus mengupload file fisik (thumbnailFile, galleryFiles, dll)
    // ke layanan cloud storage (Cloudinary/Firebase) DI SINI terlebih dahulu.

    // Contoh Logika (Pseudo-code):
    /*
      const uploadedThumbnailUrl = await uploadToCloudinary(thumbnailFile);
      const uploadedGalleryUrls = await Promise.all(galleryFiles.map(f => uploadToCloudinary(f)));
      const uploadedVideoUrls = await Promise.all(videoFiles.map(f => uploadToCloudinary(f)));
    */

    // 2. UNTUK SAAT INI (Simulasi):
    // Kita akan mengirimkan URL preview (blob) atau URL lama jika tidak ada file baru.
    // **PENTING:** Dalam produksi, ganti bagian ini dengan URL hasil upload asli.

    const payload = {
      ...formData,
      image: thumbnailFile ? thumbnailPreview : initialData?.image || "",
      images: [
        ...(initialData?.images || []),
        ...galleryPreviews.filter((p) => p.startsWith("blob:")),
      ], // Campuran URL lama & blob baru (simulasi)
      content_images: [
        ...(initialData?.content_images || []),
        ...contentImagePreviews.filter((p) => p.startsWith("blob:")),
      ],
      content_videos: [
        ...(initialData?.content_videos || []),
        ...videoPreviews.filter((p) => p.startsWith("blob:")),
      ],
    };

    // Tips: Jika ingin debug file fisik yang siap diupload:
    console.log("File Siap Upload:", {
      thumbnail: thumbnailFile,
      gallery: galleryFiles,
      contentImages: contentImageFiles,
      videos: videoFiles,
    });

    onSubmit(payload);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col relative z-10 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white z-20">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {initialData ? "Edit Artikel" : "Tulis Artikel Baru"}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Lengkapi konten, gambar, dan video pendukung.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50/50">
          <form id="blog-form" onSubmit={handleSubmit} className="space-y-8">
            {/* --- GROUP 1: INFO DASAR --- */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Informasi Artikel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Artikel
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Judul..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    required
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white"
                    >
                      <option value="Berita">Berita</option>
                      <option value="Tips Bisnis">Tips Bisnis</option>
                      <option value="Event">Event</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Penulis
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --- GROUP 2: MEDIA (GAMBAR & VIDEO) --- */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Media & Galeri
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. Gambar Utama */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <ImageIcon size={18} className="text-blue-600" /> Gambar
                    Utama (Thumbnail)
                  </label>
                  {!thumbnailPreview ? (
                    <div
                      onClick={() => thumbnailInputRef.current.click()}
                      className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-all group"
                    >
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Upload size={20} />
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        Klik atau tarik gambar
                      </p>
                      <input
                        type="file"
                        ref={thumbnailInputRef}
                        onChange={handleThumbnailChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden h-48 bg-gray-100 group border border-gray-200">
                      <img
                        src={thumbnailPreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={handleRemoveThumbnail}
                          className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition-transform"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Galeri Gambar */}
                <div className="flex flex-col h-full">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <Layers size={18} className="text-purple-600" /> Galeri Foto
                    (Slide)
                  </label>
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {galleryPreviews.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square rounded-lg overflow-hidden group border border-gray-200"
                        >
                          <img
                            src={src}
                            alt="Gallery"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveItem(
                                idx,
                                setGalleryFiles,
                                setGalleryPreviews
                              )
                            }
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => galleryInputRef.current.click()}
                        className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-purple-500 hover:bg-purple-50 transition-colors text-gray-400 hover:text-purple-600"
                      >
                        <Plus size={20} />
                        <span className="text-[10px] mt-1">Add</span>
                      </button>
                    </div>
                    <input
                      type="file"
                      multiple
                      ref={galleryInputRef}
                      onChange={(e) =>
                        handleFileSelect(e, setGalleryFiles, setGalleryPreviews)
                      }
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                {/* 3. Video Konten (Drag & Drop Video) */}
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <Video size={18} className="text-red-600" /> Video Konten
                    (MP4/WebM)
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    {videoPreviews.length === 0 && (
                      <div
                        onClick={() => videoInputRef.current.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-red-50 hover:border-red-400 transition-all mb-4"
                      >
                        <FileVideo size={32} className="text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">
                          Upload Video di sini
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {videoPreviews.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-video rounded-lg overflow-hidden bg-black group border border-gray-300"
                        >
                          <video
                            src={src}
                            className="w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FileVideo
                              className="text-white opacity-50"
                              size={24}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveItem(
                                idx,
                                setVideoFiles,
                                setVideoPreviews
                              )
                            }
                            className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                      {videoPreviews.length > 0 && (
                        <button
                          type="button"
                          onClick={() => videoInputRef.current.click()}
                          className="aspect-video rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-red-500 hover:bg-red-50 transition-colors text-gray-400 hover:text-red-600"
                        >
                          <Plus size={24} />
                          <span className="text-xs mt-1">Tambah Video</span>
                        </button>
                      )}
                    </div>
                    <input
                      type="file"
                      multiple
                      ref={videoInputRef}
                      onChange={(e) =>
                        handleFileSelect(e, setVideoFiles, setVideoPreviews)
                      }
                      accept="video/*"
                      className="hidden"
                    />
                  </div>
                </div>

                {/* 4. Gambar Konten (Content Images) */}
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <ImageIcon size={18} className="text-green-600" /> Gambar
                    Tambahan (Untuk Konten)
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                      {contentImagePreviews.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square rounded-lg overflow-hidden group border border-gray-200"
                        >
                          <img
                            src={src}
                            alt="Content"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveItem(
                                idx,
                                setContentImageFiles,
                                setContentImagePreviews
                              )
                            }
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => contentImageInputRef.current.click()}
                        className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-green-500 hover:bg-green-50 transition-colors text-gray-400 hover:text-green-600"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <input
                      type="file"
                      multiple
                      ref={contentImageInputRef}
                      onChange={(e) =>
                        handleFileSelect(
                          e,
                          setContentImageFiles,
                          setContentImagePreviews
                        )
                      }
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --- GROUP 3: KONTEN TEKS --- */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ringkasan
                </label>
                <textarea
                  name="excerpt"
                  rows="2"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300"
                  placeholder="Ringkasan singkat..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konten Lengkap
                </label>
                <textarea
                  name="content"
                  rows="8"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 font-mono text-sm"
                  placeholder="Isi artikel..."
                />
              </div>
            </div>

            {/* --- GROUP 4: STATUS --- */}
            <div className="flex items-center justify-between p-4 rounded-xl border bg-gray-50 border-gray-200">
              <div>
                <span
                  className={`font-bold ${
                    formData.is_published ? "text-blue-800" : "text-gray-700"
                  }`}
                >
                  Status Publikasi
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  {formData.is_published ? "Langsung tayang." : "Draft."}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="is_published"
                  checked={formData.is_published}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50 z-20">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-200 flex items-center gap-2 transition-all active:scale-95"
          >
            <Save size={18} /> Simpan
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
