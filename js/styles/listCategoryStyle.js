(() => { 
    const style = document.createElement('style');
    style.innerHTML = `
    .categoryContainer .hide{
      display: none;
    }

    .categoryContainer main{
      font-family: 'Source Sans Pro', sans-serif;
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .categoryContainer form{
      width: 80vw;
      margin-top: 5vh;
      display: flex; 
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .categoryContainer h1{
      font-size: 2rem;
      margin-bottom: 5vh;
      text-align: center;
    }

    .categoryContainer span{
      color: #A4133C;
      padding: 10px;
    }
    .categoryContainer span:hover{
      cursor: pointer;
      background-color: #A4133C;
      color: #fff;
      border-radius: 100%;
    }

    .categoryContainer table{
      width: 100%;
      padding-left: 2vw;
      line-height: 5vh;
      margin-right: 7vh; 
  }

  .categoryContainer table td{
      text-align: center;
  }

  .categoryContainer .campo{
      width: 25vw;
      height: 5vh;
      background-color: #D9D9D9;
      border-radius: 5px;
      border: none;
      margin: 10px;
  }
  .categoryContainer .campo::placeholder{
      font-size: 1rem;
      text-align: center;
  }

  .categoryContainer button{
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
  .categoryContainer button:hover{
    cursor: pointer;
    font-weight: bold;
  }

  .categoryContainer .idCategory{
    display:none;
  }

  .categoryContainer .div-register{
    display:none;
  }

  @media(max-width: 700px) and (min-width: 360px){
    .categoryContainer .title{
      padding-top: 22vh;
    }
    .categoryContainer button{
      width: 70vw;
    }
    `;

    document.body.appendChild(style);
})();

