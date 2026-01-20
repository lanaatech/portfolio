 // 1. Inicializar a biblioteca de animações AOS
        AOS.init({
            duration: 800, // Duração da animação em milissegundos
            once: true, // Animar apenas uma vez ao rolar
            offset: 100 // Iniciar a animação um pouco antes do elemento aparecer
        });

        // 2. Gerador de Partículas de Fundo (Mantido do código original, com melhorias)
        const container = document.getElementById('dotContainer');
        const colors = ['#00f294', '#3498db', '#ffcc33', '#ffffff'];
        for (let i = 0; i < 80; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            const size = Math.random() * 3 + 1;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.top = `${Math.random() * 100}%`;
            dot.style.left = `${Math.random() * 100}%`;
            dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            dot.style.animationDuration = `${Math.random() * 15 + 15}s`; // Durações variadas
            dot.style.animationDelay = `${Math.random() * 5}s`; // Atrasos variados
            container.appendChild(dot);
        }

        // 3. Lógica de Filtro de Projetos
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe 'active' de todos os botões e adiciona ao clicado
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    // Se o filtro for 'all' ou corresponder à categoria do item, mostre-o
                    if (filterValue === 'all' || filterValue === itemCategory) {
                        item.classList.remove('hidden');
                        // Re-aciona a animação do AOS para os itens que aparecem
                        item.classList.add('aos-animate');
                    } else {
                        // Caso contrário, oculte-o
                        item.classList.add('hidden');
                        item.classList.remove('aos-animate');
                    }
                });
            });
        });