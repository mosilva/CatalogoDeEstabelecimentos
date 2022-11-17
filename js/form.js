const mainFormMain = document.createElement("form");
mainFormMain.setAttribute("class","form-add");

function createInputs(){

    for(let i = 0; i < header.length; i++)
    {            
        element = header[i];
        const divForm = document.createElement("div");
        divForm.setAttribute("class","group-input");
        styleSpace(divForm);
        
        const labelForm = document.createElement("label");
        labelForm.setAttribute("for",element);
        labelForm.textContent = element + " : ";
        divForm.appendChild(labelForm);

        const inputForm = document.createElement("input");
        inputForm.setAttribute("id",element);
        inputForm.setAttribute("name",element);
        const article = element[element.length-1] =='a'? "a ": "o ";
        inputForm.setAttribute("placeholder","Digite aqui " + article + (element.toLowerCase()) + "...");
        inputForm.setAttribute("type","text");
        inputForm.setAttribute("class", "campo");     
        divForm.appendChild(inputForm);
            
        mainFormMain.appendChild(divForm);
    }
}

function generateForm()
{    
    const mainFormSection = document.createElement("section");
    mainFormSection.setAttribute("class","regristry-form");
    mainCatalogo.appendChild(mainFormSection);
    
    const mainFormH2 = document.createElement("h2");
    mainFormH2.setAttribute("id","title-form");
    mainFormH2.textContent ="Adicionar um novo estabelecimento";
    mainFormSection.appendChild(mainFormH2);    

    const mainFormUl = document.createElement("ul");
    mainFormUl.setAttribute("id","error-message");
    styleSpanError(mainFormUl);
    mainFormSection.appendChild(mainFormUl);

    mainFormSection.appendChild(mainFormMain);

    createInputs();

    const buttonForm = document.createElement("button");
    buttonForm.setAttribute("id","add-establishment");
    buttonForm.setAttribute("class","main-button");
    buttonForm.textContent = "Adicionar Estabelecimento";  
    mainFormMain.appendChild(buttonForm);
}

generateForm();
