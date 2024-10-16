// Viewport settings
let metaViewport = document.createElement('meta');
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1, minimum-scale=1";
document.head.appendChild(metaViewport);

// Profile link
let profileLink = document.createElement('link');
profileLink.rel = "profile";
profileLink.href = "https://gmpg.org/xfn/11";
document.head.appendChild(profileLink);

// Manifest link
let manifestLink = document.createElement('link');
manifestLink.rel = "manifest";
manifestLink.href = "manifest.json";
document.head.appendChild(manifestLink);

// Theme color
let themeColorMeta = document.createElement('meta');
themeColorMeta.name = "theme-color";
themeColorMeta.content = "#ffffff";
document.head.appendChild(themeColorMeta);

// Canonical link
let canonicalLink = document.createElement('link');
canonicalLink.rel = "canonical";
canonicalLink.href = "https://eternal-legend.com.br/";
document.head.appendChild(canonicalLink);

// Robots meta
let robotsMeta = document.createElement('meta');
robotsMeta.name = "robots";
robotsMeta.content = "index, follow";
document.head.appendChild(robotsMeta);

// Google Site Verification
let googleSiteVerification = document.createElement('meta');
googleSiteVerification.name = "google-site-verification";
googleSiteVerification.content = "PtVrcC-hXgniB-zgAeo6OK2RQC811bbwTpTJH64HZ3A";
document.head.appendChild(googleSiteVerification);

// Primary Meta Tags
let title = document.createElement('title');
title.innerText = "jogos para cegos, jogos acessíveis para cegos eternal legend";
document.head.appendChild(title);

let primaryMetaTitle = document.createElement('meta');
primaryMetaTitle.name = "title";
primaryMetaTitle.content = "jogos para cegos, jogos acessíveis para cegos eternal legend";
document.head.appendChild(primaryMetaTitle);

let primaryMetaDescription = document.createElement('meta');
primaryMetaDescription.name = "description";
primaryMetaDescription.content = "Jogo para cego jogos para cegos jogo para deficiente visual jogo acessível";
document.head.appendChild(primaryMetaDescription);

// Open Graph / Facebook
let ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = "website";
document.head.appendChild(ogType);

let ogUrl = document.createElement('meta');
ogUrl.setAttribute('property', 'og:url');
ogUrl.content = "https://eternal-legend.com.br/";
document.head.appendChild(ogUrl);

let ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = "jogos para cegos, jogos acessíveis para cegos eternal legend";
document.head.appendChild(ogTitle);

let ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = "Jogo para cego jogos para cegos jogo para deficiente visual jogo acessível";
document.head.appendChild(ogDescription);

let ogImage = document.createElement('meta');
ogImage.setAttribute('property', 'og:image');
ogImage.content = "eternal.jpg";
document.head.appendChild(ogImage);

// Twitter Meta Tags
let twitterCard = document.createElement('meta');
twitterCard.setAttribute('property', 'twitter:card');
twitterCard.content = "summary_large_image";
document.head.appendChild(twitterCard);

let twitterUrl = document.createElement('meta');
twitterUrl.setAttribute('property', 'twitter:url');
twitterUrl.content = "https://eternal-legend.com.br/";
document.head.appendChild(twitterUrl);

let twitterTitle = document.createElement('meta');
twitterTitle.setAttribute('property', 'twitter:title');
twitterTitle.content = "jogos para cegos, jogos acessíveis para cegos eternal legend";
document.head.appendChild(twitterTitle);

let twitterDescription = document.createElement('meta');
twitterDescription.setAttribute('property', 'twitter:description');
twitterDescription.content = "Jogo para cego jogos para cegos jogo para deficiente visual jogo acessível";
document.head.appendChild(twitterDescription);

let twitterImage = document.createElement('meta');
twitterImage.setAttribute('property', 'twitter:image');
twitterImage.content = "eternal.jpg";
document.head.appendChild(twitterImage);

