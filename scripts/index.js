// Open menu bar
const openMenuBar = () => {
  const menuBar = document.getElementById("the-menu-bar");
  const menuBarOverlay = document.getElementById("menu-bar-overlay");
  menuBar.addEventListener("click", () => {
    menuBarOverlay.style.display = "block";
  });
};
openMenuBar();

// Close menu bar
function closeMenuBar() {
  document.getElementById("menu-bar-overlay").style.display = "none";
}

// Open mobile menu options
const menuOptions = document.querySelectorAll(".menu-options");
const mobileMenuOpts = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener("click", () => {
      closeMenuBar();
    });
  });
};
mobileMenuOpts();

// Create and Display Projects Section

const workSection = [
  {
    id: 1,
    class: "OneProjectReverse",
    title: "Waymark Dental Website",
    description:
      "A dental website for a dental clinic located in Nairobi, Kenya",
    popup_description:
      "The aim of the website was to give the business internet visibility and attract the right patients",
    featured_image: "images/waymark.png",
    alt_message: "Waymark Detal Centre Website",
    overview: ["WEB APP", "Front End Dev", 2022],
    overview_image: "images/circle.svg",
    technologies: ["reactjs", "redux"],
    liveVersion: "https://dental-website-efidtzeps-abbynyakara.vercel.app/",
    liveSource: "https://github.com/AbbyNyakara/DentalWebsite",
  },
  {
    id: 2,
    class: "OneProjectReverse",
    title: "E-Commerce Product Page",
    description:
      "An e-commerce product page with a shopping cart functionality.",
    popup_description:
      "This project mimics a product landing page for an e-commerce platform. ",
    featured_image: "images/commerce.png",
    alt_message: "My_react-to-do_Project",
    overview: ["WEB APP", "Front End Dev", 2022],
    overview_image: "images/circle.svg",
    technologies: ["ReactJS", "scss", "Redux"],
    liveVersion: "https://e-commerce-product-page-abbynyakara.vercel.app/",
    liveSource: "https://github.com/AbbyNyakara/E-Commerce-ProductPage",
  },
  {
    id: 3,
    class: "OneProjectReverse",
    title: "Todo App",
    description:
      "A Todo Application with a theme-changer and ability to group and filter tasks. ",
    popup_description:
      "The todo web app is a curated todo list",
    featured_image: "images/todo.png",
    alt_message: "Todo_App",
    overview: ["VueJS", "Front End Dev", 2022],
    overview_image: "images/circle.svg",
    technologies: ["javaScript", "VueJS", "Vitest"],
    liveVersion: "https://todo-list-vue-submission-f868835e1-abbynyakara.vercel.app/",
    liveSource: "https://github.com/AbbyNyakara/TodoListVueSubmission",
  },
  {
    id: 4,
    class: "OneProjectReverse",
    title: "Doc Appointments",
    description:
      "A doctor's appointment app that allows the user to book an appointment with a doctor.",
    popup_description:
      "This app allows the user to both book and cancel doctor's appointments. It also allows the user to filter the doctors by category and add a new doctor to their list.",
    featured_image: "images/doc2.png",
    alt_message: "My_Doc_Project",
    overview: ["WEB APP", "Full Stack Dev", 2022],
    overview_image: "images/circle.svg",
    technologies: ["reactjs", "Redux", "Rails"],
    liveVersion: "https://doc-appointments.netlify.app/",
    liveSource: "https://github.com/TracK92/doctor-appointment-front-end.git",
  },
];
// Create Project Section
function CreateProject(element) {
  const worksSect = document.querySelector("#portfolio-sect");
  worksSect.classList.add("works-sect");

  const projects = document.createElement("div");
  projects.classList.add("projects");
  worksSect.appendChild(projects);

  const projectOne = document.createElement("div");
  projectOne.classList.add("oneProject");
  projects.appendChild(projectOne);

  const articles = document.createElement("div");
  articles.classList.add("articles", `${element.class}`);
  projectOne.appendChild(articles);

  const articleOne = document.createElement("article");
  articleOne.classList.add("article-one");
  articleOne.innerHTML = `<img class='main-img' src="${element.featured_image}" alt="${element.alt_message}">`;
  articles.appendChild(articleOne);

  const articleTwo = document.createElement("article");
  articleTwo.classList.add("article-two");
  articles.appendChild(articleTwo);

  const headingTwo = document.createElement("h2");
  headingTwo.classList.add("tonic");
  headingTwo.innerHTML = `${element.title}`;
  articleTwo.appendChild(headingTwo);

  const description = document.createElement("div");
  description.classList.add("description");
  articleTwo.appendChild(description);

  const headingFive = document.createElement("h5");
  headingFive.classList.add("descript");
  headingFive.innerHTML = `${element.overview[0]}`;
  description.appendChild(headingFive);

  const unorderedList = document.createElement("ul");
  description.appendChild(unorderedList);

  const listOne = document.createElement("li");
  listOne.innerHTML = `<img src="${element.overview_image}" alt="circle">`;
  unorderedList.appendChild(listOne);

  const listTwo = document.createElement("li");
  listTwo.innerHTML = `${element.overview[1]}`;
  unorderedList.appendChild(listTwo);

  const listThree = document.createElement("li");
  listThree.innerHTML = `<img src="${element.overview_image}" alt="circle">`;
  unorderedList.appendChild(listThree);

  const listFour = document.createElement("li");
  listFour.innerHTML = `${element.overview[2]}`;
  unorderedList.appendChild(listFour);

  const textSect = document.createElement("div");
  textSect.classList.add("text-sect");
  articleTwo.appendChild(textSect);

  const textDescription = document.createElement("p");
  textDescription.classList.add("text-description");
  textDescription.innerHTML = `${element.description}`;
  textSect.appendChild(textDescription);

  const languages = document.createElement("div");
  languages.classList.add("languages");
  articleTwo.appendChild(languages);

  const unorderedListTwo = document.createElement("ul");
  languages.appendChild(unorderedListTwo);

  const listLanguagesOne = document.createElement("li");
  listLanguagesOne.innerHTML = `${element.technologies[0]}`;
  unorderedListTwo.appendChild(listLanguagesOne);

  const listLanguagesTwo = document.createElement("li");
  listLanguagesTwo.innerHTML = `${element.technologies[1]}`;
  unorderedListTwo.appendChild(listLanguagesTwo);

  const listLanguagesThree = document.createElement("li");
  listLanguagesThree.innerHTML = `${element.technologies[2]}`;
  unorderedListTwo.appendChild(listLanguagesThree);

  const seeProjectOption = document.createElement("div");
  articleTwo.appendChild(seeProjectOption);

  const seeProjectBtn = document.createElement("button");
  seeProjectBtn.classList.add("see_project");
  seeProjectBtn.id = `${element.id}`;
  seeProjectBtn.innerHTML = "See Project";
  seeProjectOption.appendChild(seeProjectBtn);
}
const displayProject = () => {
  workSection.forEach((element) => CreateProject(element));
};
displayProject();

