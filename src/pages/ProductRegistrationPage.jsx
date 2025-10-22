import React, { useState } from "react";

export default function ProductRegistrationPage() {
  const [productName, setProductName] = useState("");
  const [sellerName, setSellerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productName,
      sellerName,
      category: document.getElementById("category").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      tokopediaLink: document.getElementById("tokopediaLink").value,
      shopeeLink: document.getElementById("shopeeLink").value,
    };
    console.log("Form Data Submitted:", formData);

    setProductName("");
    setSellerName("");
    alert("Pendaftaran produk (simulasi) berhasil dikirim!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Form Pendaftaran Produk
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="sellerName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Penjual/UMKM
                </label>
                <input
                  type="text"
                  id="sellerName"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kategori
              </label>
              <input
                type="text"
                id="category"
                placeholder="cth: Makanan, Fashion, Kerajinan"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Deskripsi Produk
              </label>
              <textarea
                id="description"
                rows="3"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Harga (Rp)
              </label>
              <input
                type="number"
                id="price"
                placeholder="cth: 50000"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Foto Produk (Maks 3)
              </label>
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-xs text-gray-400 mt-1">
                Pilih 1-3 gambar. Gambar pertama akan jadi thumbnail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="tokopediaLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Link Tokopedia (Opsional)
                </label>
                <input
                  type="url"
                  id="tokopediaLink"
                  placeholder="https://tokopedia.link/..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="shopeeLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Link Shopee (Opsional)
                </label>
                <input
                  type="url"
                  id="shopeeLink"
                  placeholder="https://shopee.co.id/..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="pt-5">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Kirim Pendaftaran Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
