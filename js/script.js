// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault(); // Mencegah scroll ke atas
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const menu = this.nextElementSibling;

    // Tutup dropdown lain
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.style.display = 'none';
    });

    // Toggle current menu
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});


// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get all menu card images
  const menuImages = document.querySelectorAll('.menu-card img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  // Add click event to all menu images
  menuImages.forEach(image => {
    image.addEventListener('click', () => {
      lightboxImg.src = image.src;
      lightbox.classList.add('active');
    });
  });

  // Close lightbox when clicking close button
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Close lightbox when clicking outside the image or on the image itself
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
      lightbox.classList.remove('active');
    }
  });
});
