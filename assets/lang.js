// 🌍 DAYLIFE Translations (12 languages)
const translations = {
  en: {
    home: "Home",
    dreams: "Dreams",
    reflections: "Reflections",
    profile: "Profile",
    welcome: "Welcome back to DAYLIFE",
    subtitle: "Every day counts. Let’s make yours shine.",
    stars: "Stars earned",
    dreamsInProgress: "Dreams in progress",
    reflectionsWritten: "Reflections written",
  },
  fr: {
    home: "Accueil",
    dreams: "Rêves",
    reflections: "Réflexions",
    profile: "Profil",
    welcome: "Bienvenue sur DAYLIFE",
    subtitle: "Chaque jour compte. Fais briller le tien.",
    stars: "Étoiles gagnées",
    dreamsInProgress: "Rêves en cours",
    reflectionsWritten: "Réflexions écrites",
  },
  es: {
    home: "Inicio",
    dreams: "Sueños",
    reflections: "Reflexiones",
    profile: "Perfil",
    welcome: "Bienvenido a DAYLIFE",
    subtitle: "Cada día cuenta. Haz que el tuyo brille.",
    stars: "Estrellas ganadas",
    dreamsInProgress: "Sueños en progreso",
    reflectionsWritten: "Reflexiones escritas",
  },
  th: {
    home: "หน้าแรก",
    dreams: "ความฝัน",
    reflections: "การสะท้อน",
    profile: "โปรไฟล์",
    welcome: "ยินดีต้อนรับสู่ DAYLIFE",
    subtitle: "ทุกวันมีค่า ทำให้วันของคุณเปล่งประกาย",
    stars: "ดาวที่ได้รับ",
    dreamsInProgress: "ความฝันที่กำลังดำเนินอยู่",
    reflectionsWritten: "การสะท้อนที่เขียนไว้",
  },
  my: {
    home: "ပင်မ",
    dreams: "အိပ်မက်များ",
    reflections: "အတွေးအခေါ်များ",
    profile: "ပရိုဖိုင်",
    welcome: "DAYLIFE သို့ ကြိုဆိုပါသည်",
    subtitle: "နေ့တိုင်းအရေးကြီးပါတယ်၊ သင်၏နေ့ကို တန်ဖိုးရှိစေပါ။",
    stars: "ကြယ်များရရှိသည်",
    dreamsInProgress: "အိပ်မက်များ လုပ်ဆောင်နေသည်",
    reflectionsWritten: "အတွေးအခေါ်များ ရေးသားပြီး",
  },
  de: {
    home: "Startseite",
    dreams: "Träume",
    reflections: "Reflexionen",
    profile: "Profil",
    welcome: "Willkommen bei DAYLIFE",
    subtitle: "Jeder Tag zählt. Mach deinen zum Glänzen.",
    stars: "Verdiente Sterne",
    dreamsInProgress: "Träume in Arbeit",
    reflectionsWritten: "Geschriebene Reflexionen",
  },
  ru: {
    home: "Главная",
    dreams: "Мечты",
    reflections: "Размышления",
    profile: "Профиль",
    welcome: "Добро пожаловать в DAYLIFE",
    subtitle: "Каждый день важен. Пусть твой сияет.",
    stars: "Звёзды заработаны",
    dreamsInProgress: "Мечты в процессе",
    reflectionsWritten: "Размышления записаны",
  },
  it: {
    home: "Home",
    dreams: "Sogni",
    reflections: "Riflessioni",
    profile: "Profilo",
    welcome: "Benvenuto in DAYLIFE",
    subtitle: "Ogni giorno conta. Fai brillare il tuo.",
    stars: "Stelle guadagnate",
    dreamsInProgress: "Sogni in corso",
    reflectionsWritten: "Riflessioni scritte",
  },
  pt: {
    home: "Início",
    dreams: "Sonhos",
    reflections: "Reflexões",
    profile: "Perfil",
    welcome: "Bem-vindo ao DAYLIFE",
    subtitle: "Cada dia conta. Faça o seu brilhar.",
    stars: "Estrelas ganhas",
    dreamsInProgress: "Sonhos em andamento",
    reflectionsWritten: "Reflexões escritas",
  },
  zh: {
    home: "首页",
    dreams: "梦想",
    reflections: "反思",
    profile: "个人资料",
    welcome: "欢迎来到 DAYLIFE",
    subtitle: "每一天都很重要，让你的闪耀吧。",
    stars: "已获得的星星",
    dreamsInProgress: "进行中的梦想",
    reflectionsWritten: "已写的反思",
  },
  ja: {
    home: "ホーム",
    dreams: "夢",
    reflections: "リフレクション",
    profile: "プロフィール",
    welcome: "DAYLIFEへようこそ",
    subtitle: "毎日が大切です。あなたの日々を輝かせましょう。",
    stars: "獲得したスター",
    dreamsInProgress: "進行中の夢",
    reflectionsWritten: "書いたリフレクション",
  },
  ar: {
    home: "الرئيسية",
    dreams: "الأحلام",
    reflections: "التأملات",
    profile: "الملف الشخصي",
    welcome: "مرحبًا بك في DAYLIFE",
    subtitle: "كل يوم مهم، اجعل يومك يتألق.",
    stars: "النجوم المكتسبة",
    dreamsInProgress: "الأحلام الجارية",
    reflectionsWritten: "التأملات المكتوبة",
  }
};

// ✅ Langue détectée ou enregistrée
function getUserLang() {
  const storedLang = localStorage.getItem("lang");
  if (storedLang && translations[storedLang]) return storedLang;

  const browserLang = navigator.language.slice(0, 2);
  if (translations[browserLang]) {
    localStorage.setItem("lang", browserLang);
    return browserLang;
  }

  localStorage.setItem("lang", "en");
  return "en";
}

// ✅ Changer la langue manuellement
function setLang(lang) {
  if (translations[lang]) {
    localStorage.setItem("lang", lang);
    location.reload();
  }
}

// ✅ Fonction de traduction
function t(key) {
  const lang = getUserLang();
  return translations[lang]?.[key] || translations["en"][key] || key;
}

// ✅ Message d'accueil (1 seule fois)
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("langNoticeShown")) {
    const lang = getUserLang();
    const notice = document.createElement("div");
    notice.textContent = `🌍 Language detected: ${lang.toUpperCase()}`;
    notice.style.position = "fixed";
    notice.style.bottom = "10px";
    notice.style.left = "50%";
    notice.style.transform = "translateX(-50%)";
    notice.style.background = "linear-gradient(90deg, #7c3aed, #4f46e5)";
    notice.style.color = "white";
    notice.style.padding = "8px 16px";
    notice.style.borderRadius = "12px";
    notice.style.fontSize = "14px";
    notice.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    notice.style.zIndex = "1000";
    document.body.appendChild(notice);
    setTimeout(() => {
      notice.remove();
    }, 3000);
    localStorage.setItem("langNoticeShown", "true");
  }
});
