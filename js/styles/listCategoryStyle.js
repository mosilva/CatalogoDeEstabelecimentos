(() => { 
    const style = document.createElement('style');
    style.innerHTML = `
    .categoryContainer .hide{
      display: none
    }

    .categoryContainer main{
      width: 100%;
      min-height: 100vh;
      margin-top: 25vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .categoryContainer form{
      margin-top: 5vh;
      display: flex; 
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .categoryContainer h1{
      margin-top: 3vh;
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
      font-size: 15px;
      text-align: center;
  }

  .categoryContainer button{
      width: 17vw;
      margin: 10px;
      padding: 1vh 2vh;
      font-size: 18px;
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
            

        }

    `;

    document.body.appendChild(style);
})();

