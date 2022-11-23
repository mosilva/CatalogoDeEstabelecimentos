(() => {
    const establishmentStyle = document.createElement("style");
    establishmentStyle.innerHTML += `
        .hide{
            display: none;
        }

        .establishmentContainer *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .establishmentContainer *{
            font-family: 'Source Sans Pro', sans-serif;
        }

        .establishmentContainer .title{   
            text-align: center;
            font-size: 30px;
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
            font-size: 18px;
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
            font-size: 18px;
            text-align: center;
        }

        .establishmentContainer .lupa{
            height: 7vh;
        }
        .establishmentContainer .lupa:hover{
            cursor: pointer;
        }

        .establishmentContainer table{
            width: 100%;
            padding-left: 2vw;
            line-height: 5vh;
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
            padding-top: 1vh;
            text-align: center;
            font-size: 18px;
        }

        .establishmentContainer .campo{
            width: 25vw;
            height: 5vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }
        .establishmentContainer .campo::placeholder{
            font-size: 15px;
            text-align: center;
        }

        .establishmentContainer .main-button{
            width: 17vw;
            height: 6vh;
            font-size: 18px;
            background-color: #C9184A;
            border: none;
            border-radius: 10px;
            color: #fff; 
            margin-top: 5vh;
            margin-right: 12vw;
        }
        .establishmentContainer .main-button:hover{
            cursor: pointer;
            font-weight: bolder;
        }

        @media(max-width: 700px) and (min-width: 360px){
            .establishmentContainer main{
                height: 195vh;
            }
            .establishmentContainer .title{
                padding-top: 22vh;
            }
            .establishmentContainer .boxRegister{
                height: 30vh;
                flex-direction: column;
            }
            .establishmentContainer .divRegister{
                width: 55vw;
            }
            .establishmentContainer .btnRegister{
                width: 50vw;
            }
            .establishmentContainer .main-button{
                width: 55vw;
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
                margin-top: -2vh;
                height: 50vh;
                display: flex;
                font-size: 20px;
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
                margin-top: 7vh;
            }
            .establishmentContainer .title-form{
                margin-bottom: 2vh;
                text-align: center;
            }
            // 
            .establishmentContainer .label-form{
                width: 60vw;
            }
            .establishmentContainer .campo{
                width: 40vw;
                margin-left: 20vw;
            }
            .establishmentContainer .main-button{
                width: 65vw;
                margin-right: 10vw;
            }
        }
    `;

    document.body.appendChild(establishmentStyle);
})();