let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 15000);

document.addEventListener("DOMContentLoaded", () => {

  const affirmations = [
    "Eres suficiente tal y como eres",
    "Tus emociones importan",
    "No estás exagerando",
    "Está bien avanzar a tu ritmo",
    "Lo que sientes es válido",
    "Mereces cuidado y respeto",
    "Sanar no es lineal",
    "No tienes que hacerlo todo hoy",
    "Tu historia importa",
    "Pedir ayuda es valentía",
    "No estás solo en este proceso",
    "Está bien descansar",
    "Cada paso cuenta",
    "Tu bienestar es prioridad",
    "No tienes que ser fuerte todo el tiempo",
    "Aquí puedes ser tú",
    "Tus límites también son importantes",
    "Avanzar despacio también es avanzar",
    "Puedes volver a empezar",
    "No hay emociones incorrectas",
    "Mereces sentirte en paz",
    "Tu proceso es único",
    "Es válido sentir miedo",
    "Estás haciendo lo mejor que puedes",
    "Tu voz merece ser escuchada"
  ];

  let index = 0;
  const textElement = document.getElementById("affirmation");

  setInterval(() => {
    textElement.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % affirmations.length;
      textElement.textContent = affirmations[index];
      textElement.style.opacity = 1;
    }, 1000);

  }, 3000);

});

document.addEventListener("DOMContentLoaded", () => {

  const groups = document.querySelectorAll(".opinion-group");
  let currentGroup = 0;

  if (groups.length === 0) return;

  setInterval(() => {

    // Fade out grupo actual
    groups[currentGroup].style.opacity = 0;

    setTimeout(() => {
      groups[currentGroup].classList.remove("active");

      // Siguiente grupo
      currentGroup = (currentGroup + 1) % groups.length;
      groups[currentGroup].classList.add("active");

      // Fade in
      setTimeout(() => {
        groups[currentGroup].style.opacity = 1;
      }, 50);

    }, 1000); // duración del fade out

  }, 10000); // cambia cada 15s

});

// ===== PALABRAS LATERALES =====
const palabrasLaterales = [
  "Respirá",
  "Amate",
  "Cuidate",
  "No estás sola",
  "Podés ir despacio",
  "Tu proceso importa",
  "Estás a salvo",
  "Elegite",
  "Confiá",
  "Pausá",
  "Sentí",
  "Calma",
  "Presencia",
  "Compasión",
  "Paciencia",
  "Tu ritmo es correcto",
  "No tenés que explicarte",
  "Tu bienestar es prioridad",
  "Todo paso cuenta",
  "Permitite"
];

function palabraRandom() {
  return palabrasLaterales[Math.floor(Math.random() * palabrasLaterales.length)];
}

function posicionRandom() {
  return {
    top: Math.random() * 90 + 2,   // casi toda la altura
    left: Math.random() * 80 + 10  // margen interno
  };
}

function animarPalabra(id) {
  const el = document.getElementById(id);
  if (!el) return;

  setInterval(() => {
    el.textContent = palabraRandom();
    const pos = posicionRandom();
    el.style.top = pos.top + "%";
    el.style.left = pos.left + "%";
  }, 6000);
}

document.addEventListener("DOMContentLoaded", () => {
  animarPalabra("palabra-izq");
  animarPalabra("palabra-der");
});
