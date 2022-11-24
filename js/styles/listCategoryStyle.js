(() => { 
    const style = document.createElement('style');
    style.innerHTML = `
    .categoryContainer .hide{
      display: none;
    }

    .categoryContainer main{
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .categoryContainer form{
      width: 80vw;
      height: 10vh;
      margin-top: 5vh;
      display: flex; 
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .categoryContainer h1{
      font-family: 'Source Sans Pro', sans-serif;
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
      width: 80vw;
      height: 20vh;
      border: solid 10px #D9D9D9;
      border-radius: 10px;
      margin-top: 15vh;
      margin-bottom: 5vh;
      padding top: 2vh;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 1.2rem;
  }

  .categoryContainer table td{
      text-align: center;
      font-family: 'Source Sans Pro', sans-serif;
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

