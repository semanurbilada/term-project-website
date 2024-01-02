import books from "./data";

// Filter and display func based on category
function filterBooks(category) {
  const categoryTitle = document.getElementById('shop-title');
  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

  if(filteredBooks.length === 0) {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = `
      <p class="no-books">
        No books available in this ${category} category.
        <br/>
        <br/>
        Stay tuned!
      </p>
    `;
  } 
  else {
    displayBooks(filteredBooks);
  }

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
      <button class="addToCartBtn">Add to Card</button>
    `;
    
    // Use event listener to the "Add to Cart" button
    bookElement.querySelector('.addToCartBtn').addEventListener('click', function() {
      addToCart(book);
    });
    
    booksContainer.appendChild(bookElement);
  });
}

// Initial
filterBooks('all');

// Using event listener in js, instead of onclick event in html;
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


// Add to cart func
function addToCart(book) {
  // Existing cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the book is already in the cart
  const existingBook = cartItems.find(item => item.name === book.name);

  if (existingBook) {
    existingBook.quantity += 1;
  } 
  else {
    cartItems.push({ ...book, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems, null, 2));

  alert(`${book.name} by ${book.writer} added to your cart!`);
}