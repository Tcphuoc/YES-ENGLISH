import { loadTemplate } from './script.js';
import { GOOGLE_FORM_URL, DOCUMENTS } from './constant.js';

function createDocumentGrid(documents) {
  const container = document.createElement('div');
  container.className = 'container py-4';

  const row = document.createElement('div');
  row.className = 'row g-4';

  documents.forEach(doc => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3';

    const card = document.createElement('a');
    card.href = doc.url;
    card.className = 'card text-decoration-none';

    const content = document.createElement('div');
    content.className = 'card-content';

    const icon = document.createElement('div');
    icon.className = 'document-icon';
    icon.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    `;

    const title = document.createElement('h5');
    title.className = 'document-title';
    title.textContent = doc.title;

    content.appendChild(icon);
    content.appendChild(title);
    card.appendChild(content);
    col.appendChild(card);
    row.appendChild(col);
  });

  container.appendChild(row);
  return container;
}

function init() {
  const googleFormIframe = document.getElementById('form-register');
  if (googleFormIframe) {
    googleFormIframe.src = GOOGLE_FORM_URL;
  }

  const gridElement = createDocumentGrid(DOCUMENTS);
  document.getElementById('library_container').appendChild(gridElement);
}

document.addEventListener('DOMContentLoaded', function() {
  loadTemplate('component/header.html', 'header');
  loadTemplate('component/footer.html', 'footer');
  init();
});
