// For Typing
document.addEventListener("DOMContentLoaded", () => {
  const typedElement = document.querySelector("#element");
  if (typedElement) {
    const typed = new Typed(typedElement, {
      strings: ["Full Stack Developer", "MERN Stack Developer"],
      typeSpeed: 90,
      backSpeed: 70,
      loop: true,
    });
  }
});

// For Responsive Navbar
const menu = document.querySelector("#navLinks");
const menuIcon = document.querySelector(".menu-icon i");

menu.style.maxHeight = "0";
menu.style.transition = "max-height 0.3s ease-out";

menuIcon.addEventListener("click", () => {
  const isOpen = menu.style.maxHeight === "380px";
  menu.style.maxHeight = isOpen ? "0" : "380px";
  menuIcon.classList.toggle("bx-x", !isOpen);
});

const numbs = document.querySelectorAll(".numb");

numbs.forEach((numb) => {
  const targetPercentage = parseInt(numb.getAttribute("data-target"), 10);
  let counter = 0;

  const updateCounter = () => {
    if (counter <= targetPercentage) {
      numb.textContent = `${counter++}%`;
      requestAnimationFrame(updateCounter);
    }
  };

  requestAnimationFrame(updateCounter);
});

const formContainer = document.querySelector(".form-container");

formContainer.addEventListener("focusin", (event) => {
  const input = event.target;
  if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
    input.dataset.placeholder = input.placeholder;
    input.placeholder = "";
  }
});

formContainer.addEventListener("focusout", (event) => {
  const input = event.target;
  if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
    input.placeholder =
      input.value.trim() === "" ? input.dataset.placeholder : "";
  }
});

const myButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight - 10) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
});

myButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".skill-container .right", {
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".skill-container",
      start: "top 40%",
      end: "bottom 80%",
      scrub: 2,
      once: true,
    },
  });

  gsap.from(".skill-container .left", {
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".skill-container",
      start: "top 40%",
      end: "bottom 80%",
      scrub: 4,
      once: true,
    },
  });

  gsap.from(".portfolio-container .project-item", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".portfolio-container",
      end: "bottom 80%",
      scrub: 2,
      once: true,
    },
  });

  gsap.from(".form-container", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".form-container",
      start: "top 100%",
      end: "bottom 80%",
      scrub: 4,
      once: true,
    },
  });
});
