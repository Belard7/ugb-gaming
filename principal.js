document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM cargado");
  var searchButton = document.getElementById('search-button');
  var searchInput = document.getElementById('search-input');
  var resultsContainer = document.getElementById('search-results');
  resultsContainer.style.display = 'none';

  // Agrega un evento para abrir la barra de búsqueda
  searchButton.addEventListener('click', function() {
    resultsContainer.style.display = 'block';
    searchGames();
  });

  // Agrega un evento para buscar al escribir
  searchInput.addEventListener('input', function() {
    if (searchInput.value.trim() === '') {
      resultsContainer.style.display = 'none'; // Oculta si no hay texto
    } else {
      resultsContainer.style.display = 'block'; // Muestra si hay texto
      searchGames();
    }
  });

  // Cierra la barra de búsqueda si se hace clic fuera de ella
  document.addEventListener('click', function(event) {
    if (event.target !== searchInput && event.target !== resultsContainer) {
      resultsContainer.style.display = 'none';
    }
  });

  function redirectToGamePage(gameTitle) {
    console.log('Redireccionando a:', gameTitle);
    var gameElement = document.querySelector('.title[data-title="' + gameTitle + '"]');
    if (gameElement) {
      var gameLink = gameElement.getAttribute('data-link');
      window.location.href = gameLink;
    }
  }

  function searchGames() {
    var query = document.getElementById('search-input').value.toLowerCase();
    var resultsContainer = document.getElementById('search-results');

    // Limpiamos el contenido previo
    resultsContainer.innerHTML = '';

    var items = document.querySelectorAll('.item');

    items.forEach(function(item) {
      var titleElement = item.querySelector('.title');
      var title = titleElement.textContent.toLowerCase();

      if (title.includes(query)) {
        var resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        resultItem.textContent = title;
        resultItem.addEventListener('click', function() {
          redirectToGamePage(title);
        });
        resultsContainer.appendChild(resultItem);
      }
    });
  }
});
// Obtén la barra de búsqueda
var searchBar = document.getElementById('searchBar');

// Agrega un evento de escucha para el evento de entrada
searchBar.addEventListener('input', function() {
  // Obtén el valor actual de la barra de búsqueda
  var searchValue = searchBar.value.toLowerCase();

  // Obtén todos los elementos que quieres buscar
  var items = document.querySelectorAll('.item');

  // Itera sobre cada elemento
  items.forEach(function(item) {
    // Si el elemento coincide con la búsqueda, muéstralo. Si no, ocúltalo.
    if (item.textContent.toLowerCase().includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});