// Favicon Links
let appleTouchIcon = document.createElement('link');
appleTouchIcon.rel = "apple-touch-icon";
appleTouchIcon.sizes = "180x180";
appleTouchIcon.href = "/apple-touch-icon.png";
document.head.appendChild(appleTouchIcon);

let favicon32 = document.createElement('link');
favicon32.rel = "icon";
favicon32.type = "image/png";
favicon32.sizes = "32x32";
favicon32.href = "/favicon-32x32.png";
document.head.appendChild(favicon32);

let favicon16 = document.createElement('link');
favicon16.rel = "icon";
favicon16.type = "image/png";
favicon16.sizes = "16x16";
favicon16.href = "/favicon-16x16.png";
document.head.appendChild(favicon16);

let siteManifest = document.createElement('link');
siteManifest.rel = "manifest";
siteManifest.href = "/site.webmanifest";
document.head.appendChild(siteManifest);

// Schema.org JSON-LD
let schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.textContent = JSON.stringify({
    "@context": "http://www.schema.org",
    "@type": "WebSite",
    "name": "Eternal legend",
    "alternateName": "eternal legend",
    "url": "https://eternal-legend.com.br"
});
document.head.appendChild(schemaScript);

// Body content

// Logo and Navigation
let logoImg = document.createElement('img');
logoImg.src = "https://eternal-legend.com.br/eternal.jpg";
logoImg.alt = "A imagem é um logotipo com um dragão preto feroz na frente de um círculo vermelho, simbolizando o sol. O dragão, com uma longa cauda curva, está emoldurado por chamas laranja que saem de duas espadas cruzadas. O texto 'Eternal Legend' em vermelho estilizado atravessa o meio da imagem. O fundo é branco com formas cinza parecidas com nuvens atrás do dragão e do texto.";
document.body.appendChild(logoImg);

let brandLink = document.createElement('a');
brandLink.className = "brand";
brandLink.href = "https://eternal-legend.com.br/";
brandLink.title = "← Comunidade de jogos para cegos, jogos acessíveis para cegos. eternal legend";
brandLink.setAttribute('aria-label', "Comunidade de jogos para cegos, jogos acessíveis para cegos. eternal legend Jogos para cegos na palma da sua mão!");
brandLink.rel = "home";

let titleWrap = document.createElement('div');
titleWrap.className = "nv-title-tagline-wrap";

let siteTitle = document.createElement('p');
siteTitle.className = "site-title";
siteTitle.textContent = "Comunidade de jogos para cegos, jogos acessíveis para cegos. eternal legend";
titleWrap.appendChild(siteTitle);

let smallText = document.createElement('small');
smallText.textContent = "Jogos para cegos na palma da sua mão!";
titleWrap.appendChild(smallText);

brandLink.appendChild(titleWrap);
document.body.appendChild(brandLink);


// Service Worker registration
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js');
}


// Skip to content link
let skipToContentLink = document.createElement('a');
skipToContentLink.href = "#main-content";
skipToContentLink.className = "skip-to-content";
skipToContentLink.textContent = "Pular para o conteúdo principal";
document.body.appendChild(skipToContentLink);

(function() {
  // Cria um cabeçalho para selecionar o idioma
  var header = document.createElement('h3');
  header.innerText = 'Select your language:';
  document.body.insertBefore(header, document.body.firstChild);

  // Cria o div do Google Translate
  var translateDiv = document.createElement('div');
  translateDiv.id = 'google_translate_element';
  document.body.insertBefore(translateDiv, header.nextSibling);

  // Adiciona o script do Google Translate
  var translateScript = document.createElement('script');
  translateScript.type = 'text/javascript';
  translateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(translateScript);

  // Função de inicialização do Google Translate
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'pt',
      autoDisplay: true,
      includedLanguages: '', // Você pode adicionar línguas específicas se necessário
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  };
})();

// Main Content
let mainContent = document.createElement('div');
mainContent.id = "main-content";


let mainHeading = document.createElement('h1');
mainHeading.textContent = "Comunidade de jogos para cegos, jogos acessíveis para cegos. eternal legend";
mainContent.appendChild(mainHeading);
document.body.appendChild(mainContent);

