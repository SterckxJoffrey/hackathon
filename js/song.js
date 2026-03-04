const spotifyEmbeds = [
  `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3AyeEQHxCOzJ22b2mQTUPK?utm_source=generator" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7mbjbYsq0gFOD6qm9oOlVT?utm_source=generator" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5Y8lc1PFBvS4a6yoLBCocW?utm_source=generator" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1t2DuK4AAnNbaiQl7QKFKA?utm_source=generator" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
];

const container = document.getElementById("songsContainer");

spotifyEmbeds.forEach(embedCode => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = embedCode;
  container.appendChild(wrapper);
});