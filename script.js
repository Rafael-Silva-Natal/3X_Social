document.addEventListener('DOMContentLoaded', () => {
  const leftBar = document.getElementById('left-bar');
  const rightBar = document.getElementById('right-bar');
  const leftMenu = document.getElementById('left-menu');
  const rightMenu = document.getElementById('right-menu');

  // Controle da Barra Esquerda
  leftBar.addEventListener('click', (e) => {
    e.stopPropagation();
    leftMenu.classList.toggle('open');
    rightMenu.classList.remove('open'); // Fecha o direito se aberto
  });

  // Controle da Barra Direita
  rightBar.addEventListener('click', (e) => {
    e.stopPropagation();
    rightMenu.classList.toggle('open');
    leftMenu.classList.remove('open'); // Fecha o esquerdo se aberto
  });

  // Fecha menus ao clicar fora
  document.addEventListener('click', () => {
    leftMenu.classList.remove('open');
    rightMenu.classList.remove('open');
  });

  // Impede que o clique no menu feche-o
  leftMenu.addEventListener('click', (e) => e.stopPropagation());
  rightMenu.addEventListener('click', (e) => e.stopPropagation());
});









//AI chat

// Controle de Expansão/Retração
document.querySelector('.expand-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ai-response-box').classList.toggle('expanded');
});

// Auto-expandir textarea conforme o texto
document.querySelector('textarea').addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

// Envio simulado (integre com sua API depois)
document.querySelector('.send-btn').addEventListener('click', () => {
  const userInput = document.querySelector('textarea').value;
  if (userInput.trim()) {
    const responseBox = document.querySelector('.ai-response-content');
    responseBox.innerHTML += `<p><strong>Você:</strong> ${userInput}</p>`;
    
    // Simula resposta da AI (substitua pela sua API)
    setTimeout(() => {
      responseBox.innerHTML += `<p><strong>AI:</strong> Processando sua requisição sobre "${userInput}"...</p>`;
      responseBox.scrollTop = responseBox.scrollHeight;
    }, 1000);
    
    document.querySelector('textarea').value = '';
  }
});


//BOXES USUARIOS E AMIGOS

// Efeito de carregamento (simulado)
document.querySelectorAll('.profile-box, .friends-box').forEach(box => {
  box.addEventListener('click', (e) => {
    e.preventDefault();
    // Adicione animação antes de redirecionar
    box.style.opacity = '0.7';
    setTimeout(() => {
      window.location.href = box === document.querySelector('.profile-box') 
        ? 'perfil.html' 
        : 'amizades.html';
    }, 300);
  });
});