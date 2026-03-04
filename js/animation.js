
const h1 = document.getElementById('artist-name');
const text = h1.textContent;
h1.textContent = '';

text.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = `${i * 0.08}s`; 
  h1.appendChild(span);
});