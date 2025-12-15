const scriptURL = "PASTE_URL_WEB_APP_APPS_SCRIPT";

document.getElementById("formPendaftaran").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("nama", document.getElementById("nama").value);
  formData.append("program", document.getElementById("program").value);
  formData.append("nik", document.getElementById("nik").value);
  formData.append("alamat", document.getElementById("alamat").value);
  formData.append("whatsapp", document.getElementById("wa").value);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(() => {
    alert("✔ Data berhasil dikirim!");
    document.getElementById("formPendaftaran").reset();
  })
  .catch(() => {
    alert("✖ Gagal mengirim data!");
  });
});
