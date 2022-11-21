(() => {
    const establishmentsStyle = document.createElement("script");
    establishmentsStyle.setAttribute("src", "js/styles/establishmentsStyle.js");
    document.body.appendChild(establishmentsStyle);
  })();

function generateEstablishmentsMain(){
    const main = document.createElement("main");
    const containerEstablishments = document.createElement("span");
    const divTitle = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "Estabelecimentos";

    function setAttributesEstablishments(){
        containerEstablishments.setAttribute("class", "containerEstablishment");
        title.setAttribute("class", "title");
    }

    document.body.appendChild(main);
    main.appendChild(containerEstablishments);
    containerEstablishments.appendChild(divTitle);
    divTitle.appendChild(title);
    setAttributesEstablishments();
}

generateEstablishmentsMain();

function registerAndSearch(){
    const divRegister = document.createElement("div");
    const boxRegister = document.createElement("span");

    function setAttributesRegister(){
        
    }

    setAttributesRegister();
}

registerAndSearch();

// let CatalogEstablishment = 
//     [
//         {
//             "Categoria": "Doce",
//             "Nome": "Cacau Show",
//             "Endereco": "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
//             "Cep": "05724-003",
//             "Telefone": "1158457187",
//             "Email": "dengoChocolateCacauShow@gmail.com"
//         },
//         {
//             "Categoria": "Fast Food",
//             "Nome": "Burguer King",
//             "Endereco": "Estrada do Campo Limpo, 459",
//             "Cep": "05777-001",
//             "Telefone": "1158401212",
//             "Email": "bkCampoLimpo@hotmail.com"
//         }
//         ,
//         {
//             "Categoria": "Doce",
//             "Nome": "Cacau Brasil",
//             "Endereco": "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
//             "Cep": "05724-003",
//             "Telefone": "115844058",
//             "Email": "cacau_brasil_gio@gmail.com"
//         }
//     ]

// const header = ["Categoria", "Nome", "Endereço", "CEP", "Telefone", "Email"];