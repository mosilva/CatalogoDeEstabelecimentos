(() => {
  const style = document.createElement("style");
  style.innerHTML += `
    body, *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    main{
        height: 100%;
        margin-top:20vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
  `;
  document.body.appendChild(style);
})();
