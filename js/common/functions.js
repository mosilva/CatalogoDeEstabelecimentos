window.hiddenFormRegister = function(buttonSelect, container, item) {  

    const button = buttonSelect;
    const containerRegister = container;
    containerRegister.style.display = "none";

    button.addEventListener('click', function(event){
      event.preventDefault();

      if(containerRegister.style.display == 'none'){
        containerRegister.style.display = "block";
        button.textContent = "Esconder form";
    }
     else{
        containerRegister.style.display = "none";
        button.textContent = item;
      }           
    });  
}