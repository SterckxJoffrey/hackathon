
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });


  document.documentElement.setAttribute("lang", lang);


  localStorage.setItem("preferredLang", lang);
}


function getUserLanguage() {
  let lang = localStorage.getItem("preferredLang");
  

  if (!lang) {
    lang = navigator.language.slice(0,2); 
    if (!translations[lang]) {
      lang = "fr"; 
    }
  }

  return lang;
}


document.addEventListener("DOMContentLoaded", () => {
  const lang = getUserLanguage();
  translatePage(lang);
});

// Optionnel : sélecteur de langue (si tu ajoutes <select id="langSelector">)
const langSelector = document.getElementById("langSelector");
if (langSelector) {
  // Définir la valeur par défaut
  langSelector.value = getUserLanguage();

  langSelector.addEventListener("change", (e) => {
    translatePage(e.target.value);
  });
}