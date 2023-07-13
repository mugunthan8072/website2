interface Product {
    name: string;
    price: number;
    description: string;
  }
  
  const products: Product[] = [
    {
      name: 'Product 1',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Product 2',
      price: 29.99,
      description: 'Praesent vel semper lectus, id aliquam dolor.',
    },
    {
      name: 'Product 3',
      price: 39.99,
      description: 'Nullam feugiat ante eget dolor ullamcorper, ut lacinia neque ultrices.',
    },
  ];
  
  function createProductCard(product: Product): HTMLDivElement {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const nameElement = document.createElement('h3');
    nameElement.textContent = product.name;
    productCard.appendChild(nameElement);
  
    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${product.price.toFixed(2)}`;
    productCard.appendChild(priceElement);
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;
    productCard.appendChild(descriptionElement);
  
    return productCard;
  }
  
  function displayProducts() {
    const productContainer = document.querySelector('.product-list') as HTMLDivElement;
  
    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  }
  
  displayProducts();
  