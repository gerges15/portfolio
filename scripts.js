// Dom selector
const nav = document.querySelector("nav");
const educationContainer = document.querySelector(".education-container");
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

// Education Section
const computerScience = {
  school: " Bachelor of Science (B.S.) in Computer Science",
  schoolName:
    "   Faculty of Science, Computer Science Department (Minia University)",
  year: "2021 - 2025",
  grade: "85",
};
const class12th = {
  school: "Class-12th (H.S.C)",
  schoolName: "Matai secondary school (Matai State Board) ",
  year: "2021",
  grade: "74.2",
};

const class9th = {
  school: "Class-9th (E.S.C)",
  schoolName: "El-Kawady School (Matai State Board)",
  year: "2018",
  grade: "96.79",
};
const education = [computerScience, class12th, class9th];

const educationHtml = education
  .map(
    (edu) => `   <div class="education">
              <div class="school-certification">
                ${edu.school}
              </div>
              <div class="school-name">
               ${edu.schoolName}
              </div>
              <div class="year-grade">
                <div class="year">
                  <img
                    src="./assets//icons/calendar-days-solid.svg"
                    class="icon"
                    alt=""
                  />${edu.year}
                </div>
                <div class="grade">
                  <img
                    src="./assets/icons/percent-solid.svg"
                    class="icon"
                    alt=""
                  />${edu.grade}
                </div>
              </div>
            </div>`
  )
  .join("");

// render  Education

educationContainer.insertAdjacentHTML("afterbegin", educationHtml);

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
