// Project section dynamic load and pop-up window implementation
const projectSecD = document.querySelector(".card-contents");

const titleDis = document.querySelector(".inner-project-title");
const innerDis = document.querySelector(".inner-project-description");
const cardMdL = document.querySelector(".modal");
const buttonViewSource = document.querySelector(".inner-btn-view-src");
const projectImage = document.querySelector(".inner-project-image");
const buttonLiveSource = document.querySelector(".inner-btn-see-live");
const crossMdL = document.querySelector(".close");
const cardYear = document.querySelector(".card-year");
const techTags = document.querySelector(".inner-view-tag");
const cardCon = document.querySelector(".card-con");
const cardRole = document.querySelector(".card-role");

const projectObject = [
  {
    name: "ToDo List",
    imageLink: "assets/desktop/todo-list.png",
    description:
      "This is my portfolio website built as part of Microverse's project to showcase my skills in HTML5, CSS3, and JavaScript.",
    role: "Full Stack Dev",
    technologies: ["html", "css", "javascript"],
    year: "2022",
    company: "Microverse",
    sourceLink: "https://github.com/asifaminisonline/to-do-list-",
    demoLink: "https://asifaminisonline.github.io/to-do-list-/dist/",
  },
  {
    name: "Bidget App",
    imageLink: "assets/budgetApp.jpg",
    description:
      "Budget app is a Ruby on Rails-based app for managing financial transactions. It offers categorized lists, sign-up and login pages, and easy navigation. Users can add new categories and transactions, making it a user-friendly and efficient solution for managing finances.",
    role: "Full Stack Dev",
    technologies: ["Postgress", "Ruby", "Javascript", "SCSS"],
    year: "2023",
    company: "Microverse",
    sourceLink: "https://github.com/asifaminisonline/RoR-Capstone-Project",
    demoLink: "https://budget-n0m8.onrender.com/",
  },
  {
    name: "Awesome Book List",
    imageLink: "assets/todo.jpg",
    description:
      "This project is build with HTML, CSS and JavaScript.: An online library for adding and removing a different number of books from a user collection, keeping track of the books you've read and the one's you are yet to read",
    role: "Uber",
    technologies: ["html", "css", "javascript"],
    year: "2022",
    company: "Microverse",
    sourceLink: "https://github.com/asifaminisonline/Awesome-Book",
    demoLink: "https://awesomebookslist.netlify.app/",
  },
  {
    name: "Covid Tracker",
    imageLink: "assets/Global-Covid-Report.png",
    description:
      "Covid Tracker is a react based website that displaying an updated data about COVID cases in every country and showes the detailed information in each country.it's developed using different libraries like React, Redux,thunk,Css etc.",
    role: "Back End Dev",
    technologies: ["html", "css", "javascript"],
    year: "2023",
    company: "Microverse",
    sourceLink:
      "https://github.com/asifaminisonline/React-Capstone-Covid-Tracker",
    demoLink: "https://global-covid-cases.onrender.com/",
  },
];

(() => {
  projectSecD.innerHTML = "";
  for (let i = 0; i < projectObject.length; i += 1) {
    let technologies = "";
    for (let j = 0; j < projectObject[i].technologies.length; j += 1) {
      technologies = `${technologies}<li class="project_tag">${projectObject[i].technologies[j]}</li>`;
    }
    projectSecD.innerHTML = `${projectSecD.innerHTML}
    <li class="project">
    <img src="${projectObject[i].imageLink}" alt="Project Image 1" />
    <div class="project-des">
      <h2 class="project-title">${projectObject[i].name}</h2>
      <div class="projectInformation">
        <p class="projectCanopy">${projectObject[i].company}</p>
        <ul class="projectJob">
          <li class="jobInformation">${projectObject[i].role}</li>
          <li class="jobInformation">${projectObject[i].year}</li>
        </ul>
      </div>
      <p class="project_full_desc">
       ${projectObject[i].description}
      </p>
      <div class="project_tags_container">
        <ul class="tags_flex">
         ${technologies}
        </ul>
      </div>
      <button type="button" class="view_project_btn proj_${i + 1}">
        See Project
      </button>
    </div>
    </li>`;
  }
  for (let i = 0; i < projectObject.length; i += 1) {
    document.querySelector(`.proj_${i + 1}`).addEventListener("click", () => {
      titleDis.innerHTML = projectObject[i].name;
      cardCon.innerHTML = projectObject[i].company;
      cardRole.innerHTML = projectObject[i].role;
      cardYear.innerHTML = projectObject[i].year;
      innerDis.innerHTML = projectObject[i].description;
      projectImage.src = projectObject[i].imageLink;
      buttonViewSource.action = projectObject[i].sourceLink;
      buttonLiveSource.action = projectObject[i].demoLink;
      techTags.innerHTML = "";
      for (let j = 0; j < projectObject[i].technologies.length; j += 1) {
        techTags.innerHTML = `${techTags.innerHTML}<li class="project_tag">${projectObject[i].technologies[j]}</li>`;
      }
      cardMdL.classList.remove("vanish");
      cardMdL.classList.add("show");
      document.body.style.overflowY = "hidden";
    });
  }
})();

crossMdL.addEventListener("click", () => {
  cardMdL.classList.remove("show");
  cardMdL.classList.add("vanish");
  document.body.style.overflowY = "scroll";
});

const cards = document.querySelectorAll(".project");
for (let i = 0; i < cards.length; i += 1) {
  if (i % 2 === 1) {
    cards[i].classList.add("reversed");
  }
}
