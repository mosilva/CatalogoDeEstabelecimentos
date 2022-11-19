(() => {
  const style = document.createElement("style");
  style.innerHTML += `
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    footer {
      margin-top: 1rem;
      width: 100vw;
      padding: 1rem;
      position: fixed;
      z-index: 1;
      bottom: 0;
      background-color: #000000;
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
      border-radius: 5px;
      font-weight: bold;
    }
    li a{
        text-decoration: none;
        font-size: 1rem;
        color: #0074c1;
    }

    @media screen and (min-width: 600px)
    {
    li{
      padding: 0.2rem;
      margin: 0.2rem;
      border: solid 0.3px #8aa2dc;
    }
    li a{
        text-decoration: none;
        font-size: 1.5rem;
      }
    }
  `;
  document.body.appendChild(style);
})();
