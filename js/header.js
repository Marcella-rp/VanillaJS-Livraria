(() => {
  const headerStyles = document.createElement("script");
  headerStyles.setAttribute("src", "js/styles/headerStyles.js");
  document.body.appendChild(headerStyles);
})();

const headerLinks = [
  {
    nome: "Home",
  },
  {
    nome: "Livros",
  },
];

function generateHeader() {
  const header = document.createElement("header");
  const headerSection = document.createElement("section");
  const logo = document.createElement("span");
  headerSection.appendChild(logo);
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  headerLinks.forEach((item) => {
    const list = document.createElement("li");
    const link = document.createElement("a");
    list.setAttribute("class", "navList");
    list.setAttribute("class", `${item.nome}`);

    link.addEventListener("click", hiddenSection);
    link.innerText = item.nome;
    navList.appendChild(list);
    list.appendChild(link);
  });

  function setAttributesHeader() {
    headerSection.setAttribute("class", "containerHeader");
  }

  document.body.appendChild(header);
  header.appendChild(headerSection);
  headerSection.appendChild(nav);
  nav.appendChild(navList);
  setAttributesHeader();
}

generateHeader();
