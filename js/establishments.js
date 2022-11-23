const establishmentsStyle = document.createElement("script");
establishmentsStyle.setAttribute("src", "js/styles/establishmentsStyle.js");
document.body.appendChild(establishmentsStyle);

const mainCatalogo = document.createElement("section");
  mainCatalogo.classList.add('establishmentContainer');
  mainCatalogo.classList.add('hide');
  
    const main = document.querySelector("main");
    if(main){
        main.appendChild(mainCatalogo);
    }
    else{
        const main = document.createElement('main')
        document.body.appendChild(main);
        main.appendChild(mainCatalogo);
    }

const mainFormMain = document.createElement("form");
mainFormMain.setAttribute("class", "form-add");
mainFormMain.setAttribute("action", "");
mainFormMain.setAttribute("method", "POST");
let listCategoryReturn;

const headerEstablishments = [
  "Endereço",
  "Telefone",
  "Nome",
  "Categoria",
  "CEP",
  "Email",
  "Deletar",
  "Editar",
];

async function searchCategories(myParent) {
    listCategoryReturn = await listCategories();

    let categories = [];

    listCategoryReturn.forEach((item) => {
      categories.push(item.name);
    });

    const selectList = document.createElement("select");
    selectList.setAttribute("id","select-list")
    myParent.appendChild(selectList);

    for (var i = 0; i < categories.length; i++) {
      var option = document.createElement("option");
      option.value = categories[i];
      option.text = categories[i];
      selectList.appendChild(option);
    }

    return (selectList);
  }

function createInputs() {
  for (let i = 0; i < headerEstablishments.length; i++) {
    if (headerEstablishments[i] == "Categoria") {

        element = headerEstablishments[i];
        const divForm = document.createElement("div");
        divForm.setAttribute("class", "group-input");
        styleSpace(divForm);

        const labelForm = document.createElement("label");
        labelForm.setAttribute("class", "label-form");
        labelForm.setAttribute("for", element);
        labelForm.textContent = element + ": ";
        divForm.appendChild(labelForm);

        const inputForm = searchCategories(divForm)

        mainFormMain.appendChild(divForm);

    } else if (
      headerEstablishments[i] != "Deletar" &&
      headerEstablishments[i] != "Editar") 
    {
      element = headerEstablishments[i];
      const divForm = document.createElement("div");
      divForm.setAttribute("class", "group-input");
      styleSpace(divForm);

      const labelForm = document.createElement("label");
      labelForm.setAttribute("class", "label-form");
      labelForm.setAttribute("for", element);
      labelForm.textContent = element + ": ";
      divForm.appendChild(labelForm);

      const inputForm = document.createElement("input");
      inputForm.setAttribute("id", element);
      inputForm.setAttribute("name", element);
      inputForm.setAttribute(
        "placeholder",
        "Digite aqui o campo " + element.toLowerCase() + "..."
      );
      inputForm.setAttribute("type", "text");
      inputForm.setAttribute("class", "campo");
      divForm.appendChild(inputForm);
      mainFormMain.appendChild(divForm);
    }
  }
}

function generateForm() {
  const mainFormSection = document.createElement("section");
  mainFormSection.setAttribute("class", "registry-form");
  mainCatalogo.appendChild(mainFormSection);

  const mainFormH2 = document.createElement("h2");
  mainFormH2.setAttribute("id", "title-form");
  mainFormH2.setAttribute("class", "title-form");
  mainFormH2.textContent = "Cadastrar um novo estabelecimento";
  mainFormSection.appendChild(mainFormH2);

  const mainFormUl = document.createElement("ul");
  mainFormUl.setAttribute("id", "error-message");
  styleSpanError(mainFormUl);
  mainFormSection.appendChild(mainFormUl);

  mainFormSection.appendChild(mainFormMain);

  createInputs();
    
  const buttonForm = document.createElement("button");
  buttonForm.setAttribute("id", "add-establishment");
  buttonForm.setAttribute("class", "main-button");
  buttonForm.textContent = "Salvar estabelecimento";
  mainFormMain.appendChild(buttonForm);
}


