// concert.js

// Liste des iframes Spotify embed (tu peux en ajouter autant que tu veux)
const spotifyEmbeds = [
  `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3AyeEQHxCOzJ22b2mQTUPK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1rgnBhdG2JDFTbYkYRZAku?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
];

// Récupération du container
const container = document.getElementById("songsContainer");

// Ajout de chaque iframe dans le container
spotifyEmbeds.forEach(embedCode => {
  container.innerHTML += embedCode + "<br>"; // <br> pour un petit espace entre les musiques
});