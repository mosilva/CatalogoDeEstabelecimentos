console.log(document);

let CatalogEstablishment = 
    [
        {
            "Categoria": "Doce",
            "Nome": "Cacau Show",
            "Endereco": "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
            "Cep": "05724-003",
            "Telefone": "1158457187",
            "Email": "dengoChocolateCacauShow@gmail.com"
        },
        {
            "Categoria": "Fast Food",
            "Nome": "Burguer King",
            "Endereco": "Estrada do Campo Limpo, 459",
            "Cep": "05777-001",
            "Telefone": "1158401212",
            "Email": "bkCampoLimpo@hotmail.com"
        }
    ]

const header = ["Categoria", "Nome", "Endereço", "CEP", "Telefone", "Email"];
const main__Catalogo = document.createElement("main");
const main__formMain = document.createElement("form");
main__formMain.setAttribute("class","form-add");


function generateHeader()
    {
        const header__Catalogo = document.createElement("header");
        const header__logo = document.createElement("div");
        header__logo.setAttribute("class", "main-logo");
        document.body.appendChild(header__Catalogo);
        header__Catalogo.appendChild(header__logo);

    }

function generateMain(){

    const section__Catalogo = document.createElement("section");
    section__Catalogo.setAttribute("class","section-main");
    document.body.appendChild(main__Catalogo);
    main__Catalogo.appendChild(section__Catalogo);

    const h2__Catalogo = document.createElement("h2");
    h2__Catalogo.textContent = "Catálogo de Estabelecimentos";
    section__Catalogo.appendChild(h2__Catalogo);

    const table__main__catalogo = document.createElement("table");
    section__Catalogo.appendChild(table__main__catalogo);
    const table__main__thead = document.createElement("thead");
    table__main__catalogo.appendChild(table__main__thead);

    const table__main__theadTr = document.createElement("tr");
    table__main__theadTr.setAttribute("class","catalog-table");
    table__main__thead.appendChild(table__main__theadTr);

    const table__main__tbody = document.createElement("tbody");
    table__main__tbody.setAttribute("class","establishment-table");

    for (const element of header) {
        const table__main__theadTh = document.createElement("th");
        const texti = document.createTextNode(element);
        table__main__theadTh.appendChild(texti);
        table__main__theadTr.appendChild(table__main__theadTh);
        table__main__thead.appendChild(table__main__theadTr);
    }

    for (const element of CatalogEstablishment) {
        let establishment = element;
        const table__main__tbodyTr = document.createElement("tr");
        table__main__tbodyTr.setAttribute("class","establishment");
        table__main__tbodyTr.setAttribute("class", "body__information");

        for (let k = 0; k < header.length; k++) {
          const table__main__tbodyTd = document.createElement("td");
          table__main__tbodyTd.textContent = Object.values(establishment)[k];
          table__main__tbodyTd.setAttribute("class","info-"+ Object.keys(establishment)[k]);
          table__main__tbodyTr.appendChild(table__main__tbodyTd);

          table__main__tbody.appendChild(table__main__tbodyTr);
          table__main__catalogo.appendChild(table__main__tbody);

        }
    }   
};

function generateForm()
    {    
        const main__formSection = document.createElement("section");
        main__formSection.setAttribute("class","regristry-form");
        main__Catalogo.appendChild(main__formSection);
        
        const main__formH2 = document.createElement("h2");
        main__formH2.setAttribute("id","title-form");
        main__formH2.textContent ="Add Establishment";
        main__formSection.appendChild(main__formH2);
        
        main__formSection.appendChild(main__formMain);

        for(let i = 0; i < header.length; i++)
            {            
                element = header[i];
                const div__form = document.createElement("div");
                div__form.setAttribute("class","group-input");
                
                const label__form = document.createElement("label");
                label__form.setAttribute("for",element);
                label__form.textContent = element + " : "
                div__form.appendChild(label__form);

                const input__form = document.createElement("input");
                input__form.setAttribute("id",element);
                input__form.setAttribute("name",element);
                article = element[element.length-1] =='a'? "a ": "o "
                input__form.setAttribute("placeholder","Digite aqui " + article + (element.toLowerCase()) + "...");
                input__form.setAttribute("type","text");
                input__form.setAttribute("class", "campo");     
                div__form.appendChild(input__form);
                    
                main__formMain.appendChild(div__form);
            }

        const button__form = document.createElement("button");
        button__form.setAttribute("id","add-establishment");
        button__form.setAttribute("class","main-button");
        button__form.textContent = "Add establishment";  
        main__formMain.appendChild(button__form);
    }




    generateHeader();
    generateMain();
    generateForm();



const button__form = document.querySelector("#add-establishment");

button__form.addEventListener("click", function(event)
{
    event.preventDefault();    

    let newEstablishment = 
        {
            "Categoria": main__formMain.Categoria.value,       
            "Nome": main__formMain.Nome.value,
            "Endereco":  main__formMain.Endereço.value,
            "Cep": main__formMain.CEP.value,
            "Telefone": main__formMain.Telefone.value,
            "Email":  main__formMain.Email.value
        }    

    CatalogEstablishment.push(newEstablishment);

    let categoria = main__formMain.Categoria.value;     
    let nome = main__formMain.Nome.value;
    let endereco = main__formMain.Endereço.value;
    let cep = main__formMain.CEP.value;
    let telefone = main__formMain.Telefone.value;
    let email =  main__formMain.Email.value;

    let establishmentTr = document.createElement("tr");
    
    let categoriaTd = document.createElement("td");  
    let nomeTd = document.createElement("td");  
    let enderecoTd = document.createElement("td");  
    let cepTd = document.createElement("td");  
    let telefoneTd = document.createElement("td");  
    let emailTd = document.createElement("td");  

    categoriaTd.textContent = categoria;  
    nomeTd.textContent = nome;  
    enderecoTd.textContent = endereco;  
    cepTd.textContent = cep;  
    telefoneTd.textContent = telefone;  
    emailTd.textContent = email;  
    
    establishmentTr.appendChild(categoriaTd);
    establishmentTr.appendChild(nomeTd);
    establishmentTr.appendChild(enderecoTd);
    establishmentTr.appendChild(cepTd);
    establishmentTr.appendChild(telefoneTd);
    establishmentTr.appendChild(emailTd);


    let tbody = document.querySelector(".establishment-table");
    tbody.appendChild(establishmentTr);    
});

// function styleTable(tag) {
//     Object.assign(tag.style, {
//       "font-size": "15px",
//       textAlign: "center",
//       margin: "1vw",
//       padding: "1vw",
//       "border-collapse": "collapse",
//       border: "1px black solid",
//     });
//   }
