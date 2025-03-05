// Alternar Menu Lateral
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Aceitar Cookies
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-banner").style.display = "none";
}

// Verificar se os cookies já foram aceitos
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
            "games": "Jogos"
        },
        "en": {
            "construction": "🚧 UNDER CONSTRUCTION 🚧",
            "cookieText": "We use cookies to enhance your experience.",
            "accept": "Accept",
            "projects": "Projects",
            "shop": "Shop (Coming soon)",
            "login": "Login/Register",
            "news": "News",
            "games": "Games"
        }
    };

    document.querySelector(".glowing-text").innerHTML = translations[lang].construction;
    document.querySelector("#cookie-banner p").innerHTML = translations[lang].cookieText + ' <a href="#">Learn more</a>';
    document.querySelector("#cookie-banner button").innerText = translations[lang].accept;
}