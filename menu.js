    <script>
        // Função para redirecionar o navegador para a URL correspondente
        function navigateTo(url) {
            window.location.href = url;
        }

        // Event listener para capturar as teclas pressionadas
        document.addEventListener('keydown', function(event) {
            // Verifica se a tecla Alt está pressionada junto com um número
            if (event.altKey) {
                switch (event.key) {
                    case '1':
                        navigateTo('https://eternal-legend.com.br/');
                        break;
                    case '2':
                        navigateTo('https://eternal-legend.com.br/envie-um-jogo-para-a-lista-de-jogos-de-android');
                        break;
                    case '3':
                        navigateTo('https://eternal-legend.com.br/faca-uma-doacao-para-nos');
                        break;
                    case '4':
                        navigateTo('https://eternal-legend.com.br/nossos-contatos-e-redes-sociais');
                        break;
                    case '5':
                        navigateTo('https://eternal-legend.com.br/nossos-parceiros');
                        break;
                    case '6':
                        navigateTo('https://eternal-legend.com.br/perguntas-frequentes');
                        break;
                    case '7':
                        navigateTo('https://eternal-legend.com.br/portal-de-jogos-para-cegos');
                        break;
                    case '8':
                        navigateTo('https://eternal-legend.com.br/sobre-o-nosso-aplicativo-e-o-nosso-site');
                        break;
                    default:
                        break;
                }
            }
        });
    </script>
    <h1>Menu do site</h1>
    <nav>
        <ul>
            <li><a href="https://eternal-legend.com.br/">ALT+1, Página inicial</a></li>
            <li><a href="https://eternal-legend.com.br/envie-um-jogo-para-a-lista-de-jogos-de-android">ALT+2, Enviar um Jogo para a Lista de Jogos de Android</a></li>
            <li><a href="https://eternal-legend.com.br/faca-uma-doacao-para-nos">ALT+3, Faça uma Doação para Nós</a></li>
            <li><a href="https://eternal-legend.com.br/nossos-contatos-e-redes-sociais">ALT+4, Nossos Contatos e Redes Sociais</a></li>
            <li><a href="https://eternal-legend.com.br/nossos-parceiros">ALT+5, Nossos Parceiros</a></li>
            <li><a href="https://eternal-legend.com.br/perguntas-frequentes">ALT+6, Perguntas Frequentes</a></li>
            <li><a href="https://eternal-legend.com.br/portal-de-jogos-para-cegos">ALT+7, Portal de Jogos para Cegos</a></li>
            <li><a href="https://eternal-legend.com.br/sobre-o-nosso-aplicativo-e-o-nosso-site">ALT+8, Sobre o Nosso Aplicativo e o Nosso Site</a></li>
        </ul>
    </nav>
