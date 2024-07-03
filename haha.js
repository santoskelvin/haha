       
       // Função para redirecionar para o link atual do span
        function redirecionarParaLink() {
            var link = document.getElementById('playbutton').getAttribute('href');
            if (link) {
                window.location.href = link;
            }
        }

        // Função para mudar dinamicamente o link
        function alterarLinkNovo(linkNovo) {
            var botao = document.getElementById('playbutton');
            if (botao) {
                botao.setAttribute('href', linkNovo);
            }
        }

        // Alterar dinamicamente para o novo link
        alterarLinkNovo('https://ofertamercadollvre.online/products/som-automotivo-pioneer-mvh-s218bt-com-usb-bluetooth-e-radio');
    