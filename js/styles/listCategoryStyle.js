(() => { 
    const style = document.createElement('style');
    style.innerHTML = `
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    main{
      height: 85vh;
      padding-top: 25vh;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
    }

    h1{
      text-align: center;
    }

    table{
      border: 1px;
      text-align: center;
    }

    `;
    document.body.appendChild(style);
})();

