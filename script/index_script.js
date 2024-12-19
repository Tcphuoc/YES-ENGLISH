import { loadTemplate, google_form_url } from './script.js';

const aboutUsContent = 'YES ENGLISH là trung tâm đào tạo tiếng Anh trực tuyến, chuyên cung cấp các khóa học luyện thi IELTS và tiếng Anh giao tiếp. Với hơn 5 năm kinh nghiệm giảng dạy online, YES ENGLISH khẳng định thế mạnh vượt trội trong việc cung cấp giải pháp học tập hiện đại, chất lượng cao, tiết kiệm thời gian, chi phí mà vẫn đạt hiệu quả tối đa.';

function init() {
  const aboutUsDescription = document.getElementById('about-us__description');
  if (aboutUsDescription) {
    aboutUsDescription.innerHTML = aboutUsContent;
  }

  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = google_form_url;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
