// Data array of books
const books = [
  { 
    name: 'Dune', 
    img: '/images/item10.jpg',
    writer: 'Frank Herbert', 
    price: '70$',
    category: 'scienceF' 
  },
  { 
    name: 'Book 2', 
    writer: '', 
    price: '70$',
    category: 'scienceF'
  },
  { 
    name: 'Electronics 1', 
    writer: '', 
    price: '70$',
    category: 'comics'
  },
  { 
    name: 'Electronics 2', 
    writer: '', 
    price: '70$',
    category: 'comics' 
  },
];

// Function to filter and display books based on category
function filterBooks(category) {
  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);
  displayBooks(filteredBooks);
  
  const categoryTitle = document.getElementById('shop-title');
  categoryTitle.textContent = getCategoryTitle(category);
}
//TODO: more customize edilmeli !!!! (içerikle birlikte)
function getCategoryTitle(category) {
  switch (category) {
    case 'all':
      return 'All Books';
    case 'scienceF':
      return 'Science Fiction';
    case 'comics':
      return 'Comics';
    default:
      return 'All Categories';
  }
}

// Function to display books in the books container
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
      <button>Add to Card</button>
    `;
    booksContainer.appendChild(bookElement);
  });
}

// Initial display of all books
filterBooks('all');