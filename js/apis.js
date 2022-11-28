const url = "http://livros.letscode.dev.netuno.org:25390/services/livro";
const uid = "5c305fb4-82d0-4b46-bd5d-74a2ffd7932d";

window.createBook = async function ({tiragem, titulo, autor, descricao}) {
  try {
    await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tiragem: `${tiragem}`,
        titulo: `${titulo}`,
        autor: `${autor}`,
        descricao: `${descricao}`,
        aluno: {
          uid: uid,
        },
      }),
    });
  } catch (error) {
    console.error("Erro ao cadastrar livro", error);
  }
};

window.listBooks = async function () {
  try {
    const promise = await fetch(`${url}/lista`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "",
        aluno: {
          uid: uid,
        },
      }),
    });

    if (!promise.ok) {
      return [];
    }
    return promise.json();
  } catch (error) {
    console.error("Erro ao trazer lista de livros", error);
  }
};

window.deleteBook = async function (id) {
  try {
    const promise = await fetch(`${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: `${id}`,
        aluno: {
          uid: uid,
        },
      }),
    });
  } catch (error) {
    console.error("Erro ao deletar livro", error);
  }
};

window.listBookByName = async function (titulo) {
  try {
    const promise = await fetch(`${url}/livro/lista`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `${titulo}`,
        aluno: {
          uid: uid,
        },
      }),
    }).catch((error) => {});

    if (!promise) {
      return [];
    }

    return promise.json();
  } catch (error) {
    console.error("Erro na comunicação: ", error);
  }
};

window.editBook = async function ({id, tiragem, titulo, autor, descricao}) {
  try {
    const promise = await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: `${id}`,
        tiragem: `${tiragem}`,
        titulo: `${titulo}`,
        autor: `${autor}`,
        descricao: `${descricao}`,
        aluno: {
          uid: uid,
        },
      }),
    }) 
  } catch (error) {
    console.error("Erro ao editar livro", error);
  }
};
