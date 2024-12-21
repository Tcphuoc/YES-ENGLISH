import { loadTemplate } from './script.js';
import { GOOGLE_FORM_URL } from './constant.js';

function init() {
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
