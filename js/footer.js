(() => {
  const styleJs = document.createElement("script");
  styleJs.setAttribute("src", "js/styles/footer-styles.js");
  document.body.appendChild(styleJs);
})();

async function generateFooter(){
  const categories = await listCategories();
  const establishments = await listEstablishments();
  const footer = document.createElement("footer");
  const list = document.createElement("list");
  const listUnordered = document.createElement("ul");

  categories.forEach((item) => {
    let count = 0;
    establishments.forEach(element => {
      if(element.category.code === item.code){
        count++;
      }
    })
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    listLink.href = "#";
    listLink.textContent = `${item.name} (${count})`;
    listItem.appendChild(listLink);
    listUnordered.appendChild(listItem);
  })
  list.appendChild(listUnordered);
  footer.appendChild(list);
  document.body.appendChild(footer);
}

generateFooter();








async function generate (){
  const xListCategory = await window.listCategories();
  console.log(xListCategory);
}

generate();
