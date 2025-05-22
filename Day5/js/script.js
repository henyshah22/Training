const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 299.99,
    category: "electronics",
    image: "images/smartphone.jpg",
    description: "Latest model with advanced features.",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 19.99,
    category: "clothing",
    image: "images/tshirt.webp",
    description: "Comfortable cotton t-shirt.",
  },
  {
    id: 3,
    name: "Watch",
    price: 49.99,
    category: "accessories",
    image: "images/watch.jpg",
    description: "Stylish wristwatch.",
  },
];

function displayProducts(category = "") {
  const productList = document.getElementById("product-list");
  if (!productList) return;
  productList.innerHTML = "";
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;
  filteredProducts.forEach((product) => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top product-img" alt="${
      product.name
    }">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <a href="product.html?id=${
              product.id
            }" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += card;
  });
}

function displayProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = products.find((p) => p.id === productId);
  const productDetails = document.getElementById("product-details");
  if (!product || !productDetails) return;
  productDetails.innerHTML = `
    <div class="col-md-6">
      <img src="${product.image}" class="img-fluid" alt="${product.name}">
    </div>
    <div class="col-md-6">
      <h2>${product.name}</h2>
      <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
      <p><strong>Description:</strong> ${product.description}</p>
      <button class="btn btn-primary me-2" onclick="addToCart(${
        product.id
      })">Add to Cart</button>
      <a href="checkout.html" class="btn btn-success">Buy Now</a>
    </div>
  `;
}

function handleSearch() {
  const searchForms = document.querySelectorAll("form");
  searchForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchInput = form
        .querySelector("#searchInput")
        .value.toLowerCase();
      const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchInput)
      );
      displayProducts();
      document.getElementById("product-list").innerHTML = "";
      filteredProducts.forEach((product) => {
        const card = `
          <div class="col-md-4 mb-4">
            <div class="card product-card">
              <img src="${
                product.image
              }" class="card-img-top product-img" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price.toFixed(2)}</p>
                <a href="product.html?id=${
                  product.id
                }" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        `;
        document.getElementById("product-list").innerHTML += card;
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (window.location.pathname.includes("shop.html")) {
    displayProducts(category);
  } else if (window.location.pathname.includes("product.html")) {
    displayProductDetails();
  }
  handleSearch();
});
