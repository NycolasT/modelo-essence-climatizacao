// 1. Selecionar os elementos
const menuIcon = document.querySelector(".mobile-menu-icon");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// 2. Função para abrir/fechar menu
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Troca o ícone de 'list' para 'x' (fechar)
  const icon = menuIcon.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("ph-list");
    icon.classList.add("ph-x");
  } else {
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  }
});

// 3. Fechar o menu quando clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    // Reseta o ícone
    const icon = menuIcon.querySelector("i");
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  });
});
