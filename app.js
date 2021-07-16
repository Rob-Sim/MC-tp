if("ontouchstart" in document.documentElement){
    let cardsBtn = document.getElementsByClassName("card--back--bottom")
    for(let i = 0; i < cardsBtn.length; i++) {
        cardsBtn[i].style.opacity = "0"
    }

    let cards = document.getElementsByClassName("content__card--flip")
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function(){
            this.children[0].classList.toggle("flipFront")
            this.children[1].classList.toggle("flipBack")
        })
    }
}
