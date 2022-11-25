window.establishment = async (status = "hide") => {
  const establishmentsStyle = document.createElement("script");
  establishmentsStyle.setAttribute("src", "js/styles/establishmentsStyle.js");
  document.body.appendChild(establishmentsStyle);
  
  const mainCatalogo = document.createElement("section");
  mainCatalogo.classList.add("establishmentContainer");
  status === "hide"
    ? mainCatalogo.classList.add(status)
    : mainCatalogo.classList.remove("hide");

  const main = document.querySelector("main");
  if (main) {
    main.appendChild(mainCatalogo);
  } else {
    const main = document.createElement("main");
    document.body.appendChild(main);
    main.appendChild(mainCatalogo);
  }

  const mainFormMain = document.createElement("form");
  mainFormMain.setAttribute("class", "form-add");
  mainFormMain.setAttribute("action", "");
  mainFormMain.setAttribute("method", "POST");
  let listCategoryReturn;
  let uidEdit = null;

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
    const requestCategory = await listCategories();
    listCategoryReturn =
      requestCategory.length != 0
        ? requestCategory
        : JSON.parse(localStorage.categories);

    let categories = [];

    listCategoryReturn.forEach((item) => {
      categories.push(item.name);
    });

    const divSelect = document.createElement("div");
    divSelect.setAttribute("class", "divSelect");
    const selectList = document.createElement("select");
    selectList.setAttribute("id", "select-list");
    selectList.setAttribute("class", "select-list");
    const divText = document.createElement("div");
    divText.setAttribute("class", "divText");
    const selectText = document.createElement("p");
    selectText.setAttribute("class", "selectText");
    selectText.textContent = "Não encontrou a categoria?";
    const selectSpan = document.createElement("span");
    selectSpan.setAttribute("class", "Categorias");
    const selectLink = document.createElement("a");
    selectLink.setAttribute("class", "selectLink");
    selectLink.addEventListener("click", hiddenSection);
    selectLink.textContent = "Crie aqui!";
    myParent.appendChild(divSelect);
    divSelect.appendChild(selectList);
    divSelect.appendChild(divText);
    divText.appendChild(selectText);
    divText.appendChild(selectSpan);
    selectSpan.appendChild(selectLink);

    for (var i = 0; i < categories.length; i++) {
      var option = document.createElement("option");
      option.value = categories[i];
      option.text = categories[i];
      selectList.appendChild(option);
    }

    return selectList;
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

        const inputForm = searchCategories(divForm);

        mainFormMain.appendChild(divForm);
      } else if (
        headerEstablishments[i] != "Deletar" &&
        headerEstablishments[i] != "Editar"
      ) {
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
          "Digite aqui o " + element.toLowerCase() + "..."
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

    const buttonFormEdit = document.createElement("button");
    buttonFormEdit.setAttribute("id", "edit-establishment");
    buttonFormEdit.setAttribute("class", "main-button");
    buttonFormEdit.textContent = "Editar estabelecimento";
    buttonForm.style.display = "none";
    mainFormMain.appendChild(buttonFormEdit);
  }

  (async () => {
    const catalogEstablishment = await catalogEstablishments();

    const tableMainTbody = document.createElement("tbody");
    const tableMainCatalogo = document.createElement("table");
    tableMainCatalogo.setAttribute("id","table-main")

    function generateEstablishmentsMain() {
      const containerEstablishments = document.createElement("span");
      containerEstablishments.setAttribute("class", "containerEstablishment");
      const divTitle = document.createElement("div");
      const title = document.createElement("h2");
      title.setAttribute("class", "title");
      title.textContent = "Estabelecimentos";
      const boxRegister = document.createElement("section");
      boxRegister.setAttribute("class", "boxRegister");
      window.btnRegister = document.createElement("button");
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
        inputCatalogoSearch.setAttribute("id", "filter-table");
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
          const requestEstablishments = await listEstablishments();
          const listEstablishmentsConverted =
            requestEstablishments.length != 0
              ? requestEstablishments
              : JSON.parse(localStorage.establishments);

          showEstablishments(listEstablishmentsConverted);
          createIcon("delete");
          createIcon("draw");
        })();
      }

      generateForm();
      generateTableShowsEstablishments();
    }

    generateEstablishmentsMain();

    const buttonForm = document.querySelector("#add-establishment");

    buttonForm.addEventListener("click", async function (event) {
      event.preventDefault();

      let select = document.getElementById("select-list");

      const selectedValue = [].filter
        .call(select.options, (option) => option.selected)
        .map((option) => option.text);

      let codeCategory;

      listCategoryReturn.forEach((item) => {
        if (item.name == selectedValue) {
          codeCategory = item.uid;
        }
      });

      const newEstablishment = {
        address: document.getElementById("Endereço").value,
        phone: document.getElementById("Telefone").value,
        name: document.getElementById("Nome").value,
        category: codeCategory,
        postal_code: document.getElementById("CEP").value,
        email: document.getElementById("Email").value,
      };

      await createEstablishment(newEstablishment);
      alert("Estabelecimento cadastrado com sucesso!");
      establishmentRenderAux();
    });

    const buttonEdit = document.querySelector("#edit-establishment");

    buttonEdit.addEventListener("click", async function (event) {
      event.preventDefault();

      let select = document.getElementById("select-list");

      const selectedValue = [].filter
        .call(select.options, (option) => option.selected)
        .map((option) => option.text);

      let codeCategory;

      listCategoryReturn.forEach((item) => {
        if (item.name == selectedValue) {
          codeCategory = item.uid;
        }
      });

      const editEstablishment = {
        uid: uidEdit,
        address: document.getElementById("Endereço").value,
        phone: document.getElementById("Telefone").value,
        name: document.getElementById("Nome").value,
        category: codeCategory,
        postal_code: document.getElementById("CEP").value,
        email: document.getElementById("Email").value,
      };

      await editEstablishmentAll(editEstablishment);

      alert("Estabelecimento editado com sucesso!");
      establishmentRenderAux();
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
      document.querySelector("#add-establishment"),
      document.querySelector("#edit-establishment"),
      document.querySelector(".registry-form"),
      "Cadastrar"
    );

    async function deleteEstablishmentEvent(event) {
      if (btnRegister.innerHTML == "Voltar") {
        alert(
          "Não é possível deletar durante a edição ou cadastro de um estabelecimento. \n Pressione o botão voltar e tente novamente"
        );
      } else {
        const itemDelete = this.parentNode.parentNode.querySelectorAll("td");
        deleteEstab(event.target.parentNode.parentNode);

        setTimeout(function () {
          event.target.parentNode.parentNode.remove();
        }, 500);

        await deleteEstablishment(itemDelete[0].textContent);
        alert("Estabelecimento deletado com sucesso");

      }  
    }

    async function editEstablishmentEvent(event) {
      hiddenFormEdit(
        document.querySelector("#btn-register"),
        document.querySelector("#add-establishment"),
        document.querySelector("#edit-establishment"),
        document.querySelector(".registry-form")
      );
      const h2TitleForm = document.querySelector("#title-form");
      h2TitleForm.textContent = "Editar estabelecimento";

      const itemUpdate = this.parentNode.parentNode.querySelectorAll("td");

      uidEdit = itemUpdate[0].textContent;

      const endereco = document.querySelector("#Endereço");
      endereco.value = itemUpdate[1].textContent;
      const telefone = document.querySelector("#Telefone");
      telefone.value = itemUpdate[2].textContent;
      const nome = document.querySelector("#Nome");
      nome.value = itemUpdate[3].textContent;
      const category = document.querySelector("#select-list");
      category.value = itemUpdate[4].textContent;
      const cep = document.querySelector("#CEP");
      cep.value = itemUpdate[5].textContent;
      const email = document.querySelector("#Email");
      email.value = itemUpdate[6].textContent;
    }

    async function createIcon(icon) {
      const allTr = document.querySelectorAll(".body-information");

      allTr.forEach((tr) => {
        const iconElement = document.createElement("td");
        const iconGoogle = document.createElement("img");
        iconGoogle.setAttribute("id", "edit-image");
        iconGoogle.setAttribute("class", "imageIcon");

        if (icon == "delete") {
          iconGoogle.setAttribute("src", "../img/delete.png");
          iconGoogle.addEventListener("dblclick", deleteEstablishmentEvent);
        } else {
          iconGoogle.setAttribute("src", "../img/draw.png");
          iconGoogle.addEventListener("dblclick", editEstablishmentEvent);
        }

        iconElement.appendChild(iconGoogle);
        tr.appendChild(iconElement);
      });
    }

    window.validateEstablishment = function (establishment) {
      let allErrors = [];

      if (establishment.endereco.length < 5) {
        allErrors.push("O endereço deve ter no mínimo 5 letras!");
      }

      if (establishment.telefone.length > 11) {
        allErrors.push("O telefone não pode ter mais que 11 números");
      }

      if (establishment.Nome.length < 3) {
        allErrors.push("O Nome deve ter no mínimo 3 letras!");
      }

      if (establishment.cep.length > 9) {
        allErrors.push(
          "O CEP não deve conter mais que 9 números, contando com o ' - '"
        );
      }

      return allErrors;
    };

    window.showErros = function (errors) {
      let ulError = document.querySelector("#error-message");
      ulError.innerHTML = "";

      errors.forEach((element) => {
        let liError = document.createElement("li");
        liError.textContent = element;
        ulError.appendChild(liError);
      });
    };

    const filterField = document.querySelector("#filter-table");

    filterField.addEventListener("input", function () {

      const categoryFilter = document.getElementsByClassName("info-category");

      for (let i = 0; i < categoryFilter.length; i++) {

          const element = categoryFilter[i].textContent;
          let catorySelected = categoryFilter[i];
          let catorySelectedParentNode = catorySelected.parentNode;

          if (this.value.length > 0) {
            let expressionRegular = new RegExp(this.value, "i");

            if (!expressionRegular.test(element)) {

              invisibleEstab(catorySelectedParentNode);

          } else {

            visibleEstab(catorySelectedParentNode);
          }
        
      } else {        
          visibleEstab(catorySelectedParentNode);        
      }
    }
    });
  })();

  window.titleRegistryForm = function () {
    const mainFormH2 = document.querySelector("#title-form");
    mainFormH2.textContent = "Cadastrar um novo estabelecimento";
  };

  window.btnDisable = document.getElementById("edit-image");
};

establishment();

async function establishmentRenderAux() {
  const main = document.querySelector("main");
  const section = document.querySelector("section.establishmentContainer");
  main.removeChild(section);
  await establishment("no hide");
  await generateFooterRender();
}
