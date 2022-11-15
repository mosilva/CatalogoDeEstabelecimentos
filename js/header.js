console.log(document);

let CatalogEstablishment = 
    [
        {
            "Categoria": "Doce",
            "Nome": "Cacau Show",
            "Endereco": "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
            "Cep": "05724-003",
            "Telefone": "1158457187",
            "Email": "dengoChocolateCacauShow@gmail.com"
        },
        {
            "Categoria": "Fast Food",
            "Nome": "Burguer King",
            "Endereco": "Estrada do Campo Limpo, 459",
            "Cep": "05777-001",
            "Telefone": "1158401212",
            "Email": "bkCampoLimpo@hotmail.com"
        }
    ]

const header = ["Categoria", "Nome", "Endereço", "CEP", "Telefone", "Email"];

function generateHeader()
    {
        const header__Catalogo = document.createElement("header");
        const header__logo = document.createElement("div");
        header__logo.setAttribute("class", "main-logo");
        document.body.appendChild(header__Catalogo);
        header__Catalogo.appendChild(header__logo);

    }

generateHeader();


// function styleTable(tag) {
//     Object.assign(tag.style, {
//       "font-size": "15px",
//       textAlign: "center",
//       margin: "1vw",
//       padding: "1vw",
//       "border-collapse": "collapse",
//       border: "1px black solid",
//     });
//   }
