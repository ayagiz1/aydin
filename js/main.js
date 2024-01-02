



import Header from "./header.js";
import Products from "./products.js";
import searchFunc from "./single-product/search.js"



//! app product to localStorage start


(async function(){
    const photos = await fetch("../js/data.json");

    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    Products(data);
    searchFunc(data);
    
})()

//! app product to localStorage end 



   //! app product to localStorage start



   const cartItems = document.querySelector(".header-cart-count");

   cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0";



      //! app product to localStorage end




    // modal dialog star

    const modalDialogDOM = document.querySelector(".modal-dialog");

    const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");
    const ModalContentDOM = document.querySelector(".modal-dialog .modal-content");
    console.log(btnCloseDialog);


    btnCloseDialog.addEventListener("click", function(){
        modalDialogDOM.classList.remove("show");

    })


    document.addEventListener("click", function(e){
        if (!e.composedPath().includes(ModalContentDOM)){
            modalDialogDOM.classList.remove("show");
        }
    })


    setTimeout(() =>{
        modalDialogDOM.classList.add("show");
    }, 3000);


    // modal dialog end
   


