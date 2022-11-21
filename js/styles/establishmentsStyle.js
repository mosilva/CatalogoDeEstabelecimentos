(() => {
    const establishmentStyle = document.createElement("style");
    establishmentStyle.innerHTML += `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Source Sans Pro', sans-serif;
        }

        main{
            background-color: #F5F5F5;
            margin-top: 20vh;
            width: 100%;
            height: 100vh;
        }

        .title{
            padding-top: 8vh;
            text-align: center;
            font-size: 30px;
        }
    `;

    document.body.appendChild(establishmentStyle);
})();