// POPUP WINDOWS
const checkProjects = document.querySelectorAll(".see_project");
const mobilePopup = document.querySelector(".mobile-popup-window");
const desktopPopup = document.querySelector(".desktop-popup-window");
const projectImage = document.querySelector(".mobile-projects");
const desktopProjectImage = document.querySelector(".desktop-projects");

function addPopupImage(seeProjectId) {
  const foundProject = workSection.filter(
    (element) => element.id === seeProjectId
  )[0];
  // mobile popup
  projectImage.innerHTML = `<div class="oneProject project1">
        <div class="popup-header">
          <h2 class="tonic popupheading">${foundProject.title}</h2>
          <img class="menu-icon popup-icon close-modal" src="./images/popup-icon.svg" alt="close-popup-bar"/>
        </div>
         <div class="description">
          <h5 class="descript">${foundProject.overview[0]}</h5>
          <ul>
            <li>
              <img src="images/circle.svg" alt="circle" />
            </li>
            <li>${foundProject.overview[1]}</li>
            <li>
              <img src="images/circle.svg" alt="circle" />
            </li>
            <li>${foundProject.overview[2]}</li>
          </ul>
        </div>
        <div class="text-sect-popup mobile-text-sect">
          <p class="text-description mobile-text-sect">${foundProject.popup_description}</p>
        </div>
        <div>
          <a href="${foundProject.liveVersion}" target="_blank" class="see_project-popup see_live">See Live <img
          src="images/see-live-icon.svg" alt="see-live-icon" /></a>
          <a href="${foundProject.liveSource}" target="_blank" class="see_project-popup see_source">See Source <img
          src="images/see-source-icon.svg" alt="see-source-github-icon" /></a>
        </div>
      </div>`;
  // desktop popup
  desktopProjectImage.innerHTML = `
  <div class="oneProject-desktop-popup">
        <div class="popup-header">
          <h2 class="desktopPopupheading">${foundProject.title}</h2>
          <img class="menu-icon popup-icon close-modal" src="./images/popup-icon.svg" alt="close-popup-bar"/>
        </div>
        <div class="desktop-project-img">
          <img class="desktop-img-popup" src="${foundProject.featured_image}" alt="${foundProject.alt_message}">
        </div>
        <article class="desktop-popup-segment">
          <div class="first-segment">
            <div class="text-sect-popup">
              <p class="text-description-popup">${foundProject.popup_description}</p>
            </div>
          </div>
          <div class="second-segment">
            <div class="see-project-desktop-version">
              <a href="${foundProject.liveVersion}" target="_blank" class="see-project-desktop-popup see_live">See Live <img
                  src="images/see-live-icon.svg" alt="see-live-icon" /></a>
              <a href="${foundProject.liveSource}" target="_blank" class="see-project-desktop-popup see_source">See Source <img
                  src="images/see-source-icon.svg" alt="see-source-github-icon" /></a>
            </div>
          </div>
        </article>
      </div>`;
  // close popups
  const close = document.querySelectorAll(".close-modal");
  close.forEach((closebtn) => {
    closebtn.addEventListener("click", () => {
      mobilePopup.style.display = "none";
      desktopPopup.style.display = "none";
    });
  });
}

// Open Popup Windows
const viewProjectDetails = () => {
  checkProjects.forEach((singleProject) => {
    singleProject.addEventListener("click", () => {
      if (Number(singleProject.id) === 1) {
        mobilePopup.style.display = "block";
        desktopPopup.style.display = "block";
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 2) {
        mobilePopup.style.display = "block";
        desktopPopup.style.display = "block";
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 3) {
        mobilePopup.style.display = "block";
        desktopPopup.style.display = "block";
        addPopupImage(Number(singleProject.id));
      } else if (Number(singleProject.id) === 4) {
        mobilePopup.style.display = "block";
        desktopPopup.style.display = "block";
        addPopupImage(Number(singleProject.id));
      }
    });
  });
};
viewProjectDetails();
