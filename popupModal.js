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
    name: "Uber Navigation",
    imageLink: "assets/snapshoot-portfolio2.png",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    role: "Uber",
    technologies: ["html", "css", "javascript", "Ruby"],
    year: "2018",
    company: "Lead Developer",
    sourceLink: "#",
    demoLink: "#",
  },
  {
    name: "Mulit-Post Stories",
    imageLink: "assets/snapshoot-portfolio3.png",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    role: "Full Stack Dev",
    technologies: ["html", "css", "javascript"],
    year: "2015",
    company: "Facebook",
    sourceLink: "#",
    demoLink: "#",
  },
  {
    name: "Tonic",
    imageLink: "assets/snapshoot-portfolio4.png",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    role: "Back End Dev",
    technologies: ["html", "css", "javascript", "Ruby"],
    year: "2015",
    company: "Canopy",
    sourceLink: "#",
    demoLink: "#",
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
