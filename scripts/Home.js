import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="ratings/rating-${
              product.rating.stars * 10
            }.png" />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${formatCurrency(
            product.priceCents
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

function updateCardQuantity() {
  let cartQuantity = 0;
  cart.forEach((cardItem) => {
    cartQuantity += cardItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  // const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
  // addedMessage.classList.add("added-to-cart-visible");
  // setTimeout(() => {
  //   addedMessage.classList.remove("added-to-cart-visible");
  // }, 2000);
}

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCardQuantity();
  });
});

// Phone navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const Navlink = document.getElementById("navlinks");

  menuToggle.addEventListener("click", () => {
    Navlink.classList.toggle("active");
  });
});

function search() {
  let filter = document
    .getElementsByClassName("search-bar")
    .value.toUpperCase();
  let productItem = document.querySelectorAll(".product-container");
  let l = document.getElementsByClassName("product-name");
  for (var i = 0; i <= l.length; i++) {
    let a = productItem[i].getElementsByClassName("product-name");
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      productItem[i].computedStyleMap.display = "";
    } else {
      productItem[i].computedStyleMap.display = "none";
    }
  }
}
