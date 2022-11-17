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
        ,
        {
            "Categoria": "Doce",
            "Nome": "Cacau Brasil",
            "Endereco": "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
            "Cep": "05724-003",
            "Telefone": "115844058",
            "Email": "cacau_brasil_gio@gmail.com"
        }
    ]

const header = ["Categoria", "Nome", "Endereço", "CEP", "Telefone", "Email"];

function generateHeader()
    {
        const headerCatalogo = document.createElement("header");
        const headerLogo = document.createElement("div");
        headerLogo.setAttribute("class", "main-logo");
        document.body.appendChild(headerCatalogo);
        headerCatalogo.appendChild(headerLogo);

    }

generateHeader();