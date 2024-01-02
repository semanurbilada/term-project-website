import books from "./data";

// Filter and display func based on category
function filterBooks(category) {
  const categoryTitle = document.getElementById('shop-title');
  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

  displayBooks(filteredBooks);
  
  const getCategoryTitle = (category) => {
    switch (category) {
      case 'all':
        return 'Category: All Books';
      case 'fiction':
        return 'Category: Fiction';
      case 'comics':
        return 'Category: Comics';
      case 'romance':
        return 'Category: Romance';
      case 'classic':
        return 'Category: Classics';
      default:
        return 'Category: All Books';
    }
  }
  categoryTitle.textContent = getCategoryTitle(category);
}


// Details of books
function displayBooks(books) {
  const booksContainer = document.getElementById('booksContainer');
  booksContainer.innerHTML = '';

  books.forEach(book => {
    const bookElement = document.createElement('div'); 

    bookElement.innerHTML = `
      <img src="${book.img}" alt="${book.name}">
      <p class="book-title">${book.name}</p>
      <p class="book-writer">${book.writer}</p>
      <p class="book-price">${book.price}</p>
      <button onclick="addToCart('${book.name}', ${book.price})">Add to Card</button>
    `;

    booksContainer.appendChild(bookElement);
  });
}

// Initial
filterBooks('all');

// Using event listener instead of onclick event in html;
document.getElementById('allBtn').addEventListener('click', function() {
  filterBooks('all');
});

document.getElementById('fictionBtn').addEventListener('click', function() {
  filterBooks('fiction');
});

document.getElementById('comicsBtn').addEventListener('click', function() {
  filterBooks('comics');
});

document.getElementById('classicBtn').addEventListener('click', function() {
  filterBooks('classic');
});

document.getElementById('romanceBtn').addEventListener('click', function() {
  filterBooks('romance');
});