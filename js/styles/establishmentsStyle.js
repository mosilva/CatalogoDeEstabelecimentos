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
            width: 100%;
            height: 100vh;
        }

        .title{
            padding-top: 27vh;
            text-align: center;
            font-size: 30px;
        }

        .boxRegister{
            width: 100%;
            height: 25vh;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .divRegister{
            width: 15vw;
            height: 7vh;
            background-color: #D9D9D9;
            border-radius: 20px;
        }

        .main-button{
            width: 15vw;
            text-align: center;
            font-size: 20px;
            padding-top: 1.5vh;
        }
        .main-button:hover{
            cursor: pointer;
            font-weight: bolder;
        }

        .boxSearch{
            width: 35vw;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .inputSearch{
            width: 30vw;
            height: 7vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }
        .inputSearch::placeholder{
            font-size: 18px;
            text-align: center;
        }

        .lupa{
            height: 7vh;
        }
        .lupa:hover{
            cursor: pointer;
        }

        @media(max-width: 700px) and (min-width: 360px){
            .title{
                padding-top: 22vh;
            }
            .boxRegister{
                height: 30vh;
                flex-direction: column;
            }
            .divRegister{
                width: 55vw;
            }
            .main-button{
                width: 55vw;
            }
            .boxSearch{
                width: 95vw;
            }
            .inputSearch{
                width: 85vw;
            }
            .lupa{
                height: 5vh;
            }

        }
    `;

    document.body.appendChild(establishmentStyle);
})();