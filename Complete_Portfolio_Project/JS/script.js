document.addEventListener('DOMContentLoaded', () => {
    const btnEymer = document.getElementById('tab-eymer');
    const btnPaola = document.getElementById('tab-paola');
    const portafolioEymer = document.getElementById('portafolio-eymer');
    const portafolioPaola = document.getElementById('portafolio-paola');

    // Transición hacia el Portafolio de Eymer
    btnEymer.addEventListener('click', () => {
        portafolioEymer.removeAttribute('hidden');
        portafolioPaola.setAttribute('hidden', '');
        
        btnEymer.classList.add('activo');
        btnPaola.classList.remove('activo');
        
        document.body.style.backgroundColor = 'var(--eymer-bg)';
    });

    // Transición hacia el Portafolio de Paola Petevi
    btnPaola.addEventListener('click', () => {
        portafolioPaola.removeAttribute('hidden');
        portafolioEymer.setAttribute('hidden', '');
        
        btnPaola.classList.add('activo');
        btnEymer.classList.remove('activo');
        
        document.body.style.backgroundColor = 'var(--paola-bg)';
    });
});