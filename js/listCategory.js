(() => {
    const styleJS = document.createElement('script');
    styleJS.setAttribute('src','js/styles/listCategoryStyle.js')
    document.body.appendChild(styleJS);
})();


( async () => {

createLinkApiGoogle();

const listCategory = await listCategories();


const titlesTable = ["Codigo", "Nome", "Excluir" , "Editar"];

    const categoryContainer = document.createElement("section");
    categoryContainer.classList.add('categoryContainer');
    categoryContainer.classList.add('hide');


    const main = document.querySelector("main");
    if(main){
        main.appendChild(categoryContainer);
    }
    else{
        const main = document.createElement('main');
        document.body.appendChild(main);
        main.appendChild(categoryContainer);
    }



const titlePage = document.createElement('h1');
titlePage.textContent = 'Categorias';
categoryContainer.appendChild(titlePage);

const buttonCadastrar = document.createElement('button');
buttonCadastrar.textContent = "Criar Nova Categoria";
buttonCadastrar.setAttribute('id', 'btn-nova-categoria');
categoryContainer.appendChild(buttonCadastrar);

createFormRegisterCategory();

createFormSearchCategory();

const newTable = document.createElement("table");
const headerTable = newTable.createTHead();
const tableBody = newTable.createTBody();
const footerTable = newTable.createTFoot();
categoryContainer.appendChild(newTable);

insertTitlesTable(headerTable, titlesTable);

insertContentTable(listCategory);

const button = document.querySelector('#btn_busca');
const input = document.querySelector("#busca");

button.addEventListener('click', async function(event){
  event.preventDefault()
  await showCategory(input);
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
  categoryContainer.appendChild(divRegister);

  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'POST');

  const inputCode = document.createElement('input');
  inputCode.classList.add('campo');
  inputCode.setAttribute('type', 'text');
  inputCode.setAttribute('id', 'codigoCategoria');
  inputCode.setAttribute('placeholder', 'Digite o código da categoria');

  const inputName = document.createElement('input');
  inputName.classList.add('campo');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('id', 'nomeCategoria');
  inputName.setAttribute('placeholder', 'Digite o nome da categoria');

  const button = document.createElement('button');
  button.setAttribute('id', 'btn-cadastrar-categoria')
  button.textContent = "Criar Categoria";

  divRegister.appendChild(form);
  form.appendChild(inputCode);
  form.appendChild(inputName);
  form.appendChild(button);

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

  categoryContainer.appendChild(form);
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

window.showCategory = async function (input){
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

async function registerCategory(codeCategory, nameCategory){

  await createCategory(codeCategory.value, nameCategory.value);

  document.location.reload(true);

}

function captureDataRegister(){
  const button = document.querySelector('#btn-cadastrar-categoria');
  const codeCategory = document.querySelector("#codigoCategoria");
  const nameCategory = document.querySelector("#nomeCategoria");
    
  button.addEventListener('click', function(event){
    event.preventDefault()
     registerCategory(codeCategory, nameCategory);
  });
}

captureDataRegister();

window.hiddenFormRegister = function(buttonSelect, container, item) {
  const button = buttonSelect;
  const containerRegister = container;
  const propriedadesContainerRegister = containerRegister.style;
  containerRegister.style.display = "none";

  button.addEventListener('click', function(event){
    event.preventDefault();

    if(propriedadesContainerRegister['display'] == 'none'){
      containerRegister.style.display = "block";
      button.textContent = "Esconder form";
    }
    else{
      containerRegister.style.display = "none";
      button.textContent = item;
    }
      
      
  });

}
hiddenFormRegister(document.querySelector('#btn-nova-categoria'),document.querySelector('.div-register'), "Criar Nova categoria");


})();



