(() => {
    const styleJS = document.createElement('script');
    styleJS.setAttribute('src','js/styles/listCategoryStyle.js')
    document.body.appendChild(styleJS);
})();

( async () => {

createLinkApiGoogle();

const listCategory = await listCategories();


const titlesTable = ["Codigo", "Nome", "Excluir" , "Editar"];


const main = document.createElement("main");
document.body.appendChild(main);

const titlePage = document.createElement('h1');
titlePage.textContent = 'Buscar Categoria';
main.appendChild(titlePage);

const buttonCadastrar = document.createElement('button');
buttonCadastrar.textContent = "Cadastrar Nova Categoria";
main.appendChild(buttonCadastrar);

createFormRegisterCategory();

createFormSearchCategory();

const newTable = document.createElement("table");
const headerTable = newTable.createTHead();
const tableBody = newTable.createTBody();
const footerTable = newTable.createTFoot();
main.appendChild(newTable);

insertTitlesTable(headerTable, titlesTable);

insertContentTable(listCategory);

const button = document.querySelector('#btn_busca');
const input = document.querySelector("#busca");

button.addEventListener('click', function(event){
  event.preventDefault()
  showCategory(input);
});

function createLinkApiGoogle(){
  const newlink = document.createElement('link');
  newlink.setAttribute('rel', 'stylesheet');
  newlink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
  document.head.appendChild(newlink);
}

function createFormRegisterCategory(){

  const divRegister = document.createElement('div');
  divRegister.classList.add('div-register');
  main.appendChild(divRegister);

  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'POST');

  const inputCode = document.createElement('input');
  inputCode.classList.add('campo');
  inputCode.setAttribute('type', 'text');
  inputCode.setAttribute('placeholder', 'Digite o código da categoria');

  const selectName = document.createElement('select');
  selectName.classList.add('campo');
  selectName.setAttribute('name', 'selectCategory');
  selectName.setAttribute('placeholder', 'Digite o nome da categoria');

  const optionsCategory = ['Selecione uma categoria','Varejo', 'Educação', 'Bancários', 'Saúde', 'Esporte'];

  for (let i = 0; i < optionsCategory.length; i++) {
    
    const option = document.createElement('option');
    let value = optionsCategory[i].toLowerCase().replaceAll(" ", "");
    value = convertString(value);
    option.setAttribute('value', `${value}`);
    option.textContent = optionsCategory[i];

    selectName.appendChild(option);
    
  }

  const button = document.createElement('button');
  button.textContent = "Criar Categoria";

  divRegister.appendChild(form);
  form.appendChild(inputCode);
  form.appendChild(selectName);
  form.appendChild(button);

}

function convertString(text){
  const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return text.toString().toLowerCase().trim()
    .replace(p, c => b.charAt(a.indexOf(c))) 
    .replace(/&/g, '-and-') 
    .replace(/[\s\W-]+/g, '-');
}

function createFormSearchCategory(){
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'POST');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Digite a categoria ou palavra chave.');
  input.setAttribute('id', 'busca');
  input.classList.add('campo');

  const button = document.createElement('button');
  button.textContent = "Buscar";
  button.setAttribute('id', 'btn_busca');

  main.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);

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

    rowTable.firstChild.classList.add('idCategory');
   
    createIcon('delete', rowTable);
    createIcon('draw', rowTable);    
  }
}

function createIcon(icon, rowTable){
 
  const cell = document.createElement('td');
  const iconGoogle = document.createElement('span');

  if(icon == 'delete'){

    iconGoogle.addEventListener("dblclick", deleteCategory);

  }else{

    iconGoogle.addEventListener("dblclick",function(event){
      console.log("Clicou no lapis");
      console.log(event);
     
    });
  }

  iconGoogle.textContent = icon;
  iconGoogle.setAttribute('class', 'material-symbols-outlined');
  
  cell.appendChild(iconGoogle);
  rowTable.appendChild(cell);

}

async function deleteCategory(event){

  const itemDelete = this.parentNode.parentNode.querySelectorAll('td');

  await deleteCategories(itemDelete[0].textContent);

  document.location.reload(true);
}

async function showCategory(input){

  clearTable();

  const result = await listCategoriesByName(input.value);

    if(result.length)
    insertContentTable(result);
    else
    insertContentTable(listCategory);
}

function clearTable(){
  const trs = tableBody.querySelectorAll('tr');
  for(i = 0; i < trs.length ; i++){
    trs[i].remove();
  }
}


})();



