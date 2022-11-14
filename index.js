function generateHeader(){
    const header__Catalogo = document.createElement("header");
    const header__logo = document.createElement("div");
    header__logo.setAttribute("class", "main-logo");
    document.body.appendChild(header__Catalogo);
    header__Catalogo.appendChild(header__logo);

}

function generateMain(){
    const main__Catalogo = document.createElement("main");
    const section__Catalogo = document.createElement("section");
    section__Catalogo.setAttribute("class","section-main");
    document.body.appendChild(main__Catalogo);
    main__Catalogo.appendChild(section__Catalogo);

    const h2__Catalogo = document.createElement("h2");
    h2__Catalogo.textContent = "Catálogo de Estabelecimentos";
    section__Catalogo.appendChild(h2__Catalogo);
};

function generateCatalogOfEstablishments(){
    const table__main__catalogo = document.createElement("table");

};




generateHeader();
generateMain();


