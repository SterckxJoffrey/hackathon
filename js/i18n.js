// translate.js
// ============================
// Script de traduction dynamique
// ============================

// Fonction principale pour traduire la page
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Mettre à jour l'attribut lang de <html>
  document.documentElement.setAttribute("lang", lang);

  // Persister le choix utilisateur
  localStorage.setItem("preferredLang", lang);
}

// Fonction pour obtenir la langue à utiliser
function getUserLanguage() {
  let lang = localStorage.getItem("preferredLang");
  
  // Si aucune langue choisie, détecter la langue du navigateur
  if (!lang) {
    lang = navigator.language.slice(0,2); // ex: "fr", "nl", "en"
    if (!translations[lang]) {
      lang = "fr"; // Langue par défaut si non supportée
    }
  }

  return lang;
}

// Traduire la page au chargement
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