const buttonForm = await document.querySelector("#add-establishment");

buttonForm.addEventListener("click", function(event)
{
    event.preventDefault();    

    let newEstablishment = 
        {
            "Categoria": mainFormMain.Categoria.value,       
            "Nome": mainFormMain.Nome.value,
            "Endereco":  mainFormMain.Endereço.value,
            "Cep": mainFormMain.CEP.value,
            "Telefone": mainFormMain.Telefone.value,
            "Email":  mainFormMain.Email.value
        }    

    let errors = validateEstablishment(newEstablishment);

    if(errors.length > 0)
    {
        showErros(errors);
    }  
    else
    {          
        let ulError = document.querySelector("#error-message");
        ulError.innerHTML = "";

        CatalogEstablishment.push(newEstablishment);

        showEstablishments(newEstablishment);  

        mainFormMain.reset();
    }
    
});


function validateEstablishment(establishment){
    let allErrors = [];

    if(establishment.Categoria.length < 3)
    {
        allErrors.push("A Categoria deve ter no mínimo 3 letras!");
    }

    if(establishment.Nome.length < 3)
    {
        allErrors.push("O Nome deve ter no mínimo 3 letras!");

    }

    
    return allErrors;

}


function showErros(errors){

    let ulError = document.querySelector("#error-message");
    ulError.innerHTML = "";

    errors.forEach(element => {
        let liError = document.createElement("li");
        liError.textContent = element;
        ulError.appendChild(liError);
        
    });


};