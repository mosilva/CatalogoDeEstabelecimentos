window.hiddenFormRegister = function (buttonSelect, container, item) {
  const button = buttonSelect;
  const containerRegister = container;
  const propriedadesContainerRegister = containerRegister.style;
  containerRegister.style.display = "none";

  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (propriedadesContainerRegister["display"] == "none") {
      containerRegister.style.display = "block";
      button.textContent = "Esconder form";
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
  }
};


window.hiddenForFooter = async (event) => {
  event.preventDefault();
  document.querySelector(".homeContainer").classList.add("hide");
  document.querySelector(".establishmentContainer").classList.add("hide");
  document.querySelector(".categoryContainer").classList.remove("hide")

};

window.createLinkApiGoogle = function(){
  const newlink = document.createElement('link');
  newlink.setAttribute('rel', 'stylesheet');
  newlink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  document.head.appendChild(newlink);
}
