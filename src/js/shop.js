// Data array of books
const books = [
  { 
    name: 'Dune', 
    img: '/images/item10.jpg',
    writer: 'Frank Herbert', 
    category: 'scienceF' 
  },
  { 
    name: 'Book 2', 
    writer: '', 
    category: 'scienceF'
  },
  { 
    name: 'Electronics 1', 
    writer: '', 
    category: 'comics'
  },
  { 
    name: 'Electronics 2', 
    writer: '', 
    category: 'comics' 
  },
];

// Function to filter and display books based on category
function filterBooks(category) {
  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);
  displayBooks(filteredBooks);
}

// Function to display books in the books container
function displayBooks(books) {
  const booksContainer = document.getElementById('booksContainer');
  booksContainer.innerHTML = '';

  books.forEach(book => {
    const bookElement = document.createElement('div');

    bookElement.innerHTML = `
      <img src="${book.img}" alt="${book.name}">
      <p>${book.name}</p>
      <p>${book.writer}</p>
    `;
    booksContainer.appendChild(bookElement);
  });
}

// Initial display of all books
filterBooks('all');