document.addEventListener('DOMContentLoaded', () => {
    const btnEymer = document.getElementById('tab-eymer');
    const btnYined = document.getElementById('tab-yined');
    const portafolioEymer = document.getElementById('portafolio-eymer');
    const portafolioYined = document.getElementById('portafolio-yined');

    // Transición hacia el Portafolio de Eymer
    btnEymer.addEventListener('click', () => {
        portafolioEymer.removeAttribute('hidden');
        portafolioYined.setAttribute('hidden', '');
        
        btnEymer.classList.add('activo');
        btnYined.classList.remove('activo');
        
        document.body.style.backgroundColor = 'var(--eymer-bg)';
    });

    // Transición hacia el Portafolio de Yined Paola
    btnYined.addEventListener('click', () => {
        portafolioYined.removeAttribute('hidden');
        portafolioEymer.setAttribute('hidden', '');
        
        btnYined.classList.add('activo');
        btnEymer.classList.remove('activo');
        
        document.body.style.backgroundColor = 'var(--yined-bg)';
    });
});