(() => {
  const headerStyle = document.createElement("style");
  headerStyle.innerHTML += `    
      .containerHeader{
        font-family: 'Source Sans Pro', sans-serif;
        background-color:#4682B4;
        width: 100%;
        height:15vh;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        position: fixed;
        z-index: 1;
        top: 0;
      }
      
      nav li{
        width: 20vw;
        color: white;
        font-size: 1.5rem;
        font-weight: 300;
        text-align:center;
        border: none;
      }
      nav li:hover{
        cursor: pointer;
        font-weight: bolder;
      }

      @media(max-width: 700px) and (min-width: 360px){
        .containerHeader{
            height:15vh;
        }
        .logoHeader{
            height: 15vh;
          }
        nav{
          display: flex;
          width: 80vw;
          margin-left: -10vw;
        }
        nav li{
            display:flex;
            justify-content: space-around;
            width: 30vw;
        }
        nav a{
          font-size: 20px;
        }
      }
    `;
  document.body.appendChild(headerStyle);
})();
