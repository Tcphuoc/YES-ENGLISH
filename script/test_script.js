import { loadTemplate } from './script.js';
import { PAGE_TEST__BACKGROUND_IMAGES, GOOGLE_FORM_URL } from './constant.js';

function loadImages() {
  const container = document.getElementsByClassName('scroll-background')[0];
  if (!container) return;

  // Add image to container
  PAGE_TEST__BACKGROUND_IMAGES.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    container.appendChild(img);
  });

  // Add image again to container to create effect
  PAGE_TEST__BACKGROUND_IMAGES.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    container.appendChild(img);
  });
}

function init() {
  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = GOOGLE_FORM_URL;
  }

  loadImages();
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
