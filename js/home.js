(() => {
  const homeStyle = document.createElement("script");
  homeStyle.setAttribute("src", "js/styles/homeStyles.js");
  document.body.appendChild(homeStyle);
})();

for (const files of [
  "./js/livros.js",
  "./js/header.js",
  "./js/apis.js",
  "./js/global.js",
  "./js/footer.js",
  "./js/style.js",
  "./js/styles/generalStyles.js",
]) {
  const script = document.createElement("script");
  script.setAttribute("src", `${files}`);
  document.head.appendChild(script);
}

function carouselGenerate() {
  const home = document.createElement("section");
  home.classList.add("homeContainer");

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(home);
  } else {
    const main = document.createElement("main");
    document.body.appendChild(main);
    main.appendChild(home);
  }

  const title = document.createElement("h1");
  title.textContent = "Nossa Livraria";
  home.appendChild(title);
  const firstDiv = document.createElement("div");
  home.appendChild(firstDiv);

  const firstImg = document.createElement("img");
  firstDiv.appendChild(firstImg);
  const secondImg = document.createElement("img");
  firstDiv.appendChild(secondImg);
  const thirdImg = document.createElement("img");
  firstDiv.appendChild(thirdImg);
  const fourthdImg = document.createElement("img");
  firstDiv.appendChild(fourthdImg);

  function setAttributesHome() {
    title.setAttribute("class", "title");
    firstImg.setAttribute("src", "../images/books.jpg");
    firstImg.setAttribute("class", "carouselImg");
    firstDiv.setAttribute("class", "container");
    secondImg.setAttribute("src", "../images/pessoa.jpg");
    secondImg.setAttribute("class", "carouselImg");
    thirdImg.setAttribute("src", "../images/estante.jpg");
    thirdImg.setAttribute("class", "carouselImg");
    fourthdImg.setAttribute("src", "../images/corredor.jpg");
    fourthdImg.setAttribute("class", "carouselImg");
  }
  setAttributesHome();
}

carouselGenerate();

let interval = 0;
const maxImgs = document.querySelectorAll(".carouselImg").length - 1;

function carouselAction() {
  const img = document.querySelectorAll(".carouselImg");

  setInterval(function () {
    img[interval].style.display = "none";
    interval++;
    if (interval > maxImgs) {
      interval = 0;
    }
    img[interval].style.display = "block";
  }, 1500);
}

carouselAction();



