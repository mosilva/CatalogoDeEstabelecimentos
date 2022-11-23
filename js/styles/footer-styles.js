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
      background-color: #A4133C;
    }
    ul{
      display: flex;
      flex-wrap: wrap;  
      justify-content: space-evenly;
      align-itens: center;
    }
    li{
      list-style:none;
      padding: 0.1rem;
      margin: 0.2rem;
    }
    li a{
        text-decoration: none;
        font-size: 1.5rem;
        color: #ffffff;
    }
    li:hover{
      cursor: pointer;
      font-weight: bolder;
    }

    @media(max-width: 700px) and (min-width: 360px){
    li{
      padding: 0.2rem;
      margin: 0.2rem;
    }
    li a{
        text-decoration: none;
        font-size: 1.2rem;
      }
    }
  `;
  document.body.appendChild(style);
})();
