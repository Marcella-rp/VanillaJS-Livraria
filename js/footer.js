(() => {
  const styleJs = document.createElement("script");
  styleJs.setAttribute("src", "js/styles/footerStyles.js");
  document.body.appendChild(styleJs);
})();

window.generateFooter = async function () {


  const requestBook = await listBooks();
  const livros =
    requestBook.length != 0
      ? requestBook
      : JSON.parse(localStorage.livros);


  const footer = document.createElement("footer");
  
  document.body.appendChild(footer);
};

generateFooter();

async function renderBookSelected(event) {
  const livroSelect = event.path[0].name;
  const input = document.createElement("input");
  const footer = document.querySelector("footer");
  input.value = livroSelect;
  await hiddenForFooter(event);
  await showBook(input);
}

async function generateFooterRender() {
  const body = document.querySelector("body");
  const footer = body.querySelector("footer");
  body.removeChild(footer);
  await generateFooter();
}