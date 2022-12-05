let nav = document.querySelector(".navigation-wrap ");
window.onscroll = function(){

    if(document.documentElement.scrollTop > 100 ){

        nav.classList.add("scroll");
    }else{
        nav.classList.remove("scroll")
    }
}

let navbar = document.querySelectorAll( ".nav-link");

let navcollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){

    a.addEventListener("click" , function(){

        navcollapse.classList.remove("show");
    })
})