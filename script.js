let qr;

function generateQRCode() {
  const text = document.getElementById("text").value.trim();
  const qrContainer = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!text) {
    alert("Please enter some text or a URL.");
    return;
  }

  qrContainer.innerHTML = "";

  qr = new QRCode(qrContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    downloadBtn.style.display = "inline-block";
  }, 300);
}

function downloadQRCode() {
  const qrImg = document.querySelector("#qrcode img");
  if (!qrImg) return;

  const imgSrc = qrImg.src;
  const a = document.createElement("a");
  a.href = imgSrc;
  a.download = "qrcode.png";
  a.click();
}