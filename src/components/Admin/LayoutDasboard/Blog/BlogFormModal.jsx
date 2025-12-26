import {
  ChevronDown,
  Image as ImageIcon,
  Loader2,
  Save,
  Trash2,
  Upload,
  Video,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { API_IMAGE_URL } from "../../../../services/api";
import { blogService } from "../../../../services/blogService";

const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};
const getMediaUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_IMAGE_URL}/${path}`;
};

export default function BlogFormModal({
  isOpen,
  onClose,
  postData,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    author: "",
    status: "Draft",
    excerpt: "",
    content: "",
    images: [],
    content_videos: [],
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const [newGalleryFiles, setNewGalleryFiles] = useState([]);
  const [newVideoFiles, setNewVideoFiles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (postData) {
      setFormData({
        title: postData.title || "",
        slug: postData.slug || "",
        category: postData.category || "",
        author: postData.author || "",
        status: postData.is_published ? "Published" : "Draft",
        excerpt: postData.excerpt || "",
        content: postData.content || "",
        images: postData.images || [],
        content_videos: postData.content_videos || [],
      });
      setThumbnailPreview(getMediaUrl(postData.image));
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "",
        author: "",
        status: "Draft",
        excerpt: "",
        content: "",
        images: [],
        content_videos: [],
      });
      setThumbnailFile(null);
      setThumbnailPreview("");
      setNewGalleryFiles([]);
      setNewVideoFiles([]);
    }
  }, [postData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran thumbnail terlalu besar (Max 5MB)");
        return;
      }
      setThumbnailFile(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];
    files.forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`Gambar ${file.name} terlalu besar (>5MB).`);
      } else {
        validFiles.push(file);
      }
    });
    setNewGalleryFiles((prev) => [...prev, ...validFiles]);
    e.target.value = "";
  };

  const removeNewGalleryFile = (index) =>
    setNewGalleryFiles((prev) => prev.filter((_, i) => i !== index));
  const removeOldGalleryImage = (index) =>
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];
    const maxSize = 50 * 1024 * 1024;
    let hasLargeFile = false;

    files.forEach((file) => {
      if (file.size > maxSize) hasLargeFile = true;
      else validFiles.push(file);
    });

    if (hasLargeFile)
      alert("Beberapa video terlalu besar (>50MB). Mohon kompres dulu.");
    if (validFiles.length > 0)
      setNewVideoFiles((prev) => [...prev, ...validFiles]);
    e.target.value = "";
  };

  const removeNewVideoFile = (index) =>
    setNewVideoFiles((prev) => prev.filter((_, i) => i !== index));
  const removeOldVideo = (index) =>
    setFormData((prev) => ({
      ...prev,
      content_videos: prev.content_videos.filter((_, i) => i !== index),
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const dataToSend = new FormData();
      dataToSend.append("title", formData.title);
      dataToSend.append("slug", formData.slug);
      dataToSend.append("category", formData.category);
      dataToSend.append("author", formData.author);
      dataToSend.append("excerpt", formData.excerpt);
      dataToSend.append("content", formData.content);
      dataToSend.append("is_published", formData.status === "Published");

      if (thumbnailFile) {
        dataToSend.append("image", thumbnailFile);
      } else if (postData && postData.image) {
        dataToSend.append("image", postData.image);
      }

      newGalleryFiles.forEach((file) =>
        dataToSend.append("images_files", file)
      );
      formData.images.forEach((url) => dataToSend.append("images", url));

      newVideoFiles.forEach((file) => dataToSend.append("videos_files", file));
      formData.content_videos.forEach((url) =>
        dataToSend.append("content_videos", url)
      );

      if (postData) {
        await blogService.updatePost(postData.id, dataToSend);
      } else {
        if (!thumbnailFile) throw new Error("Gambar sampul wajib diupload!");
        await blogService.createPost(dataToSend);
      }

      onSuccess();
      onClose();
    } catch (err) {
      setError(err.message || "Gagal menyimpan data");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] shadow-2xl flex flex-col overflow-hidden relative">
        {/* 1. HEADER  */}
        <div className="flex-none px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {postData ? "Edit Artikel" : "Buat Artikel Baru"}
            </h2>
            <p className="text-sm text-gray-500">
              Isi detail konten blog Anda di bawah ini.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* 2. CONTENT  */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
          <form id="blogForm" onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
                <span className="font-bold">Error:</span> {error}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Thumbnail Utama
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-xl aspect-video flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all group ${
                      thumbnailPreview
                        ? "border-blue-500 bg-gray-900"
                        : "border-gray-300 hover:bg-gray-50 hover:border-blue-400"
                    }`}
                    onClick={() =>
                      document.getElementById("thumbInput").click()
                    }
                  >
                    {thumbnailPreview ? (
                      <>
                        <img
                          src={thumbnailPreview}
                          alt="Preview"
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full">
                            Ganti Gambar
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-blue-50 p-3 rounded-full mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6 text-blue-500" />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                          Klik untuk upload
                        </span>
                      </>
                    )}
                    <input
                      id="thumbInput"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Video */}
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex justify-between items-center">
                    <span>Video Content</span>
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("videoInput").click()
                      }
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-bold hover:bg-blue-100 transition"
                    >
                      + Tambah
                    </button>
                  </label>

                  <input
                    id="videoInput"
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoChange}
                    className="hidden"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    {/* Old Videos */}
                    {formData.content_videos.map((url, idx) => (
                      <div
                        key={`v-old-${idx}`}
                        className="relative group rounded-lg overflow-hidden bg-black aspect-video border border-gray-100"
                      >
                        <video
                          src={getMediaUrl(url)}
                          controls
                          className="w-full h-full object-contain"
                        />
                        <button
                          type="button"
                          onClick={() => removeOldVideo(idx)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                    {/* New Videos */}
                    {newVideoFiles.map((file, idx) => (
                      <div
                        key={`v-new-${idx}`}
                        className="relative group rounded-lg overflow-hidden bg-black aspect-video border-2 border-blue-400"
                      >
                        <video
                          src={URL.createObjectURL(file)}
                          controls
                          className="w-full h-full object-contain"
                        />
                        <button
                          type="button"
                          onClick={() => removeNewVideoFile(idx)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                    {formData.content_videos.length === 0 &&
                      newVideoFiles.length === 0 && (
                        <div className="col-span-2 py-8 text-center border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-xs flex flex-col items-center justify-center gap-2">
                          <Video size={20} className="opacity-40" />
                          <span>Belum ada video</span>
                        </div>
                      )}
                  </div>
                </div>

                {/* Gallery */}
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex justify-between items-center">
                    <span>Galeri Foto</span>
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("galleryInput").click()
                      }
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-bold hover:bg-blue-100 transition"
                    >
                      + Tambah
                    </button>
                  </label>

                  <input
                    id="galleryInput"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryChange}
                    className="hidden"
                  />

                  <div className="grid grid-cols-3 gap-2">
                    {formData.images.map((url, idx) => (
                      <div
                        key={`g-old-${idx}`}
                        className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group"
                      >
                        <img
                          src={getMediaUrl(url)}
                          alt="old"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeOldGalleryImage(idx)}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    {newGalleryFiles.map((file, idx) => (
                      <div
                        key={`g-new-${idx}`}
                        className="relative aspect-square rounded-lg overflow-hidden border-2 border-blue-400 group"
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          alt="new"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeNewGalleryFile(idx)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-0.5 rounded-full"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                    {formData.images.length === 0 &&
                      newGalleryFiles.length === 0 && (
                        <div className="col-span-3 py-6 text-center border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-xs flex flex-col items-center justify-center gap-2">
                          <ImageIcon size={20} className="opacity-40" />
                          <span>Belum ada gambar</span>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        Judul Artikel
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Contoh: Strategi Pemasaran Digital 2024"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Kategori
                      </label>
                      <div className="relative">
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-blue-500 bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Pilih Kategori...</option>
                          <option value="Teknologi">Teknologi</option>
                          <option value="Bisnis">Bisnis</option>
                          <option value="Edukasi">Edukasi</option>
                          <option value="Keuangan">Keuangan</option>
                        </select>
                        <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                          <ChevronDown size={20} className="text-black" />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Penulis
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Slug (URL Preview)
                      </label>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 text-gray-500 rounded-xl text-sm italic"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Ringkasan (Excerpt)
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tulis ringkasan singkat untuk tampilan kartu..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      Konten Lengkap
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows={12}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                      placeholder="Mulai menulis artikel Anda di sini..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* 3. FOOTER  */}
        <div className="flex-none px-6 py-4 border-t border-gray-100 bg-white flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">Status:</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold border-none outline-none cursor-pointer ${
                formData.status === "Published"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              form="blogForm"
              disabled={isLoading}
              className="px-6 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 shadow-lg shadow-blue-200 transition-all hover:shadow-blue-300 hover:-translate-y-0.5"
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Save size={18} />
              )}
              <span>Simpan Artikel</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
