(() => {
    const styleJS = document.createElement('script');
    styleJS.setAttribute('src','js/listCategoryStyle.js')
    document.body.appendChild(styleJS);
})();

const listCategory = [
  {
    Nome: "Cacau Show",
    Codigo: "2222",
  },
  {
    Nome: "Cacau Brasil",
    Codigo: "4444",
  },
  {
    Nome: "Burguer King",
    Codigo: "5555",
  },
  {
    Nome: "Burguer King",
    Codigo: "5555",
  },
];

const body = document.querySelector('body');
const main = document.createElement('main');
body.appendChild(main);

const header = ["Nome", "Codigo"];

function generateHeader()
    {
        const headerCatalogo = document.createElement("header");
        const headerLogo = document.createElement("div");
        headerLogo.setAttribute("class", "main-logo");
        document.body.appendChild(headerCatalogo);
        headerCatalogo.appendChild(headerLogo);

    }

generateHeader();

generateHeader();
function CreateTable (row, tableHead) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');


for (let i = 0; i < row.length; i++) {
        const tr = document.createElement("tr");
        for(let j = 1; j < tableHead.length + 1; j++) {
            const td = document.createElement("td");
            const texto = document.createTextNode(Object.values(row[i])[j]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
    }
    tbody.appendChild(tr);
    }

    table.appendChild(thead)
    table.appendChild(tbody)