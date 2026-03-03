const navContainer = document.getElementById("nav");

fetch('pages/nav.html')
  .then(response => response.text())
  .then(data => {
    navContainer.innerHTML = data;
    
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    
    openBtn.onclick = (e) => {
      e.preventDefault();
      sidenav.classList.add("active");
      openBtn.classList.add("hidden");
    };
    closeBtn.onclick = (e) => {
      e.preventDefault();
      sidenav.classList.remove("active");
      openBtn.classList.remove("hidden");
    };
  });