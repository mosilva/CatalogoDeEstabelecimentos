
function generateMain(){

    const section__Catalogo = document.createElement("section");
    section__Catalogo.setAttribute("class","section-main");
    document.body.appendChild(main__Catalogo);
    main__Catalogo.appendChild(section__Catalogo);

    const h2__Catalogo = document.createElement("h2");
    h2__Catalogo.textContent = "Catálogo de Estabelecimentos";
    section__Catalogo.appendChild(h2__Catalogo);

    const table__main__catalogo = document.createElement("table");
    section__Catalogo.appendChild(table__main__catalogo);
    const table__main__thead = document.createElement("thead");
    table__main__catalogo.appendChild(table__main__thead);

    const table__main__theadTr = document.createElement("tr");
    table__main__theadTr.setAttribute("class","catalog-table");
    table__main__thead.appendChild(table__main__theadTr);

    const table__main__tbody = document.createElement("tbody");
    table__main__tbody.setAttribute("class","establishment-table");

    for (const element of header) {
        const table__main__theadTh = document.createElement("th");
        const texti = document.createTextNode(element);
        table__main__theadTh.appendChild(texti);
        table__main__theadTr.appendChild(table__main__theadTh);
        table__main__thead.appendChild(table__main__theadTr);
    }

    for (const element of CatalogEstablishment) {
        let establishment = element;
        const table__main__tbodyTr = document.createElement("tr");
        table__main__tbodyTr.setAttribute("class","establishment");
        table__main__tbodyTr.setAttribute("class", "body__information");

        for (let k = 0; k < header.length; k++) {
          const table__main__tbodyTd = document.createElement("td");
          table__main__tbodyTd.textContent = Object.values(establishment)[k];
          table__main__tbodyTd.setAttribute("class","info-"+ Object.keys(establishment)[k]);
          table__main__tbodyTr.appendChild(table__main__tbodyTd);

          table__main__tbody.appendChild(table__main__tbodyTr);
          table__main__catalogo.appendChild(table__main__tbody);

        }
    }   
};

generateMain();