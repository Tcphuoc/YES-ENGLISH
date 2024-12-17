export const phone = '0968287691';
export const email = 'yesenglishonline24@gmail.com';
export const instagram_url = 'https://www.instagram.com/yes_englishonline/';
export const facebook_url = 'https://www.facebook.com/profile.php?id=61567368914971';

export function loadTemplate(templatePath, idContainer) {
  fetch(templatePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idContainer).innerHTML = html;
      updatePhoneNumber();
      updatePhoneUrl();
      updateEmail();
      updateEmailUrl();
      updateFacebookUrl();
      updateInstagramUrl();
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
    element.textContent = formatPhoneNumber(phone);
  });
}

export function updatePhoneUrl() {
  const phoneUrlElements = document.getElementsByClassName('phone-url');
  if (phoneUrlElements.length === 0) return;

  Array.from(phoneUrlElements).forEach(element => {
    element.href = 'tel:' + phone;
  })
}

export function updateEmail() {
  const emailElements = document.getElementsByClassName('email');
  if (emailElements.length === 0) return;

  Array.from(emailElements).forEach(element => {
    element.textContent = email;
  });
}

export function updateEmailUrl() {
  const emailUrlElements = document.getElementsByClassName('email-url');
  if (emailUrlElements.length === 0) return;

  Array.from(emailUrlElements).forEach(element => {
    element.href = 'mailto:' + email;
  })
}

export function updateFacebookUrl() {
  const facebookUrlElements = document.getElementsByClassName('facebook-url');
  if (facebookUrlElements.length === 0) return;

  Array.from(facebookUrlElements).forEach(element => {
    element.href = facebook_url;
  })
}

export function updateInstagramUrl() {
  const instagramUrlElements = document.getElementsByClassName('instagram-url');
  if (instagramUrlElements.length === 0) return;

  Array.from(instagramUrlElements).forEach(element => {
    element.href = instagram_url;
  })
}
