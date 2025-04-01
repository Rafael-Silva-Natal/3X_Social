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
document.getElementById('expandBtn').addEventListener('click', function() {
  const responseBox = document.getElementById('responseBox');
  responseBox.classList.toggle('expanded');
  this.textContent = responseBox.classList.contains('expanded') ? '↓' : '↑';
  
  if (responseBox.classList.contains('expanded')) {
    setTimeout(() => {
      document.getElementById('responseContent').scrollTop = 
        document.getElementById('responseContent').scrollHeight;
    }, 10);
  }
});

// Auto-expansão do textarea
document.querySelector('textarea').addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

// Envio de mensagem
document.querySelector('.send-btn').addEventListener('click', function() {
  const input = document.querySelector('textarea');
  const message = input.value.trim();
  
  if (message) {
    const responseContent = document.getElementById('responseContent');
    responseContent.innerHTML += `<div class="message user">${message}</div>`;
    
    setTimeout(() => {
      responseContent.innerHTML += `<div class="message ai">Resposta simulada para: "${message}"</div>`;
      responseContent.scrollTop = responseContent.scrollHeight;
      
      if (!document.getElementById('responseBox').classList.contains('expanded')) {
        document.getElementById('responseBox').classList.add('expanded');
        document.getElementById('expandBtn').textContent = '↓';
      }
    }, 800);
    
    input.value = '';
    input.style.height = 'auto';
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


//zoom das boxes

// Ajuste das boxes no redimensionamento
function adjustBoxesPosition() {
  const chatContainer = document.querySelector('.ai-chat-container');
  if (!chatContainer) return;
  
  const chatRect = chatContainer.getBoundingClientRect();
  const boxesContainer = document.querySelector('.boxes-container');
  
  // Posiciona as boxes acima do chat com margem
  boxesContainer.style.bottom = `${chatRect.height + -34}px`;
}

// Executa no carregamento e no redimensionamento
window.addEventListener('load', adjustBoxesPosition);
window.addEventListener('resize', adjustBoxesPosition);








//ZOOM
//Ao tentar modificar o ZOOm lembrar da divisão 100/valor que preenche width e height e currentTop * 1.25
document.addEventListener('DOMContentLoaded', function() {
  const zoomStyle = document.createElement('style');
  zoomStyle.id = 'forced-zoom-style';
  zoomStyle.textContent = `
    body {
      zoom: 80%;
      -moz-transform: scale(0.8);
      -moz-transform-origin: 0 0;
      -o-transform: scale(0.8);
      -o-transform-origin: 0 0;
      -webkit-transform: scale(0.8);
      -webkit-transform-origin: 0 0;
    }
    
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      body {
        zoom: normal;
        -webkit-transform: scale(0.8);
        -webkit-transform-origin: 0 0;
        width: 125%;
        height: 125%;
      }
      
      html {
        overflow: hidden;
        height: 100%;
      }
    }
  `;
  
  document.head.appendChild(zoomStyle);
  
  const viewportMeta = document.createElement('meta');
  viewportMeta.name = 'viewport';
  viewportMeta.content = 'width=device-width, initial-scale=0.8, minimum-scale=0.8, maximum-scale=0.8, user-scalable=no';
  document.head.appendChild(viewportMeta);
  
  function adjustElementsAfterZoom() {
    document.querySelectorAll('[class*="side-"], .top-menu').forEach(el => {
      const currentTop = parseFloat(getComputedStyle(el).top);
      el.style.top = `${currentTop * 1.25}px`; // Ajuste proporcional (1/0.8 ≈ 1.25)
    });
  }
  
  requestAnimationFrame(adjustElementsAfterZoom);
});




//BUSCADOR

document.querySelector('.search-btn').addEventListener('click', performSearch);
document.querySelector('.search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  const query = document.querySelector('.search-input').value.trim();
  if (query) {
    console.log('Buscando por:', query);
    // Aqui você implementaria a lógica de busca real
    // Exemplo: filtrar páginas, redirecionar, etc.
    
    // Simulação de resultado (substitua pela sua lógica)
    alert(`Busca realizada: "${query}"`);
  }
}