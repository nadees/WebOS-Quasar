document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    var contextMenu = document.querySelector('.context-menu');
    contextMenu.style.top = event.clientY + 'px';
    contextMenu.style.left = event.clientX + 'px';
    contextMenu.classList.add('active');
  });
  
  document.addEventListener('click', function() {
    var contextMenu = document.querySelector('.context-menu');
    contextMenu.classList.remove('active');
  });
  
  function refresh() {
    location.reload();
  }