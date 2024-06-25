const resMenuBtn = document.querySelector(".res-menu-btn");
const resMenu = document.querySelector(".res-menu");
const closeResMenuBtn = document.querySelector(".close-res-menu-btn");
const navbar = document.querySelector(".navbar-nav");
const links = document.querySelectorAll(".navbar-nav .nav-link");
const resMenuLinks = document.querySelectorAll(".res-menu .nav-link");

navbar.addEventListener("click", (e) => {
  const ele = e.target;

  links.forEach((link) => {
    if (link.href === ele.href) {
      ele.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

resMenu.addEventListener("click", (e) => {
  const ele = e.target;

  if (ele.className === "nav-link") {
    resMenu.classList.remove("active");

    resMenuLinks.forEach((link) => {
      if (link.href === ele.href) {
        ele.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    });
  }
});

resMenuBtn.addEventListener("click", () => {
  resMenu.classList.toggle("active");
});

closeResMenuBtn.addEventListener("click", () => {
  resMenu.classList.remove("active");
});
