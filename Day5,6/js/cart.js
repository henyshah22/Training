import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRCfSCWNmL0W2dvS-AxpSSYocjaM32coo",
  authDomain: "e-shopping-baacc.firebaseapp.com",
  projectId: "e-shopping-baacc",
  storageBucket: "e-shopping-baacc.firebasestorage.app",
  messagingSenderId: "188192593595",
  appId: "1:188192593595:web:6bde8a346d1bcc64cabb9e",
  measurementId: "G-MQG7S3CFZ2",
  databaseURL: "https://e-shopping-baacc-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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

function addToCart(productKey) {
  const productRef = ref(database, `products/${productKey}`);

  onValue(
    productRef,
    (snapshot) => {
      const product = snapshot.val();

      if (!product) {
        alert("Product not found!");
        return;
      }

      const cart = getCart();
      const existingItem = cart.find((item) => item.key === productKey);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          key: productKey,
          name: product.name,
          price: product.price,
          category: product.categoryid,
          image: product.imageURL,
          quantity: 1,
        });
      }

      saveCart(cart);
      alert(`${product.name} added to cart!`);
      updateCartItemCount();
    },
    {
      onlyOnce: true,
    }
  );
}

function displayCart() {
  const cartContainer = document.getElementById("cart-container");
  const cartTotal = document.getElementById("cart-total");
  const cartItemCount = document.getElementById("cart-item-count");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartData = document.getElementById("cart-data");
  if (!cartContainer || !cartTotal || !cartItemCount) return;

  const cart = getCart();
  cartData.innerHTML = "";
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
      cartData.innerHTML += `
  <div class="cart-item">
    <img src="${item.image}" alt="${
        item.name
      }" style="width: 100px; height: 100px; object-fit: cover;">
    <div>
      <h4>${item.name}</h4>
      <p>$${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(
        2
      )}</p>
      <input type="number" value="${
        item.quantity
      }" min="1" onchange="updateQuantity('${item.key}', this.value)">
      <button class="button remove" onclick="removeFromCart('${
        item.key
      }')">Remove</button>
    </div>
  </div>
`;
    });
  }

  cartTotal.textContent = total.toFixed(2);
  cartItemCount.textContent = itemCount;
}

function updateQuantity(productKey, quantity) {
  const cart = getCart();
  const cartItem = cart.find((item) => item.key === productKey);
  if (cartItem) {
    cartItem.quantity = parseInt(quantity);
    if (cartItem.quantity <= 0) {
      removeFromCart(productKey);
    } else {
      saveCart(cart);
      displayCart();
    }
  }
}
function removeFromCart(productKey) {
  let cart = getCart();
  cart = cart.filter((item) => item.key !== productKey);
  saveCart(cart);
  displayCart();
  updateCartItemCount();
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
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
