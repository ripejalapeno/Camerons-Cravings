export function activateButtons() {
  const homeButton = document.getElementById('homeButton');
  const menuButton = document.getElementById('menuButton');
  const cateringButton = document.getElementById('cateringButton');
  const galleryButton = document.getElementById('galleryButton');
  const aboutButton = document.getElementById('aboutButton');

  homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  menuButton.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });

  cateringButton.addEventListener('click', () => {
    window.location.href = 'catering.html';
  });

  galleryButton.addEventListener('click', () => {
    window.location.href = 'gallery.html';
  });

  aboutButton.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
}

export default activateButtons;
