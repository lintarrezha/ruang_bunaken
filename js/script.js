function sendMail() {
  let parms = {
    nama: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    subjek: document.getElementById('subjek').value,
    pesan: document.getElementById('pesan').value,
  };

  emailjs.send('service_9us2u34', 'template_5wzxgkh', parms).then(alert(document.getElementById('successMessage').value));
}

// Navigation functionality
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => page.classList.remove('active'));

  // Show selected page
  document.getElementById(pageId).classList.add('active');

  // Update active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => link.classList.remove('active'));
  event.target.classList.add('active');

  // Close mobile menu if open
  document.getElementById('nav-menu').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');

  // Scroll to top
  window.scrollTo(0, 0);
}

function showEducationContent(contentId) {
  const pageMap = {
    silam: 'edukasi-silam',
    'cuci-tangan': 'edukasi-cuci-tangan',
    'pencegahan-infeksi': 'edukasi-pencegahan-infeksi',
    'pencegahan-jatuh': 'edukasi-pencegahan-jatuh',
    spektra: 'edukasi-spektra',
  };

  const pageId = pageMap[contentId];
  if (pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => page.classList.remove('active'));

    // Show selected education content page
    document.getElementById(pageId).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// Mobile menu toggle
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');

  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Form submission
function submitFeedback(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const nama = formData.get('nama');
  const email = formData.get('email');
  const subjek = formData.get('subjek');
  const pesan = formData.get('pesan');

  // Simulate form submission (in real application, you would send this to a server)
  setTimeout(() => {
    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form
    event.target.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      document.getElementById('successMessage').style.display = 'none';
    }, 5000);
  }, 1000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
  // Set initial active nav link
  document.querySelector('.nav-link').classList.add('active');

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');

    if (!nav.contains(event.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Smooth scrolling for better UX
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});
