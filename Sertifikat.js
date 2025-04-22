document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const certImages = document.querySelectorAll(".cert-img");
  const badgeCount = document.getElementById("badgeCount");

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const downloadBtn = document.getElementById("downloadBtn");

  // Perbarui penghitung sertifikat
  function updateBadgeCount(count) {
    badgeCount.textContent = `🏅 Total Sertifikat: ${count}`;
  }

  // Filter logic
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-type");
      let visibleCount = 0;

      certImages.forEach((img) => {
        const imgType = img.getAttribute("data-type");
        const isVisible = type === "all" || imgType === type;
        img.style.display = isVisible ? "inline-block" : "none";
        if (isVisible) visibleCount++;
      });

      updateBadgeCount(visibleCount);
    });
  });

  // gambar open logic
  certImages.forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      modalImage.src = src;
      downloadBtn.href = src;
      modal.classList.remove("hidden");
    });
  });
  
  // Tutup gambar melalui tombol
  window.closeModal = function () {
    modal.classList.add("hidden");
    modalImage.src = "";
    downloadBtn.href = "#";
  };

 // Opsional: Tutup gambar saat mengklik di luar gambar
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

// Tampilkan semua secara default
  updateBadgeCount(certImages.length);
});
