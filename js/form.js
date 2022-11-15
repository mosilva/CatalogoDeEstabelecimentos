const main__formMain = document.createElement("form");
main__formMain.setAttribute("class","form-add");

function createInputs(){

    for(let i = 0; i < header.length; i++)
    {            
        element = header[i];
        const div__form = document.createElement("div");
        div__form.setAttribute("class","group-input");
        styleSpace(div__form);
        
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
}

function generateForm()
{    
    const main__formSection = document.createElement("section");
    main__formSection.setAttribute("class","regristry-form");
    main__Catalogo.appendChild(main__formSection);
    
    const main__formH2 = document.createElement("h2");
    main__formH2.setAttribute("id","title-form");
    main__formH2.textContent ="Adicionar um novo estabelecimento";
    main__formSection.appendChild(main__formH2);    

    const main__formSpan = document.createElement("span");
    main__formSpan.setAttribute("id","error-message");
    styleSpanError(main__formSpan);
    main__formSection.appendChild(main__formSpan);

    main__formSection.appendChild(main__formMain);

    createInputs();

    const button__form = document.createElement("button");
    button__form.setAttribute("id","add-establishment");
    button__form.setAttribute("class","main-button");
    button__form.textContent = "Acionar Estabelecimento";  
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

    if(!(validateEstablishment(newEstablishment)))
    {
        return;
    }  
    else
    {  
        CatalogEstablishment.push(newEstablishment);

        showEstablishments(newEstablishment);  

        main__formMain.reset();
    }
    
});


function validateEstablishment(establishment){
    let errorMessage = document.querySelector("#error-message");

    if(establishment.Categoria.length < 3){
        errorMessage.textContent = "A Categoria deve ter no mínimo 3 letras!";
        return false;
    }

    if(establishment.Nome.length < 3){
        errorMessage.textContent = "O Nome deve ter no mínimo 3 letras!";
        return false;
    }

    return true;
}
