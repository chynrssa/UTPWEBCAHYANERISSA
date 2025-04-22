// Mendapatkan elemen modal dan gambar modal berdasarkan ID
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

// Fungsi untuk membuka modal dan menampilkan gambar
function openImageModal(src) {
  modalImage.src = src;
  imageModal.classList.add("show");
}

// Fungsi untuk menutup modal
function closeImageModal() {
  imageModal.classList.remove("show");
  modalImage.src = "";
}
// Event listener untuk menutup modal jika area luar modal (background) diklik
imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    closeImageModal();
  }
});
