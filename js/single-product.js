
import { thumbsActiveFunc } from "./single-product/thumbs-active.js";
import { singleThumbs } from "./glide.js";
import zoomFunc from "./single-product/zoom.js";
import colorFunc from "./single-product/colors.js";
import sizeFunc from "./single-product/size.js";
import tabsFunc from "./single-product/tabs.js";
import commentFunc from "./single-product/comments.js";





const productId = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) 
: localStorage.setItem("productId", JSON.stringify(1));


const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) 
: localStorage.setItem("products", JSON.stringify([]));


const findProduct = products.find((item) => item.id ===Number(productId));

// product title
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;




// product price

const newPrice = document.querySelector(".new-price");
const oldPrice = document.querySelector(".old-price");


newPrice.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`;
oldPrice.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`;



// product image 

const productImg = document.querySelector("#single-img");

productImg.src = findProduct.img.singleImage;



// product thumbs 

const productThumbs = document.querySelectorAll(".img-fluid");



let galleryThumbs = document.querySelector(".galery-thumbs");
let results = "";
findProduct.img.thumbs.forEach((item) =>{
    results += `
    <li class="glide__slide">
    <img src="${item}" class ="img-fluid" alt="">
  </li>`;


});



galleryThumbs.innerHTML = results;
singleThumbs();
thumbsActiveFunc();
const productThumbItem = document.querySelectorAll(".product-thumb .glide__slide img");
productThumbItem[0].classList.add("active");

// add to cart

let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const findCart = cart.find((item) => item.id === findProduct.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");


if (findCart){
  btnAddToCart.setAttribute("disabled", "disabled");
}else{
  btnAddToCart.addEventListener("click", function(){
      cart.push({...findProduct, quantity: Number(quantityDOM.value)});
      btnAddToCart.setAttribute("disabled", "disabled");
      localStorage.setItem("cart", JSON.stringify(cart));
      cartItems.innerHTML = cart.length;
      

  })
}


