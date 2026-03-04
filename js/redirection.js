    // setTimeout(() => {
    //   window.location.href = '../pages/about.html'; 
    // }, 2000);

    // JS
const container = document.getElementById("songsContainer");

container.addEventListener("click", (e) => {
  if(e.target.classList.contains("playButton")) {
    const embedUrl = e.target.getAttribute("data-embed");


    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.width = "100%";
    iframe.height = "152";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = "12px";
    iframe.loading = "lazy";


    e.target.replaceWith(iframe);
  }
});