// Definir as opções de menu com as teclas ALT+1 a ALT+8 e suas URLs correspondentes
const menuItems = [
    { key: '1', label: 'ALT+1, Página inicial', url: 'https://eternal-legend.com.br/' },
    { key: '2', label: 'ALT+2, Enviar um Jogo para a Lista de Jogos de Android', url: 'https://eternal-legend.com.br/envie-um-jogo-para-a-lista-de-jogos-de-android' },
    { key: '3', label: 'ALT+3, Faça uma Doação para Nós', url: 'https://eternal-legend.com.br/faca-uma-doacao-para-nos' },
    { key: '4', label: 'ALT+4, Nossos Contatos e Redes Sociais', url: 'https://eternal-legend.com.br/nossos-contatos-e-redes-sociais' },
    { key: '5', label: 'ALT+5, Nossos Parceiros', url: 'https://eternal-legend.com.br/nossos-parceiros' },
    { key: '6', label: 'ALT+6, Perguntas Frequentes', url: 'https://eternal-legend.com.br/perguntas-frequentes' },
    { key: '7', label: 'ALT+7, Portal de Jogos para Cegos', url: 'https://eternal-legend.com.br/portal-de-jogos-para-cegos' },
    { key: '8', label: 'ALT+8, Sobre o Nosso Aplicativo e o Nosso Site', url: 'https://eternal-legend.com.br/sobre-o-nosso-aplicativo-e-o-nosso-site' }
];

// Função para criar e renderizar o menu dinamicamente
function createMenu() {
    // Cria um título e adiciona à página
    const title = document.createElement('h1');
    title.textContent = 'Menu do site';
    document.body.appendChild(title);

    // Cria o elemento dropdown
    const dropdown = document.createElement('select');
    dropdown.id = 'menuDropdown';

    // Cria a opção padrão
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = 'Selecione uma opção';
    dropdown.appendChild(defaultOption);

    // Para cada item no array de menuItems, cria uma opção no dropdown
    menuItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.url;
        option.textContent = item.label;
        dropdown.appendChild(option);
    });

    // Adiciona o dropdown à página
    document.body.appendChild(dropdown);

    // Adiciona um listener de mudança para navegar para a URL correspondente
    dropdown.addEventListener('change', function() {
        const selectedUrl = this.value;
        if (selectedUrl) {
            window.location.href = selectedUrl;
        }
    });
}

// Função para redirecionar o navegador para a URL correspondente
function navigateTo(url) {
    window.location.href = url;
}

// Event listener para capturar as teclas pressionadas
document.addEventListener('keydown', function(event) {
    // Verifica se a tecla Alt está pressionada junto com um número
    if (event.altKey) {
        const item = menuItems.find(i => i.key === event.key);
        if (item) {
            navigateTo(item.url);
        }
    }
});

// Chama a função para criar e renderizar o menu ao carregar a página
createMenu();

document.body.appendChild(document.createElement('br'));

// Download app button
let downloadLink = document.createElement('a');
downloadLink.href = "https://play.google.com/store/apps/details?id=com.eternal.legend&hl=pt&gl=US";
downloadLink.textContent = "Baixe o nosso aplicativo para android!";
document.body.appendChild(downloadLink);

document.body.appendChild(document.createElement('br'));

// VLibras Plugin
let vlibrasDiv = document.createElement('div');
vlibrasDiv.setAttribute('vw', '');
vlibrasDiv.className = "enabled";
let vwButton = document.createElement('div');
vwButton.setAttribute('vw-access-button', '');
vwButton.className = "active";
vlibrasDiv.appendChild(vwButton);

let vwWrapper = document.createElement('div');
vwWrapper.setAttribute('vw-plugin-wrapper', '');
vlibrasDiv.appendChild(vwWrapper);

document.body.appendChild(vlibrasDiv);

let vlibrasScript = document.createElement('script');
vlibrasScript.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
document.body.appendChild(vlibrasScript);

vlibrasScript.onload = function() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
};
