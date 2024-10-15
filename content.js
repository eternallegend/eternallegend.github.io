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

let menuScript = document.createElement('script');
menuScript.src = 'menu.js';
menuScript.onload = function() {
    console.log('menu.js has been loaded successfully');
};
document.head.appendChild(menuScript);


// Main Content
let mainContent = document.createElement('div');
mainContent.id = "main-content";

let mainHeading = document.createElement('h1');
mainHeading.textContent = "Comunidade de jogos para cegos, jogos acessíveis para cegos. eternal legend";
mainContent.appendChild(mainHeading);

document.body.appendChild(mainContent);
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
