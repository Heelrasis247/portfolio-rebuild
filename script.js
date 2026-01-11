emailjs.init("gSTw_MLt_lKyqP3NK");
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = "Thank you! I will get back to you soon.";
  formMessage.style.color = "#0a3d62";
  contactForm.reset();
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); 
// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
// Initialize EmailJS
emailjs.init("gSTw_MLt_lKyqP3NK"); // Public Key

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_nw7r9uy', 'vjhr08q', this)
    .then(() => {
      alert("Message sent successfully! 🚀");
      contactForm.reset();
    }, (error) => {
      alert("Oops! Something went wrong...", error);
      console.error(error);
    });
});
// Scroll Reveal Effect
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}
// Image Lightbox
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Business Project Form
const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_nw7r9uy', 'business_request', this)
    .then(() => {

});
// Business Project Request Form
const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_nw7r9uy', 'ih1sg7i', this)
    .then(() => {
      alert("Project request sent successfully! I'll contact you shortly 🚀");
      orderForm.reset();
    }, (error) => {
      alert("Something went wrong. Please try again.");
      console.error(error);
    });
});
