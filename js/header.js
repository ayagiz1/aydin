function sideBarfunch(){
    //! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar")
const btnclosebutton = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click",()=>{
    sidebar.style.left ="0";

})

btnclosebutton.addEventListener("click", ()=>{
    sidebar.style.left ="-100%"
})
//* click outside start

document.addEventListener("click", (e)=>{
    if(!e.composedPath().includes(sidebar)&& !e.composedPath().includes(btnOpenSidebar)){
        sidebar.style.left ="-100%"
    }
});
//* click outside end

//! home sidebar end 
}

function seacrhModalfunction(){
    //! modal search start

const searchbutton = document.querySelector(".seacrh-toggle");
const btnclose = document.querySelector("#close-modal-search")
const modalsearch = document.getElementsByClassName("modal-search");
const modalwrap = document.querySelector(".modal-wrapper");


searchbutton.addEventListener("click", ()=>{
    modalsearch[0].style.visibility = "visible"
    modalsearch[0].style.opacity = "1";
})

 btnclose.addEventListener("click", ()=>{
    modalsearch[0].style.visibility = "hidden"
    modalsearch[0].style.opacity = "0";
 })

//* click outside start


document.addEventListener("click", (e)=>{
    if(!e.composedPath().includes(modalwrap) && !e.composedPath().includes(searchbutton)){
        modalsearch[0].style.visibility = "hidden"
        modalsearch[0].style.opacity = "0";
    }
});







//* click outside end
//! modal search end 






}

function Header(){
    sideBarfunch();
    seacrhModalfunction();
}

export default Header();