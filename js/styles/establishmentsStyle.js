(() => {
    const establishmentStyle = document.createElement("style");
    establishmentStyle.innerHTML += `
        .hide{
            display: none;
        }

        .establishmentContainer *{
            font-family: 'Source Sans Pro', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .establishmentContainer .title{   
            text-align: center;
            font-size: 2rem;
        }

        .establishmentContainer .boxRegister{
            width: 100%;
            height: 25vh;
            display: flex;
            flex-direction: column;
            justify-content:space-around;
            align-items: center;
            margin-top: 5vh;
            margin-bottom: 10vh;
        }

        .establishmentContainer .btnRegister{
            width: 12vw;
            height: 6vh;
            font-size: 1.2rem;
            background-color: #C9184A;
            border: none;
            border-radius: 10px;
            color: #fff; 
        }
        .establishmentContainer .btnRegister:hover{
            cursor: pointer;
            font-weight: bolder;
        }

        .establishmentContainer .boxSearch{
            width: 35vw;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .establishmentContainer .inputSearch{
            width: 30vw;
            height: 7vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }
        .establishmentContainer .inputSearch::placeholder{
            font-size: 1.2rem;
            text-align: center;
        }

        .establishmentContainer .lupa{
            height: 7vh;
        }
        .establishmentContainer .lupa:hover{
            cursor: pointer;
        }

        .establishmentContainer table{
            width: 98vw;
            padding-left: 2vw;
            line-height: 5vh;
            margin-bottom: 5vh;
            border: solid 10px #D9D9D9;
            border-radius: 10px;
        }

        .establishmentContainer table td{
            text-align: center;
        }

        .establishmentContainer .registry-form{
            width: 100%;
            height:55vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: -5vh;
        }

        .title-form{
            text-align: center;
        }

        .form-add{
            width: 100%;
            height: 40vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
        }

        .establishmentContainer .group-input{
            display: flex;
            justify-content: space-between;
            width: 35vw;
        }

        .establishmentContainer .label-form{
            width: 10vw;
            height: 5vh;
            padding-top: 0.5vh;
            text-align: center;
            font-size: 1.2rem;
        }

        .establishmentContainer .campo{
            width: 25vw;
            height: 5vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }
        .establishmentContainer .campo::placeholder{
            font-size: 1rem;
            text-align: center;
        }

        .establishmentContainer .select-list{
            width: 25vw;
            height: 5vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }

        .establishmentContainer .main-button{
            width: 22vw;
            height: 6vh;
            font-size: 1.2rem;
            background-color: #C9184A;
            border: none;
            border-radius: 10px;
            color: #fff; 
            margin-top: 5vh;
            margin-left: 12vw;
        }
        .establishmentContainer .main-button:hover{
            cursor: pointer;
            font-weight: bolder;
        }

        @media(max-width: 700px) and (min-width: 360px){
            .establishmentContainer .title{
                padding-top: 2vh;
            }
            .establishmentContainer .boxRegister{
                height: 30vh;
                flex-direction: column;
            }
            .establishmentContainer .divRegister{
                width: 55vw;
            }
            .establishmentContainer .btnRegister{
                width: 60vw;
            }
            .establishmentContainer .main-button{
                width: 60vw;
            }
            .establishmentContainer .boxSearch{
                width: 95vw;
            }
            .establishmentContainer .inputSearch{
                width: 70vw;
            }
            .establishmentContainer .lupa{
                height: 5vh;
            }
            .establishmentContainer table{
                margin-top: 8vh;
                height: 65vh;
                display: flex;
                font-size: 1.2rem;
            }
            .establishment-table{
                display: flex;
            }
            .establishmentContainer thead{
                width: 42vw;
            }
            .establishmentContainer table th{
                height: 8vh;
            }
            .establishmentContainer .catalog-table{
                display: flex;
                flex-direction: column;
            }
            .establishmentContainer table td{
                display: flex;
                flex-direction: column;
                height: 8vh;
            }
            .establishmentContainer .registry-form{
                width: 97vw;
                height: 92vh;
                margin-top: -8vh;
                display: flex;
                flex-direction: column;
            }
            .establishmentContainer .title-form{
                width: 52vh;
                margin-bottom: 2vh;
                text-align: center;
                font-size: 1.7rem;
            }
            .establishmentContainer .group-input{
                width: 97vw;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                margin-right: 15vw;
            }
            .establishmentContainer .label-form{
                padding-top: 0.9vh;
                font-size: 1.4rem;
            }
            .establishmentContainer .select-list{
                width: 70vw;
                margin-left: 20vw;
                font-size: 1.4rem;
            }
            .establishmentContainer .campo{
                width: 70vw;
                margin-left: 20vw;
            }
            .establishmentContainer .campo::placeholder{
                font-size: 1.4rem;
            }
            .establishmentContainer .main-button{
                width: 65vw;
                margin-right: 10vw;
            }
        }
    `;

    document.body.appendChild(establishmentStyle);
})();