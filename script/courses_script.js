import { loadTemplate } from './script.js';
import { COURSES_CONTENTS, GOOGLE_FORM_URL } from './constant.js';

function createList(items) {
  if (!items || items.length === 0) return '';

  const listItems = items.map(item => `<li>${item}</li>`).join('');
  return `<ul>${listItems}</ul>`;
}

function createMenu(coursesData) {
  const menuContainer = document.createElement('ul');
  menuContainer.className = 'nav nav-pills flex-column';

  Object.values(coursesData).forEach((course) => {
    const menuItem = `
      <li class="nav-item">
        <a class="nav-link" onclick="scrollToElement('${course.id}')">${course.name}</a>
      </li>
    `;
    menuContainer.innerHTML += menuItem;
  });

  return menuContainer;
}

function createCourseElements(coursesData) {
  const container = document.createElement('div');
  container.className = 'library__container';

  Object.values(coursesData).forEach((course) => {
    const template = `
      <div class="library__item mb-5" id="${course.id}">
        <div class="d-flex content__title">
          <span class="title-dash"></span>
          <h5 class="title-content">${course.name}</h5>
        </div>
        ${course.title ? `<p class="library__item-title primary-color">${course.title}</p>` : ''}
        <div class="library__item-target">
          <h5>Mục tiêu</h5>
          ${createList(course.targets)}
        </div>
        ${course.objects && course.objects.length > 0 ? `
          <div class="library__item-object">
            <h5>Đối tượng</h5>
            ${createList(course.objects)}
          </div>
        ` : ''}
        ${course.content && course.content.length > 0 ? `
          <div class="library__item-content">
            <h5>Nội dung học</h5>
            ${createList(course.content)}
          </div>
        ` : ''}
      </div>
    `;

    container.innerHTML += template;
  });

  return container;
}

function init() {
  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = GOOGLE_FORM_URL;
  }

  const coursesContent = createCourseElements(COURSES_CONTENTS);
  const coursesMenu = createMenu(COURSES_CONTENTS);
  document.getElementById('courses__container').appendChild(coursesContent);
  document.querySelector('#courses__menu #courses__menu-content').appendChild(coursesMenu);
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
