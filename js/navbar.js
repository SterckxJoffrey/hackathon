  const links = document.querySelectorAll('.navbar a');

  
  const currentPage = window.location.pathname.split('/').pop(); 

  links.forEach(link => {
 
    const linkPage = link.getAttribute('href');


    if (linkPage === currentPage) {
      link.classList.add('active'); 
    }
  });