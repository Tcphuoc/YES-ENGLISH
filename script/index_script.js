import { loadTemplate } from './script.js';
import { PAGE_INDEX__ABOUT_US_CONTENT, GOOGLE_FORM_URL, COURSES_INFO, HOST } from './constant.js';

function createCourseInfo(groupCourseData) {
  const container = document.createElement('div');
  container.className = 'courses__list accordion accordion-flush';
  container.id = 'accordionFlushExample';

  Object.values(groupCourseData).forEach((group, index) => {
    const courses = group.courses;
    if (!courses) return;

    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    const coursesHtml = courses.map(course => `
      <p>
        <strong>${course.name}:</strong>
        ${course.title}
        <i><a href="${HOST}#${course.id}">Xem thêm</a></i>
      </p>
    `).join('');

    const header = `
      <h2 class="accordion-header">
        <button class="accordion-button ${index == 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${index}" aria-expanded="false" aria-controls="flush-collapse-${index}">
          ${group.title}
        </button>
      </h2>
    `;

    const body = `
      <div id="flush-collapse-${index}" class="accordion-collapse collapse ${index == 0 ? 'show' : ''}" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          ${coursesHtml}
        </div>
      </div>
    `;

    accordionItem.innerHTML = header + body;
    container.appendChild(accordionItem);
  })

  return container;
}

function init() {
  const aboutUsDescription = document.getElementById('about-us__description');
  if (aboutUsDescription) {
    aboutUsDescription.innerHTML = PAGE_INDEX__ABOUT_US_CONTENT;
  }

  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = GOOGLE_FORM_URL;
  }

  const coursesInfo = createCourseInfo(COURSES_INFO);
  document.getElementsByClassName('content__courses')[0].appendChild(coursesInfo);
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
