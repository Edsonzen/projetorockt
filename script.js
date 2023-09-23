function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/assets/Avatar2-Light.png")
  } else {
    // se estiver sem light mode
    img.setAttribute("src", "./assets/assets/Avatar1.png")
  }
}
