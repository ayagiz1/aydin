function sizeFunc(){

    const sizes = document.querySelectorAll(".values-list span");
    
    sizes.forEach((size) =>{
        size.addEventListener("click", function(){

            sizes.forEach((item) =>{
                item.classList.remove("active");
            });

            size.classList.add("active");

        })

    })






}



export default sizeFunc();