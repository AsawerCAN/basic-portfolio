// For Typing
const typed = new Typed("#element", {
  strings: ["Full Stack Developer", "MERN Stack Developer"],
  typeSpeed: 90,
  backSpeed: 70,
  loop: true,
});

// For Responsive Navbar
const menu = document.querySelector("#navLinks");
const menuIcon = document.querySelector(".menu-icon i");

menu.style.maxHeight = "0";

menuIcon.addEventListener("click", () => {
  const isOpen = menu.style.maxHeight === "380px";
  menu.style.maxHeight = isOpen ? "0" : "380px";
  menuIcon.classList.toggle("bx-x", !isOpen);
});

// Circular Progress Bar
const numbs = document.querySelectorAll(".numb");

numbs.forEach((numb) => {
  const counter = 0;
  const targetPercentage = parseInt(numb.getAttribute("data-target"), 10);
  const speed = 20;

  const interval = setInterval(() => {
    if (counter >= targetPercentage) {
      clearInterval(interval);
    } else {
      numb.textContent = `${counter++}%`;
    }
  }, speed);
});

// Input Form
const formInputs = document.querySelectorAll(
  ".form-container input, .form-container textarea"
);

formInputs.forEach((input) => {
  input.addEventListener("focus", () => input.removeAttribute("placeholder"));
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      input.setAttribute("placeholder", input.getAttribute("data-placeholder"));
    }
  });
  input.setAttribute("data-placeholder", input.getAttribute("placeholder"));
});

// To Top Button
const myButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  myButton.style.display = window.scrollY > 20 ? "block" : "none";
});

myButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// GSAP Animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".skill-container .right", {
    opacity: 0,
    duration: 5,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".skill-container",
      start: "top 40%",
      end: "bottom 80%",
      scrub: 2,
    },
  });

  gsap.from(".skill-container .left", {
    opacity: 0,
    duration: 20,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".skill-container",
      start: "top 40%",
      end: "bottom 80%",
      scrub: 4,
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
    },
  });
});
