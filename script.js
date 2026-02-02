document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // 2. Partículas de Fundo (Cores do Tema)
    const conteiner = document.getElementById('dotContainer');
    if (conteiner) {
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
            conteiner.appendChild(ponto);
        }
    }

    // 3. Filtro de Projetos
    const botoes = document.querySelectorAll('.botao-filtro');
    const projetos = document.querySelectorAll('.item-portfolio');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            botoes.forEach(b => b.classList.remove('active'));
            botao.classList.add('active');

            const categoria = botao.getAttribute('data-filter');

            projetos.forEach(item => {
                const itemCat = item.getAttribute('data-category');
                if (categoria === 'all' || categoria === itemCat) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});