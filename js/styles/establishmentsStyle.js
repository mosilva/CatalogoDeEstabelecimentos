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
            padding-top: 2vh;
            padding-left: 2vw;
            padding-bottom: 2vh;
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
            height: 60vh;
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

        .establishmentContainer .divSelect{
            width: 25vw;
            display: flex;
            text-align: center;
        }

        .establishmentContainer .select-list{
            width: 15vw;
            height: 5vh;
            background-color: #D9D9D9;
            border-radius: 5px;
            border: none;
        }

        .establishmentContainer .divText{
            width: 7vw;
            margin-left: 1vh;
        }

        .establishmentContainer .selectText{
            font-size: 0.8rem;
        }

        .establishmentContainer .selectLink{
            font-size: 0.8rem;
            text-decoration: none;
            color: #C9184A;
            font-weight: bolder;
        }
        .establishmentContainer .selectLink:hover{
            cursor: pointer;
            font-size: 1rem;
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
            margin-left: 56vw;
        }
        .establishmentContainer .main-button:hover{
            cursor: pointer;
            font-weight: bolder;
        }

        .establishmentContainer .imageIcon:hover{
            cursor: pointer;
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
                width: 80vw;
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
                height: 65vh;
                display: flex;
                font-size: 1.2rem;
                margin-top: 8vh;
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
                height: 105vh;
                margin-top: -6vh;
                display: flex;
                flex-direction: column;
                margin-bottom: 4vh;
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
                font-size: 1.2rem;
            }
            .establishmentContainer .divSelect{
                width: 70vw;
                display: flex;
                flex-direction: column;
                margin-left: 10vw;
                margin-bottom: 3vh;
            }
            .establishmentContainer .select-list{
                width: 70vw;
                font-size: 1.2rem;
            }
            .establishmentContainer .divText{
                width: 70vw;
            }
            .establishmentContainer .selectText{
                font-size: 1.2rem;
            }
            .establishmentContainer .selectLink{
                font-size: 1.4rem;
            }
            .establishmentContainer .selectLink:hover{
                font-size: 1.4rem;
            }
            .establishmentContainer .campo{
                width: 70vw;
                margin-left: 10vw;
                margin-bottom: 3vh;
            }
            .establishmentContainer .campo::placeholder{
                font-size: 1.2rem;
            }
            .establishmentContainer .imageIcon{
                height: 4vh;
                width: 6vw;
                margin-left: 30vw;
            }
        }
    `;

  document.body.appendChild(establishmentStyle);
})();
