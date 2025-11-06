document.addEventListener('DOMContentLoaded', function() {
    // --- Comportamento de Rolagem (Se houver um botão na seção Hero) ---
    // Você pode ter um botão na página de abertura que rola para a galeria.
    const exploreButton = document.getElementById('explore-button');
    const gallerySection = document.getElementById('moments-gallery');
    
    if (exploreButton && gallerySection) {
        exploreButton.addEventListener('click', function() {
            // Rola a tela para a seção da galeria suavemente
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        });
    }


    // --- Funcionalidade LIGHTBOX (Tela Cheia) ---
    
    // 1. Seleciona todos os itens clicáveis
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // 2. Seleciona os elementos do Lightbox
    const lightbox = document.getElementById('lightbox');
    
    // Verifica se o lightbox existe no HTML para evitar erros
    if (!lightbox) return; 

    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    // Função para abrir o lightbox
    function openLightbox(imageSrc) {
        lightbox.style.display = 'flex'; // Usamos 'flex' para centralizar a imagem
        lightboxImg.src = imageSrc;
    }

    // Adiciona o ouvinte de evento de clique para cada item da galeria
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Pega o caminho da imagem do atributo 'src' da tag <img> dentro do item
            const imageElement = this.querySelector('img');
            if (imageElement) {
                const fullSizeSrc = imageElement.src;
                openLightbox(fullSizeSrc);
            }
        });
    });

    // Fecha o lightbox ao clicar no botão 'X'
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Fecha o lightbox ao clicar no fundo preto
    lightbox.addEventListener('click', function(e) {
        // Se o clique for no fundo do lightbox (e não na imagem), fecha
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Fecha o lightbox ao pressionar a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});