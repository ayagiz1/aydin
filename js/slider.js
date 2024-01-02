

//! slider start
function showSlides(n){

    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");
    if (n > (slides.length - 1)){
        slidesIndex = 0;
    }

    if (n < 0){
        slidesIndex = (slides.length -1 );
    }

    for (let i =0; i < slides.length; i++){
        slides[i].style.display = "none";
    }



    for (let i =0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }


    slides[slidesIndex].style.display ="flex";
    dots[slidesIndex].className += " active"; 
    
    
}

    
let slidesIndex =0;
showSlides(slidesIndex);


setInterval(()=>{
    showSlides(slidesIndex +=1)
}, 4000);





function plusSlide(n){
    showSlides(slidesIndex += n);
}



function currentSlide(n){
    showSlides((slidesIndex =n));

}






//! slider end 




