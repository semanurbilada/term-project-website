// Sample array of products
const products = [
  { name: 'Book 1', category: 'books' },
  { name: 'Book 2', category: 'books' },
  { name: 'Electronics 1', category: 'electronics' },
  { name: 'Electronics 2', category: 'electronics' },
];

// Function to filter and display products based on category
function filterProducts(category) {
  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
  displayProducts(filteredProducts);
}

// Function to display products in the product container
function displayProducts(products) {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.textContent = product.name;
      // You can customize the product display further based on your design
      productContainer.appendChild(productElement);
  });
}

// Initial display of all products
filterProducts('all');