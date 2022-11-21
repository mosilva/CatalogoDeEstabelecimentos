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
      width: 100%;
      height:10vh;
      padding: 1rem;
      position: fixed;
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
        font-size: 1rem;
        color: #ffffff;
    }
    li:hover{
      cursor: pointer;
      font-weight: bolder;
    }

    @media screen and (min-width: 600px)
    {
    li{
      padding: 0.2rem;
      margin: 0.2rem;
    }
    li a{
        text-decoration: none;
        font-size: 1.5rem;
      }
    }
  `;
  document.body.appendChild(style);
})();
