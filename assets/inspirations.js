// assets/inspirations.js
// Multilingual inspirations for DAYLIFE
// Usage (exemple dans home.html) :
// const msg = DaylifeInspirationsAPI.getForToday(DaylifeI18n?.getLang());

(function () {
  const DaylifeInspirations = {
    // 1) ENGLISH
    en: [
      "You are your own miracle.",
      "Small steps still move you forward.",
      "Today is a good day to begin.",
      "Your future self is watching proudly.",
      "Progress, not perfection, wins the race.",
      "Rest is part of the journey.",
      "You are allowed to dream bigger.",
      "Your courage is louder than your fear.",
      "One focused hour can change a year.",
      "You don’t need permission to start.",
      "Gratitude makes ordinary days shine.",
      "Your story is still being written.",
      "Show up today, even softly.",
      "The life you want needs today’s choices.",
      "Kindness is a superpower. Use it.",
      "Be the person you needed before.",
    ],

    // 2) FRANÇAIS
    fr: [
      "Tu es ton propre miracle.",
      "Les petits pas te font avancer.",
      "Aujourd’hui est un bon jour pour commencer.",
      "Ton futur toi te regarde avec fierté.",
      "Le progrès, pas la perfection, gagne la course.",
      "Le repos fait partie du voyage.",
      "Tu as le droit de rêver plus grand.",
      "Ton courage est plus fort que ta peur.",
      "Une heure concentrée peut changer une année.",
      "Tu n’as besoin de la permission de personne pour commencer.",
      "La gratitude fait briller les jours ordinaires.",
      "Ton histoire est encore en train de s’écrire.",
      "Présente-toi aujourd’hui, même doucement.",
      "La vie que tu veux commence par tes choix d’aujourd’hui.",
      "La gentillesse est un superpouvoir. Utilise-le.",
      "Sois la personne dont tu avais besoin avant.",
    ],

    // 3) ESPAÑOL
    es: [
      "Tú eres tu propio milagro.",
      "Los pasos pequeños también te hacen avanzar.",
      "Hoy es un buen día para empezar.",
      "Tu futuro yo te mira con orgullo.",
      "El progreso, no la perfección, gana la carrera.",
      "Descansar también es parte del camino.",
      "Tienes permiso para soñar más grande.",
      "Tu valentía es más fuerte que tu miedo.",
      "Una hora enfocada puede cambiar un año.",
      "No necesitas permiso para comenzar.",
      "La gratitud hace brillar los días comunes.",
      "Tu historia aún se está escribiendo.",
      "Preséntate hoy, aunque sea en voz baja.",
      "La vida que quieres nace de tus decisiones de hoy.",
      "La amabilidad es un superpoder. Úsalo.",
      "Sé la persona que necesitabas antes.",
    ],

    // 4) PORTUGUÊS
    pt: [
      "Você é o seu próprio milagre.",
      "Passos pequenos também te levam adiante.",
      "Hoje é um bom dia para começar.",
      "Seu eu do futuro olha para você com orgulho.",
      "Progresso, não perfeição, vence a corrida.",
      "Descansar faz parte da jornada.",
      "Você tem permissão para sonhar mais alto.",
      "Sua coragem é mais forte que o seu medo.",
      "Uma hora focada pode mudar um ano.",
      "Você não precisa de permissão para começar.",
      "A gratidão faz brilhar os dias comuns.",
      "Sua história ainda está sendo escrita.",
      "Apareça hoje, mesmo de forma suave.",
      "A vida que você quer nasce das escolhas de hoje.",
      "A gentileza é um superpoder. Use-o.",
      "Seja a pessoa que você precisava antes.",
    ],

    // 5) DEUTSCH
    de: [
      "Du bist dein eigenes Wunder.",
      "Kleine Schritte bringen dich trotzdem voran.",
      "Heute ist ein guter Tag, um anzufangen.",
      "Dein zukünftiges Ich schaut stolz auf dich.",
      "Fortschritt, nicht Perfektion, gewinnt das Rennen.",
      "Ausruhen gehört zur Reise dazu.",
      "Du darfst größer träumen.",
      "Dein Mut ist lauter als deine Angst.",
      "Eine fokussierte Stunde kann ein Jahr verändern.",
      "Du brauchst keine Erlaubnis, um zu starten.",
      "Dankbarkeit lässt gewöhnliche Tage leuchten.",
      "Deine Geschichte wird noch geschrieben.",
      "Zeig dich heute, auch leise.",
      "Das Leben, das du willst, beginnt mit deinen heutigen Entscheidungen.",
      "Freundlichkeit ist eine Superkraft. Nutze sie.",
      "Sei die Person, die du früher gebraucht hättest.",
    ],

    // 6) ITALIANO
    it: [
      "Sei il tuo stesso miracolo.",
      "I piccoli passi ti fanno comunque avanzare.",
      "Oggi è un buon giorno per iniziare.",
      "Il tuo futuro io ti guarda con orgoglio.",
      "Il progresso, non la perfezione, vince la corsa.",
      "Il riposo fa parte del viaggio.",
      "Hai il permesso di sognare più in grande.",
      "Il tuo coraggio è più forte della tua paura.",
      "Un’ora di vero focus può cambiare un anno.",
      "Non hai bisogno del permesso per cominciare.",
      "La gratitudine fa brillare i giorni normali.",
      "La tua storia è ancora in fase di scrittura.",
      "Presentati oggi, anche dolcemente.",
      "La vita che vuoi nasce dalle scelte di oggi.",
      "La gentilezza è un superpotere. Usalo.",
      "Sii la persona di cui avevi bisogno prima.",
    ],

    // 7) РУССКИЙ
    ru: [
      "Ты — своё собственное чудо.",
      "Маленькие шаги тоже ведут вперёд.",
      "Сегодня — хороший день, чтобы начать.",
      "Твоё будущее «я» гордится тобой.",
      "Побеждает прогресс, а не совершенство.",
      "Отдых — это часть пути.",
      "Ты можешь мечтать ещё смелее.",
      "Твоя смелость сильнее твоего страха.",
      "Один час фокуса может изменить год.",
      "Тебе не нужно чьё-то разрешение, чтобы начать.",
      "Благодарность делает обычные дни ярче.",
      "Твоя история всё ещё пишется.",
      "Появись сегодня, даже если тихо.",
      "Жизнь, о которой ты мечтаешь, строится из сегодняшних решений.",
      "Доброта — это суперсила. Пользуйся ею.",
      "Стань тем человеком, который был тебе нужен раньше.",
    ],

    // 8) 简体中文
    zh: [
      "你本身就是一个奇迹。",
      "小小的步伐也在前进。",
      "今天是一个开始的好日子。",
      "未来的你正带着骄傲看着现在的你。",
      "进步，而不是完美，带来真正的胜利。",
      "休息也是旅程的一部分。",
      "你可以允许自己做更大的梦。",
      "你的勇气比你的恐惧更响亮。",
      "专注的一小时可以改变一整年。",
      "开始不需要任何人的许可。",
      "感恩让普通的日子也闪闪发光。",
      "你的故事还在继续书写。",
      "今天也请出现，就算是轻轻地。",
      "你想要的人生来自你今天的选择。",
      "善良是一种超能力，好好使用它。",
      "做那个曾经的你最需要的人。",
    ],

    // 9) हिन्दी
    hi: [
      "तुम खुद अपना चमत्कार हो।",
      "छोटे कदम भी तुम्हें आगे बढ़ाते हैं।",
      "आज शुरू करने के लिए अच्छा दिन है।",
      "तुम्हारा भविष्य का रूप तुम पर गर्व कर रहा है।",
      "दौड़ को जीतता है प्रगति, परफेक्शन नहीं।",
      "आराम भी सफर का हिस्सा है।",
      "तुम्हें और बड़े सपने देखने की अनुमति है।",
      "तुम्हारा साहस तुम्हारे डर से ज़्यादा ज़ोर से बोलता है।",
      "एक घण्टा सच्चा फोकस पूरा साल बदल सकता है।",
      "शुरू करने के लिए तुम्हें किसी की अनुमति नहीं चाहिए।",
      "कृतज्ञता साधारण दिनों को भी चमका देती है।",
      "तुम्हारी कहानी अभी भी लिखी जा रही है।",
      "आज भी आओ, भले ही हल्के क़दमों से।",
      "जो जीवन तुम चाहते हो, वह तुम्हारे आज के चुनावों से बनता है।",
      "दयालुता एक सुपरपावर है, इसका उपयोग करो।",
      "वह इंसान बनो जिसकी तुम्हें पहले ज़रूरत थी।",
    ],

    // 10) العربية
    ar: [
      "أنت معجزتك الخاصة.",
      "الخطوات الصغيرة تدفعك إلى الأمام أيضاً.",
      "اليوم يوم جيد لتبدأ.",
      "ذاتك في المستقبل تنظر إليك بفخر.",
      "التقدّم، لا الكمال، هو من يفوز بالسباق.",
      "الراحة جزء من الرحلة.",
      "يُسمح لك أن تحلم بشكل أكبر.",
      "شجاعتك أعلى صوتاً من خوفك.",
      "ساعة تركيز واحدة قد تغيّر سنة كاملة.",
      "لست بحاجة إلى إذن كي تبدأ.",
      "الامتنان يجعل الأيام العادية تتوهّج.",
      "قصّتك لا تزال تُكتب.",
      "احضر اليوم، حتى لو بهدوء.",
      "الحياة التي تريدها تبدأ من اختياراتك اليوم.",
      "اللطف قوة خارقة، استخدمها.",
      "كن الشخص الذي كنت تحتاجه سابقاً.",
    ],

    // 11) ไทย
    th: [
      "คุณคือปาฏิหาริย์ของตัวเอง.",
      "ก้าวเล็ก ๆ ก็พาไปข้างหน้าได้.",
      "วันนี้เป็นวันที่ดีสำหรับการเริ่มต้น.",
      "ตัวคุณในอนาคตมองคุณด้วยความภูมิใจ.",
      "ความก้าวหน้า ไม่ใช่ความสมบูรณ์แบบ คือสิ่งที่ชนะ.",
      "การพักผ่อนก็เป็นส่วนหนึ่งของการเดินทาง.",
      "คุณมีสิทธิ์ที่จะฝันให้ใหญ่ขึ้น.",
      "ความกล้าของคุณดังยิ่งกว่าความกลัว.",
      "ชั่วโมงเดียวของสมาธิสามารถเปลี่ยนทั้งปีได้.",
      "คุณไม่ต้องการอนุญาตจากใครเพื่อเริ่ม.",
      "ความกตัญญูทำให้วันธรรมดาเปล่งประกาย.",
      "เรื่องราวของคุณยังคงถูกเขียนต่อไป.",
      "ปรากฏตัวในวันนี้ แม้จะเบา ๆ ก็ยังดี.",
      "ชีวิตที่คุณต้องการเริ่มจากการเลือกในวันนี้.",
      "ความเมตตาคือพลังพิเศษ ใช้มันให้บ่อย.",
      "จงเป็นคนที่ตัวคุณในอดีตต้องการ.",
    ],

    // 12) မြန်မာ (Burmese)
    my: [
      "သင်က သင့်ရဲ့ ကိုယ့်ကိုယ်ရေး အရာဝတ္တုကြီးမားမှုပါ။",
      "အသေးစားအဆင့်လေးတွေတောင် သင်ကို ရှေ့ဆက်စေတယ်။",
      "ဒီနေ့ဟာ စတင်ဖို့ ကောင်းတဲ့နေ့ပဲ။",
      "အနာဂတ်က သင်ကို ဂုဏ်ယူလျက်နေတာပါ။",
      "အောင်နိုင်သတွေမှာ ပြီးပြည့်စုံမှုမဟုတ်၊ တိုးတက်မှုပဲ။",
      "အနားယူမှုကလည်း ခရီးအပိုင်းတစ်ခုပါပဲ။",
      "သင်ပိုမို အိပ်မက်ကြီးတွေ မက်ဖို့ လုံလောက်လောက်ခွင့်ရှိတယ်။",
      "သင့် ယောက်ျားစိတ်က သင့် ကြောက်ရွံ့မှုထက် ပိုကြီးတယ်။",
      "အာရုံစိုက် ထိုင်ပေးတဲ့ တစ်နာရီက တစ်နှစ်တည်းကို ပြောင်းလဲစေတတ်တယ်။",
      "စတင်ဖို့ အခွင့်အထားတောင်းစရာ မလိုပါဘူး။",
      "ကျေးဇူးတင်စိတ်က သာမန်နေ့တွေကိုပါ တောက်ပစေတယ်။",
      "သင့် ဇာတ်ကားကို သေးသေးလေးပဲ နောက်ထပ် ရေးနေဆဲ။",
      "ဒီနေ့လည်း သင့်ကို ယနေ့ကမ္ဘာမှာ ပေါ်ပေါက်စေပါ။",
      "သင် လိုချင်တဲ့ဘဝဟာ ယနေ့ရဲ့ ရွေးချယ်မှုတွေကစတယ်။",
      "ကြင်နာမှုက စူပါပါဝါပါပဲ၊ အကြိမ်ကြိမ် သုံးပါ။",
      "အတိတ်က သင်လိုအပ်ခဲ့တဲ့ လူတစ်ယောက် ဖြစ်ပေးပါ။",
    ],
  };

  // Helper: normalise language code (en-US -> en, etc.)
  function normalizeLang(code) {
    if (!code) return "en";
    const short = code.toLowerCase().slice(0, 2);
    const supported = Object.keys(DaylifeInspirations);
    if (supported.includes(short)) return short;
    return "en";
  }

  // Compute day-of-year (1–365)
  function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff =
      date - start +
      (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay); // 1..366
  }

  const DaylifeInspirationsAPI = {
    /**
     * Get an inspiration string for "today" in the desired language.
     * langCode: "en", "fr", "es", etc. (optional)
     */
    getForToday(langCode) {
      const today = new Date();
      const dayOfYear = getDayOfYear(today); // 1..366
      const lang =
        normalizeLang(
          langCode ||
            (window.DaylifeI18n && window.DaylifeI18n.getLang
              ? window.DaylifeI18n.getLang()
              : navigator.language || "en")
        );
      const arr = DaylifeInspirations[lang] || DaylifeInspirations.en;
      const index = (dayOfYear - 1) % arr.length; // always in range
      return arr[index];
    },

    /**
     * Get a random inspiration in the chosen language.
     */
    getRandom(langCode) {
      const lang =
        normalizeLang(
          langCode ||
            (window.DaylifeI18n && window.DaylifeI18n.getLang
              ? window.DaylifeI18n.getLang()
              : navigator.language || "en")
        );
      const arr = DaylifeInspirations[lang] || DaylifeInspirations.en;
      const idx = Math.floor(Math.random() * arr.length);
      return arr[idx];
    },
  };

  // Expose globally
  window.DaylifeInspirations = DaylifeInspirations;
  window.DaylifeInspirationsAPI = DaylifeInspirationsAPI;
})();
