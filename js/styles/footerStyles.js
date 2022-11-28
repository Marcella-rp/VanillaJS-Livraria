(() => {
  const style = document.createElement("style");
  style.innerHTML += `
    footer {
      font-family: 'Source Sans Pro', sans-serif;
      margin-top: 1rem;
      width: 100%;
      height:10vh;
      padding: 1rem;
      position: relative;
      z-index: 1;
      bottom: 0;
      background-color: #4682B4;
    }
   
    @media(max-width: 700px) and (min-width: 360px){
    footer{
      
    }
  }
  `;
  document.body.appendChild(style);
})();
