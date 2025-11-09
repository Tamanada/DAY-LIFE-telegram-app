// assets/lang.js
// 🌍 Centralized multilingual system for DAYLIFE

const DAYLIFE_LANGS = [
  "en", "fr", "es", "de", "it", "pt", "th", "my", "zh", "ru", "hi", "ar"
];

const translations = {
  en: {
    langName: "English",
    nav: { home: "Home", dreams: "Dreams", team: "Team", profile: "Profile" },
    dreams: {
      title: "Your Dreams",
      subtitle: "Turn your days into dreams, and your dreams into days.",
      newDream: "New Dream",
    },
    profile: {
      anon: "Anonymity Mode",
      anonDesc: "Hide your name when sharing your dreams publicly.",
      inviteFriends: "Invite Friends",
      referralText: "Your personal referral link:",
      share: "Share Your Progress",
      scan: "Scan to join your journey",
    },
    home: {
      title: "How many days did you arrive on Earth?",
      lived: "Days lived",
      remaining: "Days remaining",
      stars: "Total Stars",
    },
  },

  fr: {
    langName: "Français",
    nav: { home: "Accueil", dreams: "Rêves", team: "Équipe", profile: "Profil" },
    dreams: {
      title: "Vos Rêves",
      subtitle: "Transformez vos jours en rêves, et vos rêves en jours.",
      newDream: "Nouveau Rêve",
    },
    profile: {
      anon: "Mode Anonyme",
      anonDesc: "Masquez votre nom lorsque vous partagez vos rêves publiquement.",
      inviteFriends: "Inviter des amis",
      referralText: "Votre lien de parrainage personnel :",
      share: "Partagez vos progrès",
      scan: "Scannez pour rejoindre votre voyage",
    },
    home: {
      title: "Combien de jours êtes-vous sur Terre ?",
      lived: "Jours vécus",
      remaining: "Jours restants",
      stars: "Total d’étoiles",
    },
  },

  es: {
    langName: "Español",
    nav: { home: "Inicio", dreams: "Sueños", team: "Equipo", profile: "Perfil" },
    dreams: {
      title: "Tus Sueños",
      subtitle: "Convierte tus días en sueños, y tus sueños en días.",
      newDream: "Nuevo Sueño",
    },
    profile: {
      anon: "Modo Anónimo",
      anonDesc: "Oculta tu nombre al compartir tus sueños públicamente.",
      inviteFriends: "Invitar Amigos",
      referralText: "Tu enlace personal de invitación:",
      share: "Comparte tu progreso",
      scan: "Escanea para unirte a tu viaje",
    },
    home: {
      title: "¿Cuántos días llevas en la Tierra?",
      lived: "Días vividos",
      remaining: "Días restantes",
      stars: "Estrellas totales",
    },
  },
};

// 🧩 Core i18n engine
window.DaylifeI18n = {
  getLang() {
    return localStorage.getItem("daylifeLang");
  },

  detectLang() {
    const lang = navigator.language.slice(0, 2);
    return DAYLIFE_LANGS.includes(lang) ? lang : "en";
  },

  setLang(lang) {
    if (!DAYLIFE_LANGS.includes(lang)) lang = "en";
    localStorage.setItem("daylifeLang", lang);
    this.applyTranslations();
  },

  t(key) {
    const lang = this.getLang() || this.detectLang();
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) value = value?.[k];
    return value || key;
  },

  applyTranslations() {
    const lang = this.getLang() || this.detectLang();
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    // Also update <select> language selector if exists
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.innerHTML = DAYLIFE_LANGS.map(
        (lng) =>
          `<option value="${lng}" ${
            lng === lang ? "selected" : ""
          }>${translations[lng]?.langName || lng}</option>`
      ).join("");
      langSelect.addEventListener("change", (e) =>
        this.setLang(e.target.value)
      );
    }
  },
};

// Initialize translations on page load
document.addEventListener("DOMContentLoaded", () => {
  DaylifeI18n.applyTranslations();
});
