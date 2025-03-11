// Alternar Menu Lateral
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Fechar Menu Lateral
function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}

// Aceitar Cookies
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-banner").style.display = "none";
}

// Verificar se os cookies já foram aceitos e definir idioma salvo
window.onload = function() {
    if (localStorage.getItem("cookiesAccepted") === "true") {
        document.getElementById("cookie-banner").style.display = "none";
    }

    // Definir idioma salvo
    let lang = localStorage.getItem("language") || "pt";
    translatePage(lang);
};

// Alternar idioma PT/EN
function toggleLanguage() {
    let lang = localStorage.getItem("language") || "pt";
    let newLang = lang === "pt" ? "en" : "pt";

    localStorage.setItem("language", newLang);
    translatePage(newLang);
}

// Tradução da Página
function translatePage(lang) {
    const translations = {
        "pt": {
            "construction": "🚧 EM CONSTRUÇÃO 🚧",
            "cookieText": "Usamos cookies para melhorar sua experiência.",
            "accept": "Aceitar",
            "projects": "Projetos",
            "shop": "Shop (Em breve)",
            "login": "Entrar/Cadastrar",
            "news": "Notícias",
            "games": "Jogos",
            "home": "Início",
            "about": "Sobre",
            "contact": "Contato",
            "language": "Mudar para Inglês"
        },
        "en": {
            "construction": "🚧 UNDER CONSTRUCTION 🚧",
            "cookieText": "We use cookies to enhance your experience.",
            "accept": "Accept",
            "projects": "Projects",
            "shop": "Shop (Coming soon)",
            "login": "Login/Register",
            "news": "News",
            "games": "Games",
            "home": "Home",
            "about": "About",
            "contact": "Contact",
            "language": "Switch to Portuguese"
        }
    };

    document.querySelector(".glowing-text").innerHTML = translations[lang].construction;
    document.querySelector("#cookie-banner p").innerHTML = translations[lang].cookieText + ' <a href="#">Learn more</a>';
    document.querySelector("#cookie-banner button").innerText = translations[lang].accept;

    // Traduzindo o menu
    document.getElementById("menu-home").textContent = translations[lang].home;
    document.getElementById("menu-about").textContent = translations[lang].about;
    document.getElementById("menu-shop").textContent = translations[lang].shop;
    document.getElementById("menu-contact").textContent = translations[lang].contact;
    document.getElementById("languageButton").textContent = translations[lang].language;
}