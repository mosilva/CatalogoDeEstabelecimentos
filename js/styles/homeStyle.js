(() => {
    const homeStyle = document.createElement("style");
    homeStyle.innerHTML += `
      .establishmentContainer section{
        height: 150vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      establishmentContainer .title{
        margin-bottom: 6vh;
        font-weight: 300;
      }

      establishmentContainer .container{
        width: 80%;
        height:80vh;
        position: relative;
        display:flex;
        justify-content: center;
      }

      establishmentContainer .carouselImg{
        position: absolute;
        width: 80%;
        height:80vh;
      }
      
      @media(max-width: 700px) and (min-width: 360px){
        establishmentContainer .title{
          text-align: center;
        }

        establishmentContainer .carouselImg{
          width: 100vw;
          height: 50vh;
        }
      }
    `;
    document.body.appendChild(homeStyle);
  })();
  