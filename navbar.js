function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show"); // passt zur CSS-Klasse
}

function toggleDropdown(element) {
  const dropdownContent = element.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  // Warte auf vollständiges DOM
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", toggleMenu);
  }

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {
      e.stopPropagation(); // Verhindert Schließen sofort
      toggleDropdown(this);
    });
  });

  // Klick außerhalb schließt Dropdown
  document.addEventListener("click", function () {
    dropdowns.forEach(drop => {
      const content = drop.querySelector(".dropdown-content");
      content?.classList.remove("show");
    });
  });
});
