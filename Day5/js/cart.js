function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartItemCount() {
  const cartItemCount = document.getElementById("cart-item-count");
  if (cartItemCount) {
    const cart = getCart();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartItemCount.textContent = itemCount;
  }
}

function addToCart(productId) {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 299.99,
      category: "electronics",
      image: "D:/Training/Day5/images/smartphone.jpg",
      description: "Latest model with advanced features.",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 19.99,
      category: "clothing",
      image: "D:/Training/Day5/images/tshirt.webp",
      description: "Comfortable cotton t-shirt.",
    },
    {
      id: 3,
      name: "Watch",
      price: 49.99,
      category: "accessories",
      image: "D:/Training/Day5/images/watch.jpg",
      description: "Stylish wristwatch.",
    },
  ];
  const cart = getCart();
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  alert(`${product.name} added to cart!`);
  updateCartItemCount();
}

function displayCart() {
  const cartContainer = document.getElementById("cart-container");
  const cartTotal = document.getElementById("cart-total");
  const cartItemCount = document.getElementById("cart-item-count");
  const emptyCartMessage = document.getElementById("empty-cart");
  if (!cartContainer || !cartTotal || !cartItemCount || !emptyCartMessage)
    return;

  const cart = getCart();
  cartContainer.innerHTML = "";
  let total = 0;
  let itemCount = 0;

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
  } else {
    emptyCartMessage.style.display = "none";
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      itemCount += item.quantity;
      cartContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${
        item.name
      }" style="width: 100px; height: 100px; object-fit: cover;">
          <div>
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)} x ${
        item.quantity
      } = $${itemTotal.toFixed(2)}</p>
            <input type="number" value="${
              item.quantity
            }" min="1" onchange="updateQuantity(${item.id}, this.value)">
            <button class="button remove" onclick="removeFromCart(${
              item.id
            })">Remove</button>
          </div>
        </div>
      `;
    });
  }

  cartTotal.textContent = total.toFixed(2);
  cartItemCount.textContent = itemCount;
}

function updateQuantity(productId, quantity) {
  const cart = getCart();
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity = parseInt(quantity);
    if (cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart(cart);
      displayCart();
    }
  }
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  displayCart();
}

function displayOrderSummary() {
  const orderSummary = document.getElementById("order-summary");
  const orderTotal = document.getElementById("order-total");
  if (!orderSummary || !orderTotal) return;
  const cart = getCart();
  orderSummary.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    orderSummary.innerHTML += `
      <div class="cart-item">
        <p>${item.name} x ${item.quantity} - $${itemTotal.toFixed(2)}</p>
      </div>
    `;
  });
  orderTotal.textContent = total.toFixed(2);
  updateCartItemCount();
}

function handleCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const card = document.getElementById("card").value;
    if (name && email && address && card.match(/^\d{16}$/)) {
      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      updateCartItemCount();
      window.location.href = "index.html";
    } else {
      alert("Please fill all fields correctly. Card number must be 16 digits.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("cart.html")) {
    displayCart();
  } else if (window.location.pathname.includes("checkout.html")) {
    displayOrderSummary();
    handleCheckout();
  }
  updateCartItemCount();
});
