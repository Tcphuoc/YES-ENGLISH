import { loadTemplate, google_form_url } from './script.js';

const IMAGES = [
  './image/images_background/image1.jpg',
  './image/images_background/image2.jpg',
  './image/images_background/image3.jpg',
  './image/images_background/image4.jpg',
]

function loadImages() {
  const container = document.getElementsByClassName('scroll-background')[0];
  if (!container) return;

  // Add image to container
  IMAGES.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    container.appendChild(img);
  });

  // Add image again to container to create effect
  IMAGES.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    container.appendChild(img);
  });
}

function init() {
  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = google_form_url;
  }

  loadImages();
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
