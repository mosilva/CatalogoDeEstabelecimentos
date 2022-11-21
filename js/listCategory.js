(() => {
    const styleJS = document.createElement('script');
    styleJS.setAttribute('src','js/styles/listCategoryStyle.js')
    document.body.appendChild(styleJS);
})();

/*const listCategory = [
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
    Codigo: "5567",
  },
];*/


( async () => {
  const listCategory = await listCategories();
  console.log(listCategory);


  const urlGoogleIcons = '<link rel="stylesheet" href="" />';

const titlesTable = ["Nome", "Codigo"];


const titlePage = document.createElement('h1');
titlePage.textContent = 'Buscar Categoria';


const main = document.createElement("main");
document.body.appendChild(main);
main.appendChild(titlePage);

createSearchCategory();

const newTable = document.createElement("table");
const headerTable = newTable.createTHead();
const tableBody = newTable.createTBody();
const footerTable = newTable.createTFoot();
main.appendChild(newTable);


createLinkApiGoogle();

insertTitlesTable(headerTable, titlesTable);

insertContentTable(listCategory);

Delete();


const button = document.querySelector('button');
const input = document.querySelector("input");

button.addEventListener('click', function(event){
  event.preventDefault()

  showCategory(input);
  
});

function showCategory(input){

  const result = SearchCategoryByName(input.value);

    clearTable();  

    if(result.length)
    insertContentTable(result);
    else
    insertContentTable(listCategory);
}

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

function clearTable(){
  const trs = tableBody.querySelectorAll('tr');
  for(i = 0; i < trs.length ; i++){
    trs[i].remove();
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
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Digite a categoria ou palavra chave.');

  const button = document.createElement('button');
  button.textContent = "Buscar";

  main.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);

}

function SearchCategoryByName(nameCategory){

  const result = listCategory.filter( p => p.Nome == nameCategory);

  return result;

}


/*function Delete(){
  const iconDelete = document.querySelectorAll("span");
  //const tdrow = document.querySelectorAll("td");
  
  iconDelete.addEventListener("dblclick", DeleteRow());

}*/

function Delete(){
  const iconDelete = document.querySelectorAll("span");
  const tdrow = document.querySelectorAll("td");
  
  iconDelete.forEach(function(event){
    event.addEventListener("dblclick",function(event){
      event.target.parentNode.remove();
      //event.removeChild(event.target.parentElement);
      DeletRow();
    });
  });
}

function DeletRow (){
  const td = document.querySelectorAll("th")
  th.target.parentNode.remove();
}


})();



