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
            width: 100%;
            height: 200vh;
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
            justify-content:center;
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

        table{
        }

        table td{
        }

        .regristry-form{
            width: 100%;
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 20vh;
        }

        .group-input{
            display: flex;
            justify-content: space-between;
            width: 35vw;
        }

        .label-form{
            width: 10vw;
            height: 5vh;
            padding-top: 1vh;
            text-align: center;
            font-size: 18px;
        }

        .campo{
            width: 25vw;
            height: 5vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }
        .campo::placeholder{
            font-size: 15px;
            text-align: center;
        }

        .main-button{
            width: 10vw;
            padding-bottom: 2vh;
            font-size: 18px;
            text-align: center;
            margin-top: 2vh;
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