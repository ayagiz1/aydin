import {product1} from "./glide.js";

let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): [];




function addTocart(products){

    const cartItems = document.querySelector(".header-cart-count");
    const buttons = [...document.getElementsByClassName("add-to-cart")]

    buttons.forEach((button) =>{

        const inCart = cart.find((item) => item.id === Number(button.dataset.id))
        if(inCart){
            button.setAttribute("disabled", "disabled");
        }else{
            button.addEventListener("click", function(e){
                e.preventDefault();
                const id = e.target.dataset.id;
                const findProduct = products.find((product) => product.id === Number(id));
                 cart.push({...findProduct, quantity: 1});
                 localStorage.setItem("cart", JSON.stringify(cart));
                 button.setAttribute("disabled","disabled");
                 cartItems.innerHTML = cart.length;
            });
        }
    });
}



function productsRoute(){

    const productLink = document.getElementsByClassName("product-link");
    const productImage = document.getElementsByClassName("product-image");
    
    Array.from(productLink).forEach((button) => {
        button.addEventListener("click", function(e){
            e.preventDefault();
            const id = e.target.dataset.id;
            localStorage.setItem("productId", JSON.stringify(id))
            window.location.href = "single-product.html";
            console.log(id);
        })
    })
    Array.from(productImage).forEach((image) =>{
        image.addEventListener("click", function(e){
            e.preventDefault()
            const id = e.target.dataset.id;
            localStorage.setItem("productId", JSON.stringify(id))
            window.location.href = "single-product.html";

        })
    })

}





function productsFunction(products){


    const productsContainer = document.getElementById("product-list");




    let results = "";
    products.forEach((item) =>{
        results += `              
    <li class="product-item ">
        <div class="product-image " >
            <a href="#">
            <img
                src=${item.img.singleImage}
                alt=""
                class="image1"
                data-id =${item.id}
            />
            <img
                src=${item.img.thumbs[1]}
                alt=""
                class="image2"
                data-id =${item.id}
            />
            </a>
        </div>
        <div class="product-info">
            <a href="#" class="product-title">${item.name}</a>
            <ul class="product-star">
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-fill"></i>
            </li>
            <li>
                <i class="bi bi-star-half"></i>
            </li>
            </ul>
            <div class="product-price">
            <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
            </div>
            <span class="product-discount">%${item.discount}</span>
            <div class="product-links">
            <button class ="add-to-cart" data-id =${item.id}>
            <i class="bi bi-basket-fill"></i>
            </button>
            <button>
                <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#" class="product-link" data-id=${item.id}>
            <i class="bi bi-eye-fill"></i>
            </a>
            <a href="" class="bi bi-share-fill"></a>
            </div>
        </div>
    </li>`;
    productsContainer ? (productsContainer.innerHTML = results) : "";
    addTocart(products);
    });
    product1();
    productsRoute();
}



export default productsFunction;