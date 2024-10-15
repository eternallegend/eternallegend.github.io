// Create footer container
let footer = document.createElement('footer');

// Create "Compartilhe" section
let shareHeading = document.createElement('h2');
shareHeading.textContent = "Compartilhe";
footer.appendChild(shareHeading);

let shareText = document.createElement('p');
shareText.textContent = "Gostou do nosso conteúdo? compartilhe nas redes sociais.";
footer.appendChild(shareText);

// AddToAny sharing buttons
let a2aKit = document.createElement('div');
a2aKit.className = 'a2a_kit a2a_kit_size_32 a2a_default_style';

let a2aDd = document.createElement('a');
a2aDd.className = 'a2a_dd';
a2aDd.href = 'https://www.addtoany.com/share';
a2aKit.appendChild(a2aDd);

let socialButtons = [
    'facebook', 'linkedin', 'whatsapp', 'email', 'pinterest', 'telegram', 'google_gmail', 'threads', 'copy_link'
];

socialButtons.forEach(button => {
    let buttonElement = document.createElement('a');
    buttonElement.className = `a2a_button_${button}`;
    a2aKit.appendChild(buttonElement);
});

footer.appendChild(a2aKit);

// Add AddToAny script
let addToAnyScript = document.createElement('script');
addToAnyScript.async = true;
addToAnyScript.src = 'https://static.addtoany.com/menu/page.js';
footer.appendChild(addToAnyScript);

// Create "Vídeo mais recente" section
let videoHeading = document.createElement('h2');
videoHeading.textContent = "Vídeo mais recente publicado no canal do youtube";
footer.appendChild(videoHeading);

let iframe = document.createElement('iframe');
iframe.width = '250';
iframe.height = '750';
iframe.className = 'rssdog';
iframe.src = 'https://www.rssdog.com/index.php?url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC_cFMLVuTLVve-JTCFZu7ig&mode=html&showonly=&maxitems=1&showdescs=1&desctrim=0&descmax=0&tabwidth=100%25&showdate=1&nofollow=1&xmlbtn=1&utf8=1&linktarget=_blank&fullhtml=1&bordercol=%23d4d0c8&headbgcol=%23999999&headtxtcol=%23ffffff&titlebgcol=%23f1eded&titletxtcol=%23000000&itembgcol=%23ffffff&itemtxtcol=%23000000&ctl=0';
iframe.title = 'RSS feed dos vídeos mais recentes do canal do YouTube';
footer.appendChild(iframe);

// Add credits text
let creditsText = document.createElement('p');
creditsText.innerHTML = '<mark> site construído por (Juan) sobe a palavra autorizada de (Adriano), David bruno e tefi. </mark>';
footer.appendChild(creditsText);

// Create site tagline and copyright information
let tagline = document.createElement('h1');
tagline.textContent = "eternal legend, trazendo mais acessibilidade em seus jogos!";
footer.appendChild(tagline);

let copyright = document.createElement('p');
copyright.innerHTML = 'Copyright: <a href="https://github.com/azurejoga/">azurejoga</a> e <a href="https://youtube.com/c/eternallegend1">eternal legend</a>';
footer.appendChild(copyright);

// Append the footer to the body
document.body.appendChild(footer);
