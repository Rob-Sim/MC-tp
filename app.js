//Array of nav__item in header
let navItem = document.getElementsByClassName("nav__item")
//Underline bar
const navUnder = document.getElementById("header__nav-bar--underline")


function moveResizeUnderline(navItem){
    //Move the underline to current hovered nav item
    navUnder.style.left = navItem.getBoundingClientRect().left + "px"
    //Set the width of underline to the width of hovered nav item
    navUnder.style.width = navItem.offsetWidth + "px"
}

function mouseLeaveNav(){
    //Set all elements to full opacity
    navOpacity(1)

    //Move the underline to where the current active el is.
    moveResizeUnderline(document.getElementById("active"))
}

function hoverNavItem(){
    //Set all nav items to half opacity
    navOpacity(.5)
    
    //Set the current hovered el to full opacity
    this.style.opacity = 1
        
    moveResizeUnderline(this)
}

//Set opacity of all nav items
function navOpacity(opacity){
    for(i = 0; i < navItem.length; i++){
        navItem[i].style.opacity = opacity
    }
}

//When we resize the window- move the underline to correct position
window.addEventListener("resize", function(){
    moveResizeUnderline(document.getElementById("active"))
    init()
})

function clickNavItem(){
    //Remove the 'active' id from all elements
    let currActive = document.getElementById("active")
    if(currActive){ currActive.removeAttribute("id") }
    
    //Set 'active' id on clicked nav item
    this.id = "active"
}

function init(){
    //At 1000px, we shift to a two line layout. The moving line isnt compataible. Only use under 1000px
    if(window.innerWidth > 1000){
        //Add event listeners to each of the nav-item elements
        for(i = 0; i < navItem.length; i++){
            //When we hover a nav element
            navItem[i].addEventListener("mouseenter",hoverNavItem)
    
            //On click of a nav item
            navItem[i].addEventListener("click",clickNavItem)
        }

        //When we move out of the nav-bar, run mouseLeaveNav
        document.getElementById("nav-bar").addEventListener("mouseleave", mouseLeaveNav, false)

        //init pos of underline, Cant run immediately
        window.setTimeout(() => { mouseLeaveNav() }, 100);
        //If we just resized from 1000, display the underline
        navUnder.style.display = "block"

    }else{
        //Remove all eventlisteners for hover and click on nav items
        for(i = 0; i < navItem.length; i++){
            navItem[i].removeEventListener("mouseenter",hoverNavItem)
            navItem[i].removeEventListener("click",clickNavItem)
        }
        //Remove the underline bar
        navUnder.style.display = "none"
        //At 1000px, media query creates an underline bar for pressed item
    }
}

init()