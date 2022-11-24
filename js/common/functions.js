window.hiddenFormRegister = function (buttonSelect, buttonSecondary, container, item) {
  const button = buttonSelect;
  const containerRegister = container;
  const propriedadesContainerRegister = containerRegister.style;
  containerRegister.style.display = "none";

  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (propriedadesContainerRegister["display"] == "none") {
      containerRegister.style.display = "block";
      button.textContent = "Voltar";
      buttonSecondary.textContent = "Salvar Estabelecimento";
    } else {
      containerRegister.style.display = "none";
      button.textContent = item;
    }
  });
};

window.hiddenSection = (event) => {
  event.preventDefault();
  const className = event.path[0].parentNode.classList;
  const home = document.querySelector(".homeContainer");
  const establishment = document.querySelector(".establishmentContainer");
  const category = document.querySelector(".categoryContainer");
  if (className == "Home") {
    home.classList.remove("hide");
    establishment.classList.add("hide");
    category.classList.add("hide");
  } else if (className == "Estabelecimentos") {
    establishment.classList.remove("hide");
    home.classList.add("hide");
    category.classList.add("hide");
  } else if (className == "Categorias") {
    category.classList.remove("hide");
    establishment.classList.add("hide");
    home.classList.add("hide");
    //document.querySelector('')
  }
};

window.hiddenFormEdit = function (buttonPrincipal, buttonSecondary, container, ) {
  const containerEdit = container;
  const propriedadesContainerEdit = containerEdit.style;

  if (propriedadesContainerEdit["display"] == "none") {
      containerEdit.style.display = "block";
      buttonPrincipal.textContent = "Voltar";
      buttonSecondary.textContent = "Editar Estabelecimento";

    } else {
      containerEdit.style.display = "none";
      buttonPrincipal.style.display = "block"; 

    };
  
};


window.hiddenForFooter = async (event) => {
  event.preventDefault();
  document.querySelector(".homeContainer").classList.add("hide");
  document.querySelector(".establishmentContainer").classList.add("hide");
  document.querySelector(".categoryContainer").classList.remove("hide")

};