
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
            label__form.textContent = element + " : ";
            div__form.appendChild(label__form);

            const input__form = document.createElement("input");
            input__form.setAttribute("id",element);
            input__form.setAttribute("name",element);
            let article = element[element.length-1] =='a'? "a ": "o ";
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

    showEstablishments(newEstablishment);  
    
});


