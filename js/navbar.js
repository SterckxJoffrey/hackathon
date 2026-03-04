  const links = document.querySelectorAll('.navbar a');

  // Récupère le nom du fichier de la page actuelle
  const currentPage = window.location.pathname.split('/').pop(); // ex: "waiting.html"

  links.forEach(link => {
    // Récupère le href du lien
    const linkPage = link.getAttribute('href');

    // Si le href correspond au nom du fichier actuel
    if (linkPage === currentPage) {
      link.classList.add('active'); // ajoute la classe "active"
    }
  });