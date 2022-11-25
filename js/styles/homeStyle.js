(() => {
  const homeStyle = document.createElement("style");
  homeStyle.innerHTML += `
      .homeContainer{
        font-family: 'Source Sans Pro', sans-serif;
        height: 110vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -6vh;
      }

      .title{
        width: 100%;
        margin-bottom: 6vh;
        font-weight: bolder;
        text-align: center;
        font-size: 2rem;
      }

      .homeContainer .container{
        width: 98vw;
        height:80vh;
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
      }

      .homeContainer .carouselImg{
        position: absolute;
        width: 80%;
        height:80vh;
        border-radius: 10px;
      }
      
      @media(max-width: 700px) and (min-width: 360px){
        .homeContainer{
          height: 80vh;
        }
        .homeContainer .title{
          padding-top: 10vh;
          font-size: 1.7rem;
        }

        .homeContainer .carouselImg{
          margin-top: -7vh;
          width: 100vw;
          height: 45vh;
        }
      }
    `;
  document.body.appendChild(homeStyle);
})();
