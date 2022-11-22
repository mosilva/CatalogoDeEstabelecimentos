(() => { 
    const style = document.createElement('style');
    style.innerHTML = `
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    main{
      width: 100%;
      min-height: 100vh;
      margin-top: 25vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    form{
      margin-top: 5vh;
      display: flex; 
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    h1{
      margin-top: 3vh;
      margin-bottom: 5vh;
      text-align: center;
    }

    span{
      color: #A4133C;
      padding: 10px;
    }
    span:hover{
      cursor: pointer;
      background-color: #A4133C;
      color: #fff;
      border-radius: 100%;
    }

    table{
      width: 100%;
      padding-left: 2vw;
      line-height: 5vh;
      margin-right: 7vh; 
  }

  table td{
      text-align: center;
  }


  .campo{
      width: 25vw;
      height: 5vh;
      background-color: #D9D9D9;
      border-radius: 5px;
      border: none;
      margin: 10px;
  }
  .campo::placeholder{
      font-size: 15px;
      text-align: center;
  }

  button{
      width: 17vw;
      margin: 10px;
      padding: 1vh 2vh;
      font-size: 18px;
      text-align: center;
      background-color: #449C5C;
      border: none;
      border-radius: 10px;
      color: #fff; 
  }

  button:hover{
    cursor: pointer;
    font-weight: bold;
  }

  .idCategory{
    display:none;
  }

  @media(max-width: 700px) and (min-width: 360px){
            .title{
                padding-top: 22vh;
            }
            

        }

    `;

    document.body.appendChild(style);
})();

