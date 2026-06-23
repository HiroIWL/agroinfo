document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      const partesNome = nome.split(" ").filter(function (parte) {
        return parte.length > 0;
      });

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (nome === "") {
        alert("O campo Nome completo não pode ficar em branco.");
        return;
      }

      if (partesNome.length < 2) {
        alert("Digite seu nome completo, com nome e sobrenome.");
        return;
      }

      if (partesNome[0].length < 2 || partesNome[1].length < 2) {
        alert("Nome e sobrenome devem ter pelo menos duas letras cada.");
        return;
      }

      if (email === "") {
        alert("O campo E-mail não pode ficar em branco.");
        return;
      }

      if (!emailValido) {
        alert("Digite um e-mail em formato válido.");
        return;
      }

      if (mensagem === "") {
        alert("O campo Descrição da mensagem não pode ficar em branco.");
        return;
      }

      if (mensagem.length > 500) {
        alert("A mensagem deve ter no máximo 500 caracteres.");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }

  const botoesDetalhes = document.querySelectorAll(".ver-mais");

  botoesDetalhes.forEach(function (botao) {
    botao.addEventListener("click", function (event) {
      event.preventDefault();

      const card = botao.closest(".cultura-card");

      if (!card) {
        return;
      }

      card.classList.toggle("ativo");

      if (card.classList.contains("ativo")) {
        botao.textContent = "Ocultar detalhes ↑";
      } else {
        botao.textContent = "Ver detalhes completos →";
      }
    });
  });
});
