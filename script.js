const filterButtons = document.querySelectorAll('.filter-buttons button');
const images = document.querySelectorAll('.image-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    images.forEach(img => {
      if (filter === 'all' || img.classList.contains(filter)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImgIndex = 0;
let imgList = [];

document.querySelectorAll('.image-card img').forEach((img, index) => {
  img.addEventListener('click', () => {
    imgList = Array.from(document.querySelectorAll('.image-card img'))
      .filter(i => i.closest('.image-card').style.display !== 'none');
    currentImgIndex = imgList.indexOf(img);
    showLightbox();
  });
});

function showLightbox() {
  lightboxImg.src = imgList[currentImgIndex].src;
  lightbox.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % imgList.length;
  showLightbox();
});

prevBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + imgList.length) % imgList.length;
  showLightbox();
});
