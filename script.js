document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: 400, 
            once: true,
            offset: 50 
        });
    }

    const conteinerPontos = document.getElementById('dotContainer');
    if (conteinerPontos) {
        const cores = ['#510089', '#222222', '#ffffff'];
        for (let i = 0; i < 50; i++) {
            const ponto = document.createElement('div');
            ponto.className = 'dot';
            const tamanho = Math.random() * 3 + 1;
            
            Object.assign(ponto.style, {
                width: `${tamanho}px`,
                height: `${tamanho}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: cores[Math.floor(Math.random() * cores.length)],
                animationDuration: `${Math.random() * 10 + 10}s`
            });
            conteinerPontos.appendChild(ponto);
        }
    }

    const botoesFiltro = document.querySelectorAll('.botao-filtro');
    const itensPortfolio = document.querySelectorAll('.item-portfolio');

    if (botoesFiltro.length > 0) {
        botoesFiltro.forEach(botao => {
            botao.addEventListener('click', () => {
                botoesFiltro.forEach(btn => btn.classList.remove('active'));
                botao.classList.add('active');

                const filtroSelecionado = botao.getAttribute('data-filter');

                itensPortfolio.forEach(item => {
                    const categoriaItem = item.getAttribute('data-category');
                    
                    if (filtroSelecionado === 'todos' || filtroSelecionado === categoriaItem) {
                        item.style.display = 'block'; 
                        item.classList.remove('hidden');
                    } else {
                        item.style.display = 'none'; 
                        item.classList.add('hidden');
                    }
                });
                
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            });
        });
    }
});