window.hiddenFormRegister = function (
  buttonSelect,
  buttonSecondary,
  buttonEdit,
  container,
  item
) {
  const button = buttonSelect;
  const containerRegister = container;
  const buttonEditUpdate = buttonEdit;
  const propriedadesContainerRegister = containerRegister.style;
  containerRegister.style.display = "none";
  buttonEditUpdate.style.display = "none";
  buttonSecondary.style.display = "block";

  button.addEventListener("click", function (event) {
    event.preventDefault();
    clearForm();
    titleRegistryForm();

    if (propriedadesContainerRegister["display"] == "none") {
      containerRegister.style.display = "block";
      buttonEditUpdate.style.display = "none";
      buttonSecondary.style.display = "block";
      button.textContent = "Voltar";
    } else {
      containerRegister.style.display = "none";
      button.textContent = item;
      document.getElementById("edit-image").disabled = false;
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

window.hiddenFormEdit = function (
  buttonPrincipal,
  buttonSecondary,
  buttonEdit,
  container
) {
  const containerEdit = container;
  const buttonEditUpdate = buttonEdit;
  const propriedadesContainerEdit = containerEdit.style;
  buttonSecondary.style.display = "none";
  buttonEditUpdate.style.display = "block";

  if (propriedadesContainerEdit["display"] == "none") {
    containerEdit.style.display = "block";
    buttonPrincipal.textContent = "Voltar";
  } else {
    containerEdit.style.display = "none";
    buttonPrincipal.textContent = "Cadastrar";
  }
};

window.hiddenForFooter = async (event) => {
  event.preventDefault();
  document.querySelector(".homeContainer").classList.add("hide");
  document.querySelector(".establishmentContainer").classList.add("hide");
  document.querySelector(".categoryContainer").classList.remove("hide");
};

window.clearForm = function () {
  const trs = document.querySelectorAll(".campo");
  for (let i = 0; i < trs.length; i++) {
    trs[i].value = "";
  }
};
