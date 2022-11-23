(() => {
    const establishmentsStyle = document.createElement("script");
    establishmentsStyle.setAttribute("src", "js/styles/establishmentsStyle.js");
    document.body.appendChild(establishmentsStyle);
})();

( async () => {
    
    createLinkApiGoogle();

    const catalogEstablishment = await catalogEstablishments();
    const headerEstablishments = ["Endereço", "Telefone", "Nome","Categoria", "CEP", "Email"];
    const tableMainTbody = document.createElement("tbody");
    const tableMainCatalogo = document.createElement("table");
    const rowTable = tableMainTbody.insertRow();
    window.mainCatalogo = document.createElement("main");
    document.body.appendChild(mainCatalogo);

    function createLinkApiGoogle(){
        const linkGoogleApi = document.createElement('link');
        linkGoogleApi.setAttribute('rel', 'stylesheet');
        linkGoogleApi.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        document.head.appendChild(linkGoogleApi);
    }

    function generateEstablishmentsMain(){
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
        btnRegister.setAttribute('id', 'btn-register')
        const boxSearch = document.createElement("div");
        boxSearch.setAttribute("class", "boxSearch");
        const lupaImg = document.createElement("img");
        lupaImg.setAttribute("class", "lupa");
        lupaImg.setAttribute("src", "../img/iconeLupa.png");
    
        tableMainTbody.setAttribute("class","establishment-table");
    
        mainCatalogo.appendChild(containerEstablishments);
        containerEstablishments.appendChild(divTitle);
        divTitle.appendChild(title);
        mainCatalogo.appendChild(boxRegister);
        boxRegister.appendChild(btnRegister);
        boxRegister.appendChild(boxSearch);
    
        tableMainTbody.setAttribute("class","establishment-table");

        function generateTableShowsEstablishments()
        {
            const sectionCatalogo = document.createElement("section");
            sectionCatalogo.setAttribute("class","section-main");
            mainCatalogo.appendChild(sectionCatalogo);
        
            const inputCatalogoSearch = document.createElement("input");
            inputCatalogoSearch.setAttribute("type","text");
            inputCatalogoSearch.setAttribute("name","filter");
            inputCatalogoSearch.setAttribute("id","filter__table");
            inputCatalogoSearch.setAttribute("class", "inputSearch")
            inputCatalogoSearch.setAttribute("placeholder","Digite o nome da categoria do estabelecimento");
            filterEstab(inputCatalogoSearch);
            boxSearch.appendChild(inputCatalogoSearch); 
            boxSearch.appendChild(lupaImg);    
            
            sectionCatalogo.appendChild(tableMainCatalogo);
            const tableMainThead = document.createElement("thead");
            tableMainCatalogo.appendChild(tableMainThead);
        
            const tableMainTheadTr = document.createElement("tr");
            tableMainTheadTr.setAttribute("class","catalog-table");

            tableMainThead.appendChild(tableMainTheadTr);
        
            for (const element of headerEstablishments) 
            {
                const tableMainTheadTh = document.createElement("th");
                const texti = document.createTextNode(element);
                tableMainTheadTh.appendChild(texti);
                tableMainTheadTr.appendChild(tableMainTheadTh);
                tableMainThead.appendChild(tableMainTheadTr);
            }

            (async () => {

                const listEstablishmentsConverted = await listEstablishments();     
        
                showEstablishments(listEstablishmentsConverted);      
            })();  

            for (const element of catalogEstablishment) 
            {
                showEstablishments(element);
            }
            }

            generateTableShowsEstablishments();
            
    }
 

    // generateForm();
    generateEstablishmentsMain();
    generateForm();
    
    function showEstablishments(Establishments){


        for (let i = 0; i < Establishments.length; i++) 
            {   
                const tableMainTbodyTr = document.createElement("tr");
                tableMainTbodyTr.setAttribute("class","book");
                tableMainTbodyTr.setAttribute("class","body-information");
                const rowTable = tableMainTbody.insertRow();
                Object.entries(Establishments[i]).forEach((entry) => 
                // Object.values(Establishments[i]).forEach((item) => 
                {                    
                    const [key, value] = entry;
                    
                    if(key != "uid" && key != "category")
                    {
                        const tableMainTbodyTd = document.createElement("td");
                        tableMainTbodyTd.textContent = value;
                        tableMainTbodyTd.setAttribute("class",`info-${key}`);
                        tableMainTbodyTr.appendChild(tableMainTbodyTd);
                        console.log(key);
                    }

                    else if(key == "category")
                    {
                        const tableMainTbodyTd = document.createElement("td");
                        tableMainTbodyTd.textContent = value.name;
                        tableMainTbodyTd.setAttribute("class",`info-${key}`);
                        tableMainTbodyTr.appendChild(tableMainTbodyTd);
                        console.log(key);
                    }

                    
                    tableMainTbody.appendChild(tableMainTbodyTr);
                    tableMainCatalogo.appendChild(tableMainTbody);

                })
                rowTable.firstChild.classList.add('idCategory');
                createIcon('delete', rowTable);
                createIcon('draw', rowTable);
            }     
        //   const tableMainTbodyTd = document.createElement("td");
        //   tableMainTbodyTd.textContent = Object.values(book)[k];
        //   tableMainTbodyTd.setAttribute("class","info-"+ Object.keys(book)[k]);
        //   tableMainTbodyTr.appendChild(tableMainTbodyTd);

        //   tableMainTbody.appendChild(tableMainTbodyTr);
        //   tableMainCatalogo.appendChild(tableMainTbody);
        
    }
  
    function createIcon(icon, rowTable){
 
        const cell = document.createElement('td');
        const iconGoogle = document.createElement('span');
      
        if(icon == 'delete'){
          iconGoogle.addEventListener("dblclick", deleteCategory);
        }else{
          iconGoogle.addEventListener("dblclick",function(event){
            console.log("Clicou no lapis");
            console.log(event); 
          });
        }
      
        iconGoogle.textContent = icon;
        iconGoogle.setAttribute('class', 'material-symbols-outlined');
        cell.appendChild(iconGoogle);
        rowTable.appendChild(cell);
    }
 
    async function deleteCategory(event){
    const itemDelete = this.parentNode.parentNode.querySelectorAll('td');
    await deleteCategories(itemDelete[0].textContent);
    document.location.reload(true);
    }
    
    async function showCategory(input){
        clearTable();
        
        const result = await catalogEstablishmentsByName(input.value);
        if(result.length)
        insertContentTable(result);
        else
        insertContentTable(catalogEstablishment);
    }

    function clearTable(){
    const trs = tableMainTbody.querySelectorAll('tr');
    for(i = 0; i < trs.length ; i++){
        trs[i].remove();
    }
    }

    function createInputs(){

        for(let i = 0; i < headerEstablishments.length; i++)
        {            
            element = headerEstablishments[i];
            const divForm = document.createElement("div");
            divForm.setAttribute("class","group-input");
            styleSpace(divForm);
            
            const labelForm = document.createElement("label");
            labelForm.setAttribute("class", "label-form");
            labelForm.setAttribute("for",element);
            labelForm.textContent = element + ": ";
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
        console.log("teste")
        const mainFormSection = document.createElement("section");
        mainFormSection.setAttribute("class","registry-form");
        console.log(mainCatalogo);
        mainCatalogo.appendChild(mainFormSection);
        
        mainFormMain = document.createElement("form");
        mainFormMain.setAttribute("class","form-add");
        mainFormMain.setAttribute("action", "");
        mainFormMain.setAttribute("method", "POST");

        const mainFormH2 = document.createElement("h2");
        mainFormH2.setAttribute("id","title-form");
        mainFormH2.setAttribute("class", "title-form");
        mainFormH2.textContent ="Cadastrar um novo estabelecimento";
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
        buttonForm.textContent = "Salvar estabelecimento";  
        mainFormMain.appendChild(buttonForm);

        const button = document.querySelector('#add-establishment');
            const input = document.querySelector("#filter__table");
            button.addEventListener('click', function(event){
                event.preventDefault();
                showCategory(input);
            });
    }


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
    }

    let tableEstablishments = await document.querySelector("table");

    tableEstablishments.addEventListener("dblclick", function(event)
    {
        deleteEstab(event.target.parentNode);

        setTimeout(function(){
            event.target.parentNode.remove();
        },500);


    })

    const filterField = document.querySelector("#filter__table");

    filterField.addEventListener("input", function(){

        let establishments = document.querySelectorAll(".body__information");
        
        if(this.value.length > 0)
        {
            for(const element of establishments)
            {
                const tdCategory = element.querySelector(".info-Categoria");
                const category = tdCategory.textContent;
                let expressionRegular = new RegExp(this.value, "i" );       

                if(!(expressionRegular.test(category))){
                    invisibleEstab(element);
                }
                else
                {
                    visibleEstab(element);
                }
            }
        }
        else
        {
            for(const element of establishments){
                    visibleEstab(element);    
            } 
        }
    });
        
})();