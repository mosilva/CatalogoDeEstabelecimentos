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
      background-color: cyan;

    }
    ul{
      display: flex;
      flex-wrap: wrap;  
      justify-content: center;
      align-itens: center;

    }
    li{
      list-style:none;
      padding: 0.1rem;
      margin: 0.2rem;
      background-color: blue;
    }
    li a{
        text-decoration: none;
    }
  `;
  document.body.appendChild(style);
})();
