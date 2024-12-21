import { loadTemplate, google_form_url } from './script.js';

const COURSES_CONTENTS = {
  'IELTS Starter (1.0 - 3.0)': {
    title: 'Bắt đầu từ con số 0, xây dựng nền tảng vững chắc',
    targets: [
      'Xây dựng nền tảng tiếng Anh cơ bản về từ vựng, ngữ pháp, phát âm, và kỹ năng học thuật.',
      'Làm quen với bài thi IELTS, giúp học viên vượt qua sự e ngại ban đầu khi tiếp cận IELTS.'
    ],
    objects: [
      'Người mất gốc tiếng Anh hoặc mới bắt đầu học IELTS.',
      'Học viên muốn xây dựng nền tảng trước khi học chuyên sâu.'
    ],
    content: [
      'Nghe: Hiểu từ và cụm từ đơn giản, nhận biết giọng đọc cơ bản.',
      'Nói: Phát âm chính xác từng âm tiết, thực hành giao tiếp cơ bản.',
      'Đọc: Xây dựng vốn từ cơ bản, học cách hiểu ý chính của đoạn văn.',
      'Viết: Luyện tập viết câu ngắn, đơn giản, đúng ngữ pháp.'
    ]
  },
  'IELTS Explorer (3.0 - 4.5)': {
    title: 'Khám phá kỹ năng cơ bản để từng bước tiến bộ',
    targets: [
      'Trang bị kỹ năng làm bài thi IELTS cơ bản.',
      'Giúp học viên nâng điểm từ 3.0 lên 4.5 qua cải thiện đều các kỹ năng.'
    ],
    objects: [
      'Học viên có kiến thức tiếng Anh sơ cấp, đã quen với bài thi IELTS cơ bản.'
    ],
    content: [
      'Nghe: Phân biệt thông tin cụ thể, bắt từ khóa trong đoạn hội thoại.',
      'Nói: Nói về chủ đề đơn giản, cải thiện ngữ điệu và phản xạ.',
      'Đọc: Đọc đoạn văn trung bình, tìm thông tin chính và chi tiết.',
      'Viết: Viết đoạn văn mô tả đơn giản, luyện viết câu phức.'
    ]
  },
  'IELTS Builder (4.5 - 5.5)': {
    title: 'Xây dựng kỹ năng cần thiết để bứt phá',
    targets: [
      'Giúp học viên tự tin đạt 5.5 IELTS, hiểu và làm bài ở mức trung cấp.',
      'Luyện kỹ năng phân tích và tư duy logic trong bài thi.'
    ],
    objects: [
      'Học viên đã nắm vững kiến thức cơ bản, muốn cải thiện điểm số.'
    ],
    content: [
      'Nghe: Hiểu ý chính của bài nghe dài hơn, nhận diện quan điểm.',
      'Nói: Phát triển ý tưởng và diễn đạt mạch lạc hơn.',
      'Đọc: Luyện đọc hiểu bài dài, phân tích thông tin chi tiết.',
      'Viết: Luyện viết bài luận đơn giản, tổ chức ý rõ ràng.'
    ]
  },
  'IELTS Beyond (5.5 - 6.5)': {
    title: 'Vượt mức cơ bản, tiến lên mục tiêu cao hơn',
    targets: [
      'Cải thiện điểm số lên 6.5, chuẩn bị cho mục tiêu du học hoặc làm việc.',
      'Thành thạo kỹ năng làm bài nâng cao.'
    ],
    objects: [
      'Học viên đã có kỹ năng trung cấp, cần cải thiện điểm số nhanh chóng.'
    ],
    content: [
      'Nghe: Luyện tập với bài nghe khó, nhận diện ý chính và chi tiết.',
      'Nói: Phát triển câu trả lời phong phú, cải thiện fluency.',
      'Đọc: Tăng tốc độ đọc hiểu, trả lời câu hỏi khó.',
      'Viết: Viết bài luận đầy đủ (Task 1 và Task 2), cải thiện ngữ pháp nâng cao.'
    ]
  },
  'IELTS Winner (6.5 - 7.5)': {
    title: 'Chạm đỉnh thành công với điểm số mơ ước',
    targets: [
      'Đạt điểm 6.5 - 7.5 IELTS để du học, định cư, hoặc đạt mục tiêu cá nhân.'
    ],
    objects: [
      'Học viên có kỹ năng vững chắc, cần cải thiện điểm số lên mức cao.'
    ],
    content: [
      'Nghe: Luyện nghe bài giảng dài, podcast.',
      'Nói: Luyện phát triển ý tưởng phức tạp, cải thiện từ vựng học thuật.',
      'Đọc: Phân tích bài đọc khó, giải thích nghĩa từ ngữ học thuật.',
      'Viết: Nâng cao bài viết với từ vựng và ngữ pháp học thuật.'
    ]
  },
  'IELTS Champion (8.0+)': {
    title: 'Vượt giới hạn, trở thành chuyên gia IELTS',
    targets: [
      'Đạt 8.0+ IELTS, thành thạo tiếng Anh học thuật và kỹ năng chuyên sâu.'
    ],
    objects: [
      'Học viên có mục tiêu cao trong học tập hoặc sự nghiệp quốc tế.'
    ],
    content: [
      'Luyện bài tập chuyên sâu, phân tích các dạng bài khó.',
      'Phát triển kỹ năng viết phức tạp và tư duy logic.',
      'Viết bài luận phản biện sâu sắc.',
      'Thảo luận chủ đề chuyên ngành hoặc học thuật.'
    ]
  },
  'Khóa Tiếng Anh Định Cư': {
    title: '',
    targets: [
      'Đạt IELTS 4.5+ để hoàn thành hồ sơ định cư.',
      'Học tiếng Anh giao tiếp thực tế, các chủ đề giao tiếp hằng ngày.'
    ],
    objects: [],
    content: []
  },
  'Khóa Tiếng Anh Giao Tiếp': {
    title: '',
    targets: [
      'Cải thiện khả năng nghe-nói từ cơ bản đến nâng cao.',
      'Tự tin giao tiếp trong công việc và cuộc sống.'
    ],
    objects: [],
    content: []
  },
  'Khóa Phát Âm': {
    title: '',
    targets: [
      'Cải thiện phát âm chuẩn theo bảng IPA.',
      'Nói lưu loát, tập ngữ điệu.'
    ],
    objects: [],
    content: []
  },
  'Lớp kèm 1:1': {
    title: '',
    targets: [
      'Cá nhân hóa chương trình học với 1 giáo viên kèm 1 học viên, tối ưu hóa thời gian.',
      'Giải quyết điểm yếu cụ thể, đảm bảo tiến bộ nhanh chóng.'
    ],
    objects: [],
    content: []
  }
};

function createList(items) {
  if (!items || items.length === 0) return '';

  const listItems = items.map(item => `<li>${item}</li>`).join('');
  return `<ul>${listItems}</ul>`;
}

function createMenu(coursesData) {
  const menuContainer = document.createElement('ul');
  menuContainer.className = 'nav nav-pills flex-column';

  Object.keys(coursesData).forEach((key, index) => {
    const menuItem = `
      <li class="nav-item">
        <a class="nav-link" onclick="scrollToElement('item_${index}')">${key}</a>
      </li>
    `;
    menuContainer.innerHTML += menuItem;
  });

  return menuContainer;
}

function createCourseElements(coursesData) {
  const container = document.createElement('div');
  container.className = 'library__container';

  Object.entries(coursesData).forEach(([key, course], index) => {
    const template = `
      <div class="library__item mb-5" id="item_${index}">
        <div class="d-flex content__title">
          <span class="title-dash"></span>
          <h5 class="title-content">${key}</h5>
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
    googleFormIframe.src = google_form_url;
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
