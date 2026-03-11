
function toggleMode() {
  const body = document.body;
  const image = document.querySelector("#profile img");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    image.setAttribute("src", "./assets/avatar.png");
    image.setAttribute("alt", "Foto de Perfil com Camisola do Chaves Azul");
  } else {
    body.classList.add("light");
    
    image.setAttribute("src", "./assets/avatar-light.png");
    image.setAttribute("alt", "Foto de Perfil com Camisola do Chaves Branca");
  }

}
// body.classList.toogle("light");
