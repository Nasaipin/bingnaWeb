// BingaWeb interactions
// Replace the placeholder number below with your real WhatsApp number.
// Ghana example: 233241234567 (no +, spaces or dashes)
const WHATSAPP_NUMBER = "233597167403";

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
}, {passive:true});

backTop.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (WHATSAPP_NUMBER.includes("X")) {
    // alert("Please replace WHATSAPP_NUMBER in js/script.js with your real WhatsApp number.");
    return;
  }

  const text = `Hello BingaWeb,

I would like to enquire about a website.

Name: ${name}
Business: ${business}
Phone: ${phone}

Project details:
${message}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer"
  );
});
