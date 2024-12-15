// script.js

const themeToggle = document.getElementById("theme-toggle");

// Adiciona o evento de clique para alternar o tema
themeToggle.addEventListener("click", () => {
  // Alterna a classe "light-theme" no body
  document.body.classList.toggle("light-theme");

  // Verifica se o tema "light-theme" está ativo e altera as variáveis CSS
  if (document.body.classList.contains("light-theme")) {
    // Muda as variáveis para o tema claro
    document.documentElement.style.setProperty('--dark-background', '#f0f0f0');
    document.documentElement.style.setProperty('--light-background', '#333');
    document.documentElement.style.setProperty('--text-color', '#333');
  } else {
    // Muda as variáveis para o tema escuro
    document.documentElement.style.setProperty('--dark-background', '#1a1a1a');
    document.documentElement.style.setProperty('--light-background', '#f0f0f0');
    document.documentElement.style.setProperty('--text-color', '#fff');
  }
});
