const img = document.getElementById("content");

img.addEventListener("click", () => {
    window.location.href = "/pages/song.html";
});

// // home.js ou dans <script> à la fin
// document.addEventListener("DOMContentLoaded", () => {
//   // Créer le message
//   const message = document.createElement("div");
//   message.id = "moreInfoMessage";
//   message.innerHTML = `
//     <p style="color: #ff69b4; font-size: 1.2rem; text-align: center;">
//       Vous voulez en savoir plus sur moi ? <a href="/album" style="color: #ff69b4; text-decoration: underline;">Cliquez sur mon album</a>
//     </p>
//   `;

//   // Style du conteneur pour qu'il soit centré et visible
//   message.style.position = "fixed";
//   message.style.bottom = "20px";
//   message.style.left = "50%";
//   message.style.transform = "translateX(-50%)";
//   message.style.backgroundColor = "rgba(255, 192, 203, 0.1)"; // léger fond rose transparent
//   message.style.padding = "10px 20px";
//   message.style.borderRadius = "10px";
//   message.style.boxShadow = "0 0 10px rgba(255,105,180,0.5)";
//   message.style.display = "none"; // caché au départ
//   message.style.zIndex = "1000";

//   document.body.appendChild(message);

//   // Afficher le message après 6 secondes
//   setTimeout(() => {
//     message.style.display = "block";
//     // Optionnel : ajout d'une animation fade-in
//     message.style.opacity = "0";
//     message.style.transition = "opacity 1s";
//     requestAnimationFrame(() => {
//       message.style.opacity = "1";
//     });
//   }, 6000);
// });