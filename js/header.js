(() => {
    const headerStyles = document.createElement("script");
    headerStyles.setAttribute("src", "js/styles/headerStyles.js");
    document.body.appendChild(headerStyles);
  })();

// let CatalogEstablishment = 
//     [
//         {
//             "Categoria": "Doce",
//             "Nome": "Cacau Show",
//             "Endereco": "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
//             "Cep": "05724-003",
//             "Telefone": "1158457187",
//             "Email": "dengoChocolateCacauShow@gmail.com"
//         },
//         {
//             "Categoria": "Fast Food",
//             "Nome": "Burguer King",
//             "Endereco": "Estrada do Campo Limpo, 459",
//             "Cep": "05777-001",
//             "Telefone": "1158401212",
//             "Email": "bkCampoLimpo@hotmail.com"
//         }
//         ,
//         {
//             "Categoria": "Doce",
//             "Nome": "Cacau Brasil",
//             "Endereco": "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
//             "Cep": "05724-003",
//             "Telefone": "115844058",
//             "Email": "cacau_brasil_gio@gmail.com"
//         }
//     ]

// const header = ["Categoria", "Nome", "Endereço", "CEP", "Telefone", "Email"];
const headerNav = ["Estabelecimentos", "Categorias"];

function generateHeader()
    {
        const header = document.createElement("header");
        const headerSection = document.createElement("section");
        headerSection.setAttribute("class", "containerHeader");
        const logo = document.createElement("img");
        logo.setAttribute("src", "img/headerLogo.png")
        logo.setAttribute("class", "logoHeader");
        const nav = document.createElement("nav");
        const navList = document.createElement("ul");

        headerNav.forEach(item => {
            const list = document.createElement("li");
            list.setAttribute("class", "navList");
            list.innerText = item;
            headerSection.appendChild(list);
        });

        document.body.appendChild(header);
        header.appendChild(headerSection);
        headerSection.appendChild(logo);
        headerSection.appendChild(nav);
        nav.appendChild(navList);
    }

    generateHeader();

            