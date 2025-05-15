// Dom selector
const nav = document.querySelector("nav");

// Configurations
const sections = ["about", "skills", "projects", "contact", "cv"];
const navList = sections.map((l) => `<li><a href="#${l}">${l}</a></li>`);
const navListHtml = navList.join("");

// Create Navbar
const ulList = `<ul>${navListHtml}</ul>`;
nav.insertAdjacentHTML("afterbegin", ulList);

//Add sticky navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
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
