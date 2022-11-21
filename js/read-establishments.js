function showEstablishments(establishment){
    
        const tableMainTbodyTr = document.createElement("tr");
        tableMainTbodyTr.setAttribute("class","establishment");
        tableMainTbodyTr.setAttribute("class", "body__information");

        for (let k = 0; k < header.length; k++) {
          const tableMainTbodyTd = document.createElement("td");
          tableMainTbodyTd.textContent = Object.values(establishment)[k];
          tableMainTbodyTd.setAttribute("class","info-"+ Object.keys(establishment)[k]);
          tableMainTbodyTr.appendChild(tableMainTbodyTd);

          tableMainTbody.appendChild(tableMainTbodyTr);
          tableMainCatalogo.appendChild(tableMainTbody);
        }
}


function generateTableShowsEstablishments(){

    const sectionCatalogo = document.createElement("section");
    sectionCatalogo.setAttribute("class","section-main");
    document.body.appendChild(mainCatalogo);
    mainCatalogo.appendChild(sectionCatalogo);

    const h2Catalogo = document.createElement("h2");
    h2Catalogo.textContent = "Catálogo de Estabelecimentos";
    sectionCatalogo.appendChild(h2Catalogo);

    const labelCatalogoSearch = document.createElement("label");
    labelCatalogoSearch.setAttribute("for", "filter__table");
    labelCatalogoSearch.textContent = "Filter: "
    sectionCatalogo.appendChild(labelCatalogoSearch);

    const inputCatalogoSearch = document.createElement("input");
    inputCatalogoSearch.setAttribute("type","text");
    inputCatalogoSearch.setAttribute("name","filter");
    inputCatalogoSearch.setAttribute("id","filter__table");
    inputCatalogoSearch.setAttribute("placeholder","Digite a categoria do estabelecimento");
    filterEstab(inputCatalogoSearch);
    sectionCatalogo.appendChild(inputCatalogoSearch);     
    
    sectionCatalogo.appendChild(tableMainCatalogo);
    const tableMainThead = document.createElement("thead");
    tableMainCatalogo.appendChild(tableMainThead);

    const tableMainTheadTr = document.createElement("tr");
    tableMainTheadTr.setAttribute("class","catalog-table");
    tableMainThead.appendChild(tableMainTheadTr);

    for (const element of headerEstabblishments) 
    {
        const tableMainTheadTh = document.createElement("th");
        const texti = document.createTextNode(element);
        tableMainTheadTh.appendChild(texti);
        tableMainTheadTr.appendChild(tableMainTheadTh);
        tableMainThead.appendChild(tableMainTheadTr);
    }

    for (const element of CatalogEstablishment) 
    {
        showEstablishments(element);
    }
}   

generateTableShowsEstablishments();