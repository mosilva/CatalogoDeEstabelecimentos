(() => {
    const establishmentsStyle = document.createElement("script");
    establishmentsStyle.setAttribute("src", "js/styles/establishmentsStyle.js");
    document.body.appendChild(establishmentsStyle);
  })();

const tableMainTbody = document.createElement("tbody");
tableMainTbody.setAttribute("class","establishment-table");
const tableMainCatalogo = document.createElement("table");

function generateEstablishmentsMain(){
    const main = document.createElement("main");
    const containerEstablishments = document.createElement("span");
    const divTitle = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "Estabelecimentos";
    const boxRegister = document.createElement("section");
    const divRegister = document.createElement("div");
    const firstP = document.createElement("p");
    firstP.textContent = "Cadastrar";
    const boxSearch = document.createElement("div");
    const lupaImg = document.createElement("img");

    function setAttributesRegister(){
        boxRegister.setAttribute("class", "boxRegister");
        divRegister.setAttribute("class", "divRegister");
        tableMainTbody.setAttribute("class","establishment-table");
        containerEstablishments.setAttribute("class", "containerEstablishment");
        title.setAttribute("class", "title");
        firstP.setAttribute("class", "firstP");
        boxSearch.setAttribute("class", "boxSearch");
        lupaImg.setAttribute("class", "lupa");
        lupaImg.setAttribute("src", "../img/iconeLupa.png");
    }

    document.body.appendChild(main);
    main.appendChild(containerEstablishments);
    containerEstablishments.appendChild(divTitle);
    divTitle.appendChild(title);
    main.appendChild(boxRegister);
    boxRegister.appendChild(divRegister);
    boxRegister.appendChild(boxSearch);
    divRegister.appendChild(firstP);

    setAttributesRegister();

    function generateTableShowsEstablishments(){

        const sectionCatalogo = document.createElement("section");
        sectionCatalogo.setAttribute("class","section-main");
        main.appendChild(sectionCatalogo);
    
        const inputCatalogoSearch = document.createElement("input");
        inputCatalogoSearch.setAttribute("type","text");
        inputCatalogoSearch.setAttribute("name","filter");
        inputCatalogoSearch.setAttribute("id","filter__table");
        inputCatalogoSearch.setAttribute("class", "inputSearch")
        inputCatalogoSearch.setAttribute("placeholder","Digite o nome do estabelecimento");
        filterEstab(inputCatalogoSearch);
        boxSearch.appendChild(inputCatalogoSearch); 
        boxSearch.appendChild(lupaImg);    
        
        sectionCatalogo.appendChild(tableMainCatalogo);
        const tableMainThead = document.createElement("thead");
        tableMainCatalogo.appendChild(tableMainThead);
    
        const tableMainTheadTr = document.createElement("tr");
        tableMainTheadTr.setAttribute("class","catalog-table");
        tableMainThead.appendChild(tableMainTheadTr);
    
        for (const element of header) 
        {
            const tableMainTheadTh = document.createElement("th");
            const texti = document.createTextNode(element);
            tableMainTheadTh.appendChild(texti);
            tableMainTheadTr.appendChild(tableMainTheadTh);
            tableMainThead.appendChild(tableMainTheadTr);
        }
    
        for (const element of CatalogEstablishment) 
        {
            showEstablishments(element);
        }
    }   
    
    generateTableShowsEstablishments();
}

generateEstablishmentsMain();

function showEstablishments(establishment){
    
        const tableMainTbodyTr = document.createElement("tr");
        tableMainTbodyTr.setAttribute("class","establishment");
        tableMainTbodyTr.setAttribute("class", "body__information");

        for (let k = 0; k < header.length; k++) {
          const tableMainTbodyTd = document.createElement("td");
          tableMainTbodyTd.textContent = Object.values(establishment)[k];
          tableMainTbodyTd.setAttribute("class","info-"+ Object.keys(establishment)[k]);
          tableMainTbodyTr.appendChild(tableMainTbodyTd);

          tableMainTbody.appendChild(tableMainTbodyTr);
          tableMainCatalogo.appendChild(tableMainTbody);

        }
}


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