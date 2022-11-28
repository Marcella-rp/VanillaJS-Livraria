window.hiddenSection = (event) => {
  event.preventDefault();
  const className = event.path[0].parentNode.classList;
  const home = document.querySelector(".homeContainer");
  const livros = document.querySelector("livros.Container");
  if (className == "Home") {
    home.classList.remove("hide");
    livros.classList.add("hide");
  }  else if (className == "Livros") {
    livros.classList.remove("hide");
    home.classList.add("hide");
  }
};

window.hiddenForFooter = async (event) => {
  event.preventDefault();
  document.querySelector(".homeContainer").classList.add("hide");
  document.querySelector(".categoryContainer").classList.remove("hide");
};