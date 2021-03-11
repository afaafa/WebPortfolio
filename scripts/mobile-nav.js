const menu = document.querySelector("#menu")
const drawer = document.querySelector("#drawer")
const header = document.querySelector("header")
const main = document.querySelector("main")

menu.addEventListener("click", () => {
  if (drawer.style.display === "block") {
    drawer.style.display = "none"
    header.classList.remove('transform')
    main.classList.remove('transform')
  } else {
    drawer.style.display = "block"
    header.classList.toggle('transform')
    main.classList.toggle('transform')
  }

})