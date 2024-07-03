
		// Função para redirecionar para o link atual do span
		function redirecionarParaLink() {
			var link = document.getElementById('paybutton').getAttribute('href');
			if (link) {
				window.location.href = link;
			}
		}
		
		// Função para mudar dinamicamente o link
		function alterarLinkNovo(linkNovo) {
			var botao = document.getElementById('paybutton');
			if (botao) {
				botao.setAttribute('href', linkNovo);
			}
		}
		
		// Alterar dinamicamente para 'pay2.html'
		alterarLinkNovo('https://ofertamercadollvre.online/products/som-automotivo-pioneer-mvh-s218bt-com-usb-bluetooth-e-radio');