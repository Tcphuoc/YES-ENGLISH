import { loadTemplate } from './script.js';

const aboutUsContent = 'Là một nền tảng đào tạo tiếng Anh trực tuyến hàng đầu, YES ENGLISH mang đến cho học viên những giải pháp học tập hiệu quả trong lĩnh vực luyện thi IELTS và kỹ năng giao tiếp. Sau hơn 5 năm hoạt động trong ngành giáo dục trực tuyến, trung tâm đã phát triển một hệ thống học tập đột phá, giúp học viên nhanh chóng cải thiện trình độ tiếng Anh một cách chuyên nghiệp và tiết kiệm. Bằng phương pháp giảng dạy sáng tạo và đội ngũ giảng viên chuyên nghiệp, YES ENGLISH đã tạo nên một không gian học tập linh hoạt, phù hợp với nhu cầu và mục tiêu của từng học viên.';

function init() {
  const aboutUsDescription = document.getElementById('about-us__description');
  if (aboutUsDescription) {
    aboutUsDescription.innerHTML = aboutUsContent;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
