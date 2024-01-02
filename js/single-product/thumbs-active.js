export function thumbsActiveFunc(){
    const thumbs = document.querySelectorAll(".galery-thumbs .glide__slide .img-fluid");
    const singleImg = document.querySelector("#single-img");
    
    thumbs.forEach((item) =>{

        item.addEventListener("click", function(){
            thumbs.forEach((image) =>{
                image.classList.remove("active");
            })
            singleImg.src = item.src;
            item.classList.add("active");

            
        })
        
    })

}