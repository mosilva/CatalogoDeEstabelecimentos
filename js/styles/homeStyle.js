(() => {
    const homeStyle = document.createElement("style");
    homeStyle.innerHTML += `
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
      }

      main{
        background-color: #F5F5F5;
        height: 150vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title{
        margin-bottom: 6vh;
        font-weight: 300;
      }

      .container{
        width: 80%;
        height:80vh;
        position: relative;
        display:flex;
        justify-content: center;
      }

      .carouselImg{
        position: absolute;
        width: 80%;
        height:80vh;
      }
      
      @media(max-width: 700px) and (min-width: 360px){
        .title{
          text-align: center;
        }

        .carouselImg{
          width: 100vw;
          height: 50vh;
        }
      }
    `;
    document.body.appendChild(homeStyle);
  })();
  