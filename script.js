// Hiệu ứng tim bay
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

// Đồng hồ đếm ngày
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

// JS: phần script.js
const gallery = document.getElementById('gallery');
const maxImages = 100; // Bạn có thể chỉnh tùy ý, ví dụ 200 nếu cần

for (let i = 1; i <= maxImages; i++) {
  const img = document.createElement('img');
  img.src = `images/anh${i}.jpg`;   // 👈 chỉ sửa ở đây
  img.alt = `Kỷ niệm ${i}`;
  img.loading = "lazy";
  img.onerror = () => img.remove();  // ẩn ảnh nếu không tồn tại
  gallery.appendChild(img);
}

// Tạo lightbox xem ảnh
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <span class="close">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
  <div id="caption"></div>
`;
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    lightbox.style.display = 'block';
    lightboxImg.src = e.target.src;
    caption.innerText = e.target.alt;
  }
});
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});