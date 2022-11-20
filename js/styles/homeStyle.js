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
      
      
    `;
    document.body.appendChild(homeStyle);
  })();
  