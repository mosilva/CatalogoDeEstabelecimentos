(() => {
    const styleJS = document.createElement('script');
    styleJS.setAttribute('src','js/styles/listCategoryStyle.js')
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

const urlGoogleIcons = '<link rel="stylesheet" href="" />';

const titlesTable = ["Nome", "Codigo"];


const titlePage = document.createElement('h1');
titlePage.textContent = 'Buscar Categoria';
document.body.appendChild(titlePage);

const newTable = document.createElement("table");
const headerTable = newTable.createTHead();
const tableBody = newTable.createTBody();
const footerTable = newTable.createTFoot();
document.body.appendChild(newTable);


createLinkApiGoogle();

insertTitlesTable(headerTable, titlesTable);

insertContentTable(listCategory);

createSearchCategory();

button = document.querySelector('button');
var input = document.querySelector("input")

input.value = 'Burguer King';

const searchInputed = input.value;

const result = SearchCategoryByName(searchInputed);

button.setAttribute('onclick', 'insertContentTable(result)');


// insertContentTable(result)

function insertTitlesTable (headerTable, titlesTable) {

  for (let i = 0; i < titlesTable.length; i++) {
    const headerCell = document.createElement('th');
    headerTable.appendChild(headerCell);
    headerCell.textContent = titlesTable[i];
  }
  
}

function insertContentTable(listCategory){

  for (let i = 0; i < listCategory.length; i++) {

    const rowTable = tableBody.insertRow();

    Object.values(listCategory[i]).forEach(item => {
      const headerCell = document.createElement('td');
      rowTable.appendChild(headerCell);
      headerCell.textContent = item;
    });

    createIconGarbage('delete', rowTable);
    createIconGarbage('draw', rowTable);
  }
}

function createLinkApiGoogle(){
  const newlink = document.createElement('link');
  newlink.setAttribute('rel', 'stylesheet');
  newlink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  document.head.appendChild(newlink);
}

function createIconGarbage(icon, rowTable){
  
  const cellGarbage = document.createElement('td');
  const iconGarbage = document.createElement('span');
  iconGarbage.textContent = icon;
  iconGarbage.setAttribute('class', 'material-symbols-outlined');
  cellGarbage.appendChild(iconGarbage);
  rowTable.appendChild(cellGarbage);

}

function createSearchCategory(){
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'POST');

  const input = document.createElement('input');
  input.setAttribute('id', 'busca');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Digite a categoria ou palavra chave.');

  const button = document.createElement('button');
  button.textContent = "Buscar";

  document.body.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);

}

function SearchCategoryByName(nameCategory){

  const result = listCategory.filter( p => p.Nome == nameCategory);

  return result;

}


// function generateHeader()
//     {
//         const headerCatalogo = document.createElement("header");
//         const headerLogo = document.createElement("div");
//         headerLogo.setAttribute("class", "main-logo");
//         document.body.appendChild(headerCatalogo);
//         headerCatalogo.appendChild(headerLogo);

//     }

// generateHeader();

// function CreateTable (row, tableHead) {
//     const table = document.createElement('table');
//     const thead = document.createElement('thead');
//     const tbody = document.createElement('tbody');


// for (let i = 0; i < row.length; i++) {
//         const tr = document.createElement("tr");
//         for(let j = 1; j < tableHead.length + 1; j++) {
//             const td = document.createElement("td");
//             const texto = document.createTextNode(Object.values(row[i])[j]);
//             td.appendChild(texto);
//             tr.appendChild(td);
//         }
//     }
//     tbody.appendChild(tr);
//     }