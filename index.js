function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  fetch(url)
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((error) => console.error('Error:', error));
}

function renderBooks(books) {
  const bookTitles = books.map((book) => book.title);
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  bookTitles.forEach((title) => {
    const listItem = document.createElement('li');
    listItem.textContent = title;
    bookList.appendChild(listItem);
  });
}

fetchBooks();

