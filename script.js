const navMenu = document.getElementById("nav_menu");
const toggleBtn = document.getElementById("toggle_btn");
const closeBtn = document.getElementById("close_btn");

// Show menu
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

// Hide menu
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

// Close menu on link click (mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
