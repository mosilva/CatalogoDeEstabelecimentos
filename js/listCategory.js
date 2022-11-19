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

const titlesTable = ["Nome", "Codigo"];

const newTable = document.createElement("table");
const headerTable = newTable.createTHead();
const tableBody = newTable.createTBody();
const footerTable = newTable.createTFoot();
document.body.appendChild(newTable);


insertTitlesTable(headerTable, titlesTable);

insertContentTable(listCategory);


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

  }
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