import { HOST, PHONE, EMAIL, INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_FORM_URL } from './constant.js';

export function loadTemplate(templatePath, idContainer) {
  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idContainer).innerHTML = html;
      updatePageUrl();
      updatePhoneNumber();
      updatePhoneUrl();
      updateEmail();
      updateEmailUrl();
      updateFacebookUrl();
      updateInstagramUrl();
      updateBtnRegister();
    })
    .catch(error => {
      console.error('Load template:', error);
    });
}

export function formatPhoneNumber(phoneNumber) {
    return `${phoneNumber.slice(0, 4)}.${phoneNumber.slice(4, 7)}.${phoneNumber.slice(7)}`;
}

export function updatePhoneNumber() {
  const phoneElements = document.getElementsByClassName('phone');
  if (phoneElements.length === 0) return;

  Array.from(phoneElements).forEach(element => {
    element.textContent = formatPhoneNumber(PHONE);
  });
}

export function updatePhoneUrl() {
  const phoneUrlElements = document.getElementsByClassName('phone-url');
  if (phoneUrlElements.length === 0) return;

  Array.from(phoneUrlElements).forEach(element => {
    element.href = 'tel:' + PHONE;
  })
}

export function updateEmail() {
  const emailElements = document.getElementsByClassName('email');
  if (emailElements.length === 0) return;

  Array.from(emailElements).forEach(element => {
    element.textContent = EMAIL;
  });
}

export function updateEmailUrl() {
  const emailUrlElements = document.getElementsByClassName('email-url');
  if (emailUrlElements.length === 0) return;

  Array.from(emailUrlElements).forEach(element => {
    element.href = 'mailto:' + EMAIL;
  })
}

export function updateFacebookUrl() {
  const facebookUrlElements = document.getElementsByClassName('facebook-url');
  if (facebookUrlElements.length === 0) return;

  Array.from(facebookUrlElements).forEach(element => {
    element.href = FACEBOOK_URL;
  })
}

export function updateInstagramUrl() {
  const instagramUrlElements = document.getElementsByClassName('instagram-url');
  if (instagramUrlElements.length === 0) return;

  Array.from(instagramUrlElements).forEach(element => {
    element.href = INSTAGRAM_URL;
  })
}

export function updatePageUrl() {
  const homePages = document.getElementsByClassName('index-url');
  if (homePages.length > 0) {
    Array.from(homePages).forEach(element => {
      element.href = HOST;
    })
  }

  const aboutUsPages = document.getElementsByClassName('about-us-url');
  if (aboutUsPages.length > 0) {
    Array.from(aboutUsPages).forEach(element => {
      element.href = HOST + 'about_us';
    })
  }

  const coursesPages = document.getElementsByClassName('courses-url');
  if (coursesPages.length > 0) {
    Array.from(coursesPages).forEach(element => {
      element.href = HOST + 'courses';
    })
  }

  const testPages = document.getElementsByClassName('test-url');
  if (testPages.length > 0) {
    Array.from(testPages).forEach(element => {
      element.href = HOST + 'test';
    })
  }

  const libraryPages = document.getElementsByClassName('library-url');
  if (libraryPages.length > 0) {
    Array.from(libraryPages).forEach(element => {
      element.href = HOST + 'library';
    })
  }
}

export function updateBtnRegister() {
  const btnRegister = document.getElementsByClassName('btn-register');
  if (btnRegister.length > 0) {
    Array.from(btnRegister).forEach(element => {
      element.href = GOOGLE_FORM_URL;
    })
  }
}
