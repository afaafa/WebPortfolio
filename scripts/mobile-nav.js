const menu = document.querySelector("#menu")
const drawer = document.querySelector("#drawer")

menu.addEventListener("click", () => {
  if (drawer.style.display === "block") {
    drawer.style.display = "none"
  } else {
    drawer.style.display = "block"
  }
})