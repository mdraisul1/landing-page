const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const menuPath = document.getElementById('menu-path');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('-translate-x-full');
  
  // Toggle between hamburger and close icon
  if (menu.classList.contains('-translate-x-full')) {
    menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); // Hamburger icon
  } else {
    menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close icon
  }
});