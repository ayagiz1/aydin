function zoomFunction(){
    const singleImage = document.querySelector("#single-img");    
    const singleImagewrapper = document.querySelector(".single-image-wrapper");
    

    singleImagewrapper.addEventListener("mousemove", function(e){
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        



        singleImage.style.transformOrigin = `${x}px ${y}px`;
        singleImage.style.transform = "scale(5)";

        });



        singleImagewrapper.addEventListener("mouseleave", function(e){
            
                
            singleImage.style.transform = "scale(1)";


            });
}


export default zoomFunction();