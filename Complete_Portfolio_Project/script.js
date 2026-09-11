document.addEventListener('DOMContentLoaded', () => {
  const btnEymer = document.getElementById('btn-eymer');
  const btnYined = document.getElementById('btn-yined');
  const portafolioEymer = document.getElementById('portafolio-eymer');
  const portafolioYined = document.getElementById('portafolio-yined');

  // Mostrar portafolio de Eymer
  btnEymer.addEventListener('click', () => {
    portafolioEymer.removeAttribute('hidden');
    portafolioYined.setAttribute('hidden', '');
    
    btnEymer.classList.add('activo');
    btnYined.classList.remove('activo');
  });

  // Mostrar portafolio de Yined Paola
  btnYined.addEventListener('click', () => {
    portafolioYined.removeAttribute('hidden');
    portafolioEymer.setAttribute('hidden', '');
    
    btnYined.classList.add('activo');
    btnEymer.classList.remove('activo');
  });
});