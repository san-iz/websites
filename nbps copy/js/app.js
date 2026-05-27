console.log("NBPS Website Loaded");


/* ===================================
   Smooth Scroll
=================================== */

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", e => {

    if (link.hash) {

      e.preventDefault();

      document.querySelector(link.hash).scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


/* ===================================
   Translation Object
=================================== */

const translations = {

  en: {

    /* Navigation */
    home: "Home",
    about: "About",
    notices: "Notices",
    ebooks: "E-Books",
    news: "News",
    contact: "Contact",

    /* Buttons */
    apply: "Apply Now",
    join: "Join Now",

    /* Hero */
    heroTitle: "Nepal Bauddha Pariyatti Shikshya",

    heroText:
      "Enlightening minds through traditional wisdom & modern excellence",

    /* Features */
    featureTitle: "Our Features",

    card1: "Government Recognized",
    card2: "Qualified Teachers",
    card3: "Online Learning",
    card4: "Global Standards",

    /* Footer */
    footer:
      "© 2026 Nepal Bauddha Pariyatti Shikshya. All Rights Reserved."

  },

  np: {

    /* Navigation */
    home: "गृहपृष्ठ",
    about: "हाम्रो बारेमा",
    notices: "सूचनाहरू",
    ebooks: "इ–पुस्तकहरू",
    news: "समाचार",
    contact: "सम्पर्क",

    /* Buttons */
    apply: "भर्ना",
    join: "अहिले जोडिनुहोस्",

    /* Hero */
    heroTitle: "नेपाल बौद्ध परीयत्ति शिक्षा",

    heroText:
      "परम्परागत ज्ञान र आधुनिक शिक्षाद्वारा उज्यालो भविष्य",

    /* Features */
    featureTitle: "हाम्रा विशेषताहरू",

    card1: "सरकारी मान्यता प्राप्त",
    card2: "योग्य शिक्षकहरू",
    card3: "अनलाइन शिक्षा",
    card4: "विश्वस्तरीय शिक्षा",

    /* Footer */
    footer:
      "© 2026 नेपाल बौद्ध परीयत्ति शिक्षा ।"

  }

};


/* ===================================
   Language Toggle
=================================== */

let currentLang = "en";

const enBtn = document.getElementById("enBtn");
const npBtn = document.getElementById("npBtn");

const langToggle = document.getElementById("langToggle");


langToggle.addEventListener("click", () => {

  /* Toggle Language */
  currentLang = currentLang === "en" ? "np" : "en";

  const t = translations[currentLang];


  /* ===================================
     Active Button Style
  =================================== */

  if (currentLang === "en") {

    enBtn.classList.add("active");
    npBtn.classList.remove("active");

  } else {

    npBtn.classList.add("active");
    enBtn.classList.remove("active");

  }


  /* ===================================
     Navigation Translation
  =================================== */

  document.getElementById("homeLink").innerHTML =
    '<i class="fas fa-home"></i> ' + t.home;

  document.getElementById("aboutLink").innerHTML =
    '<i class="fas fa-info-circle"></i> ' + t.about;

  document.getElementById("noticeLink").innerHTML =
    '<i class="fas fa-newspaper"></i> ' + t.notices;

  document.getElementById("facultyLink").innerHTML =
    '<i class="fas fa-book"></i> ' + t.ebooks;

  document.getElementById("newsLink").innerHTML =
    '<i class="fas fa-bullhorn"></i> ' + t.news;

  document.getElementById("contactLink").innerHTML =
    '<i class="fas fa-address-card"></i> ' + t.contact;


  /* ===================================
     Buttons Translation
  =================================== */

  document.getElementById("applyBtn").innerHTML =
    '<i class="fas fa-graduation-cap"></i> ' + t.apply;

  document.getElementById("joinBtn").innerHTML =
    '<i class="fas fa-hand-peace"></i> ' + t.join;


  /* ===================================
     Hero Section
  =================================== */

  document.getElementById("heroTitle").innerText =
    t.heroTitle;

  document.getElementById("heroText").innerText =
    t.heroText;


  /* ===================================
     Features Section
  =================================== */

  document.getElementById("featureTitle").innerText =
    t.featureTitle;

  document.getElementById("card1").innerText =
    t.card1;

  document.getElementById("card2").innerText =
    t.card2;

  document.getElementById("card3").innerText =
    t.card3;

  document.getElementById("card4").innerText =
    t.card4;


  /* ===================================
     Footer Translation
  =================================== */

  document.getElementById("footer").innerText =
    t.footer;

});