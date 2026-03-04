// Sélection du H1
const h1 = document.getElementById('animated-text');
const text = h1.textContent;
h1.textContent = '';

// Crée un span pour chaque lettre et applique un délai d'animation
text.split('').forEach((char, i) => {
  const span = document.createElement('span');
  // Si c'est un espace, on met un espace insécable
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = `${i * 0.08}s`; // lettres apparaissent une par une
  h1.appendChild(span);
});