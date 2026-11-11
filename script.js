// Massas Miletto — links e pequenos comportamentos do cardápio
const WHATSAPP_NUMBER = "5511984232967";
const WHATSAPP_MESSAGE = "Olá! Vim pelo cardápio digital da Massas Miletto e gostaria de fazer uma encomenda. 🍝";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Destaca a categoria correspondente durante a navegação.
const categoryLinks = document.querySelectorAll(".category-link");
const categorySections = document.querySelectorAll("#massas, #molhos");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        categoryLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-25% 0px -60% 0px" });

  categorySections.forEach((section) => observer.observe(section));
}
