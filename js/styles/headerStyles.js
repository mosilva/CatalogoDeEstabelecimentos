(() => {
    const headerStyle = document.createElement("style");
    headerStyle.innerHTML += `
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
      }
      
      .containerHeader{
        background-color: #a4133c;
        width: 100%;
        height:20vh;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        position: fixed;
        z-index: 1;
        top: 0;
      }
      
      .logoHeader{
        height:20vh;
        margin-left: 5vw;
      }

      .navList{
        width: 20vw;
        color: white;
        font-size:25px;
        font-weight: 300;
        text-align:center;
        border: none;
      }

      .navList:hover{
        cursor: pointer;
        font-weight: bolder;
      }

      @media(max-width: 700px) and (min-width: 360px){
        .containerHeader{
            height:15vh;
        }
        .logoHeader{
            height:15vh;
            margin-left: 0;
          }
        .navList{
            width:40vw;
            font-size: 14px;
            font-weight: bolder;
        }
      }
    `;
    document.body.appendChild(headerStyle);
  })();
  