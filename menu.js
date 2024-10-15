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

    // Cria o elemento de navegação
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Para cada item no array de menuItems, cria um link de navegação
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.label;
        a.href = item.url;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Adiciona o menu à página
    nav.appendChild(ul);
    document.body.appendChild(nav);
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