(async () => {
  createLinkApiGoogle();

  const catalogEstablishment = await catalogEstablishments();

  const tableMainTbody = document.createElement("tbody");
  const tableMainCatalogo = document.createElement("table");

  function createLinkApiGoogle() {
    const linkGoogleApi = document.createElement("link");
    linkGoogleApi.setAttribute("rel", "stylesheet");
    linkGoogleApi.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    );
    document.head.appendChild(linkGoogleApi);
  }

  function generateEstablishmentsMain() {
    const containerEstablishments = document.createElement("span");
    containerEstablishments.setAttribute("class", "containerEstablishment");
    const divTitle = document.createElement("div");
    const title = document.createElement("h2");
    title.setAttribute("class", "title");
    title.textContent = "Estabelecimentos";
    const boxRegister = document.createElement("section");
    boxRegister.setAttribute("class", "boxRegister");
    const btnRegister = document.createElement("button");
    btnRegister.textContent = "Cadastrar";
    btnRegister.setAttribute("class", "btnRegister");
    btnRegister.setAttribute("id", "btn-register");
    const boxSearch = document.createElement("div");
    boxSearch.setAttribute("class", "boxSearch");
    const lupaImg = document.createElement("img");
    lupaImg.setAttribute("class", "lupa");
    lupaImg.setAttribute("src", "../img/iconeLupa.png");

    tableMainTbody.setAttribute("class", "establishment-table");

    mainCatalogo.appendChild(containerEstablishments);
    containerEstablishments.appendChild(divTitle);
    divTitle.appendChild(title);
    mainCatalogo.appendChild(boxRegister);
    boxRegister.appendChild(btnRegister);
    boxRegister.appendChild(boxSearch);

    tableMainTbody.setAttribute("class", "establishment-table");

    function generateTableShowsEstablishments() {
      const sectionCatalogo = document.createElement("section");
      sectionCatalogo.setAttribute("class", "section-main");
      mainCatalogo.appendChild(sectionCatalogo);

      const inputCatalogoSearch = document.createElement("input");
      inputCatalogoSearch.setAttribute("type", "text");
      inputCatalogoSearch.setAttribute("name", "filter");
      inputCatalogoSearch.setAttribute("id", "filter__table");
      inputCatalogoSearch.setAttribute("class", "inputSearch");
      inputCatalogoSearch.setAttribute(
        "placeholder",
        "Digite o nome da categoria do estabelecimento"
      );
      filterEstab(inputCatalogoSearch);
      boxSearch.appendChild(inputCatalogoSearch);
      boxSearch.appendChild(lupaImg);

      sectionCatalogo.appendChild(tableMainCatalogo);
      const tableMainThead = document.createElement("thead");
      tableMainCatalogo.appendChild(tableMainThead);

      const tableMainTheadTr = document.createElement("tr");
      tableMainTheadTr.setAttribute("class", "catalog-table");

      tableMainThead.appendChild(tableMainTheadTr);

      for (const element of headerEstablishments) {
        const tableMainTheadTh = document.createElement("th");
        const texti = document.createTextNode(element);
        tableMainTheadTh.appendChild(texti);
        tableMainTheadTr.appendChild(tableMainTheadTh);
        tableMainThead.appendChild(tableMainTheadTr);
      }

      (async () => {
        const listEstablishmentsConverted = await listEstablishments();

        showEstablishments(listEstablishmentsConverted);
        createIcon("delete");
        createIcon("draw");

        let tableEstablishments = await document.querySelector("table");

        tableEstablishments.addEventListener("dblclick", function (event) {
          deleteEstab(event.target.parentNode.parentNode);

          setTimeout(function () {
            event.target.parentNode.parentNode.remove();
          }, 500);
        });
      })();
    }

    generateForm();
    generateTableShowsEstablishments();
  }

  generateEstablishmentsMain();

  const buttonForm = document.querySelector("#add-establishment");

  buttonForm.addEventListener("click", async function (event) {
    
      event.preventDefault()

      select = document.getElementById("select-list");
  
      let codeCategory;
  
      listCategoryReturn.forEach((item) => {
          if(item.name = select.options[select.selectedIndex].value)
          {
              codeCategory = item.uid;
          }
        });
     
      const newEstablishment = {
          "address": document.getElementById("Endereço").value,
          "phone": document.getElementById("Telefone").value,
          "name": document.getElementById("Nome").value,
          "category": codeCategory,
          "postal_code": document.getElementById("CEP").value,
          "email": document.getElementById("Email").value
      }
  
      await createEstablishment(newEstablishment);

      //   document.location.reload(true);
  });
  


  function showEstablishments(Establishments) {
    for (let index = 0; index < Establishments.length; index++) {
      const tableMainTbodyTr = document.createElement("tr");
      tableMainTbodyTr.setAttribute("class", "book");
      tableMainTbodyTr.setAttribute("class", "body-information");

      Object.entries(Establishments[index]).forEach((entry) => {
        const [key, value] = entry;

        if (key != "category") {
          const tableMainTbodyTd = document.createElement("td");
          tableMainTbodyTd.textContent = value;
          tableMainTbodyTd.setAttribute("class", `info-${key}`);
          if (key == "uid") {
            tableMainTbodyTd.style.display = "none";
          }
          tableMainTbodyTr.appendChild(tableMainTbodyTd);
        } else if (key == "category") {
          const tableMainTbodyTd = document.createElement("td");
          tableMainTbodyTd.textContent = value.name;
          tableMainTbodyTd.setAttribute("class", `info-${key}`);
          tableMainTbodyTr.appendChild(tableMainTbodyTd);
        }

        tableMainTbody.appendChild(tableMainTbodyTr);
        tableMainCatalogo.appendChild(tableMainTbody);
      });
    }
  }

  hiddenFormRegister(
    document.querySelector("#btn-register"),
    document.querySelector(".registry-form"),
    "Cadastrar"
  );

  async function deleteEstablishmentEvent(event) {
    const itemDelete = this.parentNode.parentNode.querySelectorAll("td");
    await deleteEstablishment(itemDelete[0].textContent);
    document.location.reload(true);
  }

  async function editEstablishmentEvent(event) {
    const itemUpdate = this.parentNode.parentNode.querySelectorAll("td");
    await editEstablishment();
    document.location.reload(true);
  }

  async function createIcon(icon) {
    const allTr = document.querySelectorAll(".body-information");

    allTr.forEach((tr) => {
      const iconElement = document.createElement("td");
      const iconGoogle = document.createElement("span");
      iconGoogle.textContent = icon;
      iconGoogle.setAttribute("class", "material-symbols-outlined");
      iconElement.appendChild(iconGoogle);
      tr.appendChild(iconElement);

      if (icon == "delete") {
        iconGoogle.addEventListener("dblclick", deleteEstablishmentEvent);
      } else {
        iconGoogle.addEventListener("dblclick", editEstablishmentEvent)
        };
      }
    )


    async function CreateEstablishmentEvent(event) {

        select = document.getElementById("select-list");

        let codeCategory;

        listCategoryReturn.forEach((item) => {
            if(item.name = select.options[select.selectedIndex].value)
            {
                codeCategory = item.uid;
            }
          });
      

        select.options[select.selectedIndex].value

        const newEstablishment = {
            "address": document.getElementById("Endereço").value,
            "phone": document.getElementById("Telefone").value,
            "name": document.getElementById("Nome").value,
            "category": codeCategory,
            "postal_code": document.getElementById("CEP").value,
            "email": document.getElementById("Email").value
        }

        await createEstablishment(newEstablishment);
        document.location.reload(true);
    }


    function clearTable() {
      const trs = tableMainTbody.querySelectorAll("tr");
      for (i = 0; i < trs.length; i++) {
        trs[i].remove();
      }
    }


    function validateEstablishment(establishment) {
      let allErrors = [];

      if (establishment.Categoria.length < 3) {
        allErrors.push("A Categoria deve ter no mínimo 3 letras!");
      }

      if (establishment.Nome.length < 3) {
        allErrors.push("O Nome deve ter no mínimo 3 letras!");
      }

      return allErrors;
    }

    function showErros(errors) {
      let ulError = document.querySelector("#error-message");
      ulError.innerHTML = "";

      errors.forEach((element) => {
        let liError = document.createElement("li");
        liError.textContent = element;
        ulError.appendChild(liError);
      });
    }

    const filterField = document.querySelector("#filter__table");

    filterField.addEventListener("input", function () {
      let establishments = document.querySelectorAll(".body__information");

      if (this.value.length > 0) {
        for (const element of establishments) {
          const tdCategory = element.querySelector(".info-Categoria");
          const category = tdCategory.textContent;
          let expressionRegular = new RegExp(this.value, "i");

          if (!expressionRegular.test(category)) {
            invisibleEstab(element);
          } else {
            visibleEstab(element);
          }
        }
      } else {
        for (const element of establishments) {
          visibleEstab(element);
        }
      }
    });
  }
})();
