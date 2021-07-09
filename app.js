let elementsHeight = 0
let latestElement = 0
let scrollMouse = document.getElementById("scroll-mouse");

const pages = document.querySelectorAll(".group");
pages.forEach((e,i,a) => {
    elementsHeight += e.offsetHeight
    if(i == 5){
        latestElement = e.offsetHeight
    }
})

window.onscroll = () => {
    if(window.scrollY >= elementsHeight - latestElement){
        scrollMouse.style.animationPlayState = "paused";
        scrollMouse.style.display = "none"
    }
    else{
        scrollMouse.style.animationPlayState = "running";
        scrollMouse.style.display = "block"
    }
}