// 💗 Tim bay
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.innerText = "💗";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// ⏳ Đếm ngày yêu
const startDate = new Date("2024-11-22T00:00:00");
const timer = document.getElementById("timer");
function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  timer.innerHTML = `Chúng ta đã bên nhau được <b>${days}</b> ngày, <b>${hours}</b> giờ, <b>${minutes}</b> phút, <b>${seconds}</b> giây 💕`;
}
setInterval(updateTimer, 1000);
updateTimer();

// 📸 Album Ảnh
const gallery = document.getElementById('gallery');
const maxImages = 100; // số ảnh tối đa
for (let i = 1; i <= maxImages; i++) {
  const img = document.createElement('img');
  img.src = `images/anh${i}.jpg`;
  img.alt = `Kỷ niệm ${i}`;
  img.loading = "lazy";
  img.onerror = () => img.remove();
  gallery.appendChild(img);
}

// 🖼️ Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    lightbox.style.display = 'flex';
    lightboxImg.src = e.target.src;
    caption.innerText = e.target.alt;
  }
});
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});