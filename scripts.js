// Dom selector
const nav = document.querySelectorAll("nav");

// Configurations
const sections = ["about", "skills", "projects", "contact", "cv"];
const navList = sections.map((l) => `<li><a href="#${l}">${l}</a></li>`);
const navListHtml = navList.join("");

// Create Navbar
nav.forEach((n) => {
  const ulList = `<ul>${navListHtml}</ul>`;
  n.insertAdjacentHTML("afterbegin", ulList);
});

// Simple smooth scroll behavior
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
