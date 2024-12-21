import { loadTemplate } from './script.js';
import { GOOGLE_FORM_URL, PAGE_ABOUT_US__ABOUT_US_CONTENT } from './constant.js';

function init() {
  const aboutUsDescription = document.getElementById('about-us__description');
  if (aboutUsDescription) {
    aboutUsDescription.innerHTML = PAGE_ABOUT_US__ABOUT_US_CONTENT;
  }

  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = GOOGLE_FORM_URL;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
