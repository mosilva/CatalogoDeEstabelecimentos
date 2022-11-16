
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

    let errors = validateEstablishment(newEstablishment);

    if(errors.length > 0)
    {
        showErros(errors);
    }  
    else
    {          
        let ul__error = document.querySelector("#error-message");
        ul__error.innerHTML = "";

        CatalogEstablishment.push(newEstablishment);

        showEstablishments(newEstablishment);  

        main__formMain.reset();
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

    let ul__error = document.querySelector("#error-message");
    ul__error.innerHTML = "";

    errors.forEach(element => {
        let li__error = document.createElement("li");
        li__error.textContent = element;
        ul__error.appendChild(li__error);
        
    });


}