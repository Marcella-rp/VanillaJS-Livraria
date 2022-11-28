window.category = async (status = "hide") => {
  (() => {
    const styleJS = document.createElement("script");
    styleJS.setAttribute("src", "js/styles/livrosStyles.js");
    document.body.appendChild(styleJS);
  })();

  (async () => {
   
    createLinkApiGoogle();

    const requestBook = await listBooks();
    const listBook =
    requestBook.length != 0
      ? requestBook
      : JSON.parse(localStorage.livros)


    const titlesTable = ["Tiragem", "Título","Autor","Descrição", "Excluir", "Editar"];

    const livrosContainer = document.createElement("section");
    livrosContainer.classList.add("livrosContainer");
    status === "hide"
      ? livrosContainer.classList.add(status)
      : livrosContainer.classList.remove("hide");
    livrosContainer.setAttribute("id", "id-container");

    const main = document.querySelector("main");
    if (main) {
      main.appendChild(livrosContainer);
    } else {
      const main = document.createElement("main");
      document.body.appendChild(main);
      main.appendChild(livrosContainer);
    }

    const titlePage = document.createElement("h1");
    titlePage.textContent = "Livros";
    livrosContainer.appendChild(titlePage);
    const divButton = document.createElement("div");
    divButton.classList.add("div-btn");
    divButton.setAttribute("id", "div-btn");
    const buttonCadastrar = document.createElement("button");
    buttonCadastrar.textContent = "Cadastrar Livro";
    buttonCadastrar.setAttribute("id", "btn-cadastrar-novolivro");
    divButton.appendChild(buttonCadastrar);
    livrosContainer.appendChild(divButton);

    createFormRegisterBook();

    createFormSearchBook();

    const newTable = document.createElement("table");
    const headerTable = newTable.createTHead();
    const tableBody = newTable.createTBody();
    const footerTable = newTable.createTFoot();
    livrosContainer.appendChild(newTable);

    insertTitlesTable(headerTable, titlesTable);

    insertContentTable(listBook);

    const button = document.querySelector("#btn_busca");
    const input = document.querySelector("#busca");

    button.addEventListener("click", async function (event) {
      event.preventDefault();
      await showCategory(input);
    });

    function createLinkApiGoogle() {
      const newlink = document.createElement("link");
      newlink.setAttribute("rel", "stylesheet");
      newlink.setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      );
      document.head.appendChild(newlink);
    }

    function createFormRegisterBook() {
      const divRegister = document.createElement("div");
      divRegister.classList.add("div-register");
      livrosContainer.appendChild(divRegister);

      const form = document.createElement("form");
      form.setAttribute("action", "");
      form.setAttribute("method", "POST");
      form.setAttribute("id", "form-register");

      const inputTiragem = document.createElement("input");
      inputTiragem.classList.add("campo");
      inputTiragem.setAttribute("type", "text");
      inputTiragem.setAttribute("id", "tiragem");
      inputTiragem.setAttribute("placeholder", "Digite a tiragem do livro");

      const inputTitulo = document.createElement("input");
      inputTitulo.classList.add("campo");
      inputTitulo.setAttribute("type", "text");
      inputTitulo.setAttribute("id", "titulo");
      inputTitulo.setAttribute("placeholder", "Digite o título do livro");

      const inputAutor = document.createElement("input");
      inputAutor.classList.add("campo");
      inputAutor.setAttribute("type", "text");
      inputAutor.setAttribute("id", "autor");
      inputAutor.setAttribute("placeholder", "Digite o autor do livro");

      const inputdescricao = document.createElement("input");
      inputdescricao.classList.add("campo");
      inputdescricao.setAttribute("type", "text");
      inputdescricao.setAttribute("id", "descricao");
      inputdescricao.setAttribute("placeholder", "Digite a descrição do livro");

      const button = document.createElement("button");
      button.setAttribute("id", "btn-cadastrar-livro");
      button.textContent = "Criar Cadastro do Livro";

      const buttonEdit = document.createElement("button");
      buttonEdit.setAttribute("id", "btn-editar-livro");
      buttonEdit.style.display = "none";
      buttonEdit.textContent = "Editar Cadastro do Livro";

      divRegister.appendChild(form);
      form.appendChild(inputTiragem);
      form.appendChild(inputTitulo);
      form.appendChild(inputAutor);
      form.appendChild(inputdescricao);
      form.appendChild(button);
      form.appendChild(buttonEdit);
    }

    function createFormSearchBook() {
      const form = document.createElement("form");
      form.setAttribute("action", "");
      form.setAttribute("method", "POST");

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Digite titulo/autor/descricao");
      input.setAttribute("id", "busca");
      input.classList.add("campo");

      const button = document.createElement("button");
      button.textContent = "Buscar";
      button.setAttribute("id", "btn_busca");

      livrosContainer.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
    }

    function insertTitlesTable(headerTable, titlesTable) {
      for (let i = 0; i < titlesTable.length; i++) {
        const headerCell = document.createElement("th");
        headerTable.appendChild(headerCell);
        headerCell.textContent = titlesTable[i];
      }
    }

    function insertContentTable(listBook) {
      for (let i = 0; i < listBook.length; i++) {
        const rowTable = tableBody.insertRow();

        Object.values(listBook[i]).forEach((item) => {
          const headerCell = document.createElement("td");
          rowTable.appendChild(headerCell);
          headerCell.textContent = item;
        });

        rowTable.firstChild.classList.add("idBook");

        createIcon("delete", rowTable);
        createIcon("draw", rowTable);
      }
    }

    function createIcon(icon, rowTable) {
      const cell = document.createElement("td");
      const iconGoogle = document.createElement("span");

      if (icon == "delete") {
        iconGoogle.addEventListener("dblclick", deleteBooks);
      } else {
        iconGoogle.addEventListener("dblclick", editBookLocal);
      }

      function editBookLocal() {
        const itemEdit = this.parentNode.parentNode.querySelectorAll("td");
        const idBookTable = itemEdit[0].textContent;
        const tiragemBookTable = itemEdit[1].textContent;
        const tituloBookTable = itemEdit[2].textContent;
        const autorBookTable = itemEdit[3].textContent;
        const descricaoBookTable = itemEdit[4].textContent;
        const tiragemBookInput= document.querySelector("#tiragem");
        const tituloBookInput = document.querySelector("#titulo");
        const autorBookInput = document.querySelector("#autor");
        const descricaoBookInput = document.querySelector("#descricao");
        const buttonCreateBook = document.querySelect("#btn-cadastrar-livro"
        );
        const buttonHide = document.querySelector("#btn-cadastrar-novolivro");
        const divRegister = document.querySelector(".div-register");
        const buttonEdit = document.querySelector("#btn-editar-livro");

        buttonHide.textContent = "Esconder Form";
        divRegister.style.display = "block";
        buttonCreateBook.style.display = "none";

        if (buttonEdit["display"] == "block") {
          buttonEdit.style.display = "none";
        } else {
          buttonEdit.style.display = "block";
        }

        tiragemBookInput.value = tiragemBookTable;
        tituloBookInput.value = tituloBookTable;
        autorBookInput.value = autorBookTable;
        descricaoBookInput.value = descricaoBookTable;

        buttonEdit.addEventListener("click", async function (event) {
          event.preventDefault();
          await editCategories(
            idBookTable,
            tituloBookInput.value,
            autorBookInput.value,
            descricaoBookInput.value
          );
          await alert(
            "Categoria " + nameCategoryInput.value + "Alterada com sucesso!"
          );
          booksRenderAux();
        });
      }


      iconGoogle.textContent = icon;
      iconGoogle.setAttribute("class", "material-symbols-outlined");

      cell.appendChild(iconGoogle);
      rowTable.appendChild(cell);
    }

    
    function selectBtnNovoLivro() {
      const btnNovoLivro = document.querySelector("#btn-cadastrar-novolivro");
      const btnEditLivro = document.querySelector("#btn-editar-categoria");
      const btnCadastrarLivro = document.querySelector("#btn-cadastrar-livro");

      btnNovaCategoria.addEventListener("click", function (event) {
        event.preventDefault();

        if (btnNovoLivro.style.display == "none") {
          btnCadastrarLivro.style.display = "block";
          btnEditLivro.style.display = "none";
        }
      });
    }

    selectBtnNovoLivro();

    async function deleteBooks() {
      const itemDelete = this.parentNode.parentNode.querySelectorAll("td");
      
      await deleteBook(itemDelete[0].textContent);
      
      booksRenderAux();

    }

    window.showBook = async function (input) {
      clearTable();

      const result = await listBookByName(input.value);

      if (result.length) insertContentTable(result);
      else insertContentTable(listBook);
    };

    function clearTable() {
      const trs = tableBody.querySelectorAll("tr");
      for (i = 0; i < trs.length; i++) {
        trs[i].remove();
      }
    }

    async function registerBook(tiragem, titulo, autor, descricao) {
      await createBook(tiragem.value, titulo.value, autor.value, descricao.value);

      booksRenderAux();
    }

    function captureDataRegister() {
      const button = document.querySelector("#btn-cadastrar-livro");
      const tiragem = document.querySelector("#tiragem");
      const titulo = document.querySelector("#titulo");
      const autor = document.querySelector("#autor");
      const descricao = document.querySelector("#descricao");

      button.addEventListener("click", function (event) {
        event.preventDefault();
        registerCategory(tiragem, titulo,autor,descricao);
      });
    }

    captureDataRegister();

    window.hiddenFormRegister = function (buttonSelect, container, item) {
      const button = buttonSelect;
      const containerRegister = container;
      const propriedadesContainerRegister = containerRegister.style;
      containerRegister.style.display = "none";

      button.addEventListener("click", function (event) {
        event.preventDefault();

        if (propriedadesContainerRegister["display"] == "none") {
          containerRegister.style.display = "block";
          button.textContent = "Voltar";
        } else {
          containerRegister.style.display = "none";
          button.textContent = item;
        }
      });
    };

    hiddenFormRegister(
      document.querySelector("#btn-cadastrar-novolivro"),
      document.querySelector(".div-register"),
      "Criar Nova Registro de Livro"
    );
  })();
};

book();

async function booksRenderAux() {
  const main = document.querySelector("main");
  const section = document.querySelector("section.livrosContainer");
  main.removeChild(section);
  await book("no hide");
}