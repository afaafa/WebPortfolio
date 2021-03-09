//navbar hide background
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.background = "rgb(255 255 255 / 90%)";
        navbar.style.boxShadow = "0 1px 5px rgb(0 0 0 / 20%)";
    } else {
        navbar.style.background = "rgb(255 0 0 / 0%)";
        navbar.style.boxShadow = "0 0 0 rgb(255 0 0 / 0%)";
    }
})