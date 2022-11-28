(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    .livrosContainer .hide{
      display: none;
    }

    .livrosContainer main{
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .livrosContainer form{
      width: 80vw;
      height: 10vh;
      margin-top: 5vh;
      display: flex; 
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .livrosContainer h1{
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 2rem;
      margin-bottom: 5vh;
      text-align: center;
    }

    .livrosContainer span{
      color: #A4133C;
      padding: 10px;
    }
    .livrosContainer span:hover{
      cursor: pointer;
      background-color: #A4133C;
      color: #fff;
      border-radius: 100%;
    }

    .livrosContainer table{
      width: 80vw;
      height: 20vh;
      border: solid 10px #D9D9D9;
      border-radius: 10px;
      margin-top: 15vh;
      margin-bottom: 5vh;
      padding-top: 2vh;
      padding-bottom: 2vh;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 1.2rem;
  }

  .livrosContainer table td{
      text-align: center;
      font-family: 'Source Sans Pro', sans-serif;
  }

  .livrosContainer .campo{
      width: 25vw;
      height: 5vh;
      background-color: #D9D9D9;
      border-radius: 5px;
      border: none;
      margin: 10px;
  }
  .livrosContainer .campo::placeholder{
      font-size: 1rem;
      text-align: center;
  }

  .livrosContainer button{
      width: 17vw;
      margin: 10px;
      padding: 1vh 2vh;
      font-size: 1.2rem;
      text-align: center;
      background-color: #449C5C;
      border: none;
      border-radius: 10px;
      color: #fff; 
      background-color: #C9184A;
  }
  .livrosContainer button:hover{
    cursor: pointer;
    font-weight: bold;
  }

  .livrosContainer .idCategory{
    display:none;
  }

  .livrosContainer .div-register{
    display:none;
  }

  .livrosContainer .div-btn{
    display: flex;
    justify-content: center;
    align-itens: center;
  }

  @media(max-width: 700px) and (min-width: 360px){
    .livrosContainer .title{
      padding-top: 22vh;
    }
    .livrosContainer form{
      flex-direction: column;
    }
    .livrosContainer button{
      width: 70vw;
      
    }
    `;

  document.body.appendChild(style);
})();
