document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  const videoGallery = document.getElementById('videoGallery');
  const noImages = document.getElementById('no-images');
  const noVideos = document.getElementById('no-videos');

  let imageFound = false;
  let videoFound = false;

  // Tạo album ảnh tự động từ images/
  for (let i = 1; i <= 100; i++) {
    const img = document.createElement('img');
    img.src = `images/anh${i}.jpg`;
    img.alt = `Kỷ niệm ${i}`;
    img.onload = () => {
      imageFound = true;
      img.classList.add('show-item');
    };
    img.onerror = () => img.remove();
    gallery.appendChild(img);
  }

  // Tạo danh sách video
  for (let i = 1; i <= 10; i++) {
    const video = document.createElement('video');
    video.src = `images/video${i}.mp4`;
    video.controls = true;
    video.onloadeddata = () => {
      videoFound = true;
      video.classList.add('show-item');
    };
    video.onerror = () => video.remove();
    videoGallery.appendChild(video);
  }

  // Sau khi tải xong tất cả, kiểm tra nếu không có ảnh hoặc video
  setTimeout(() => {
    if (!gallery.querySelector('img')) noImages.style.display = 'block';
    if (!videoGallery.querySelector('video')) noVideos.style.display = 'block';
  }, 1500);

  // Lightbox xem ảnh
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  const lightboxContent = document.createElement('img');
  lightbox.appendChild(lightboxContent);
  document.body.appendChild(lightbox);

  gallery.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      lightboxContent.src = e.target.src;
      lightbox.classList.add('show');
    }
  });

  lightbox.addEventListener('click', () => lightbox.classList.remove('show'));

  // Cập nhật thông tin ngày bên nhau
  const startDate = new Date("2024-09-18");
  const loveDate = new Date("2024-11-22");
  const now = new Date();
  const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const diffLoveDays = Math.floor((now - loveDate) / (1000 * 60 * 60 * 24));

  document.getElementById("date-info").innerText =
    `Chúng mình đã quen nhau được ${diffDays} ngày 💕 và yêu nhau được ${diffLoveDays} ngày 💞`;
});
