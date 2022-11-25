(() => {
  const styleJs = document.createElement("script");
  styleJs.setAttribute("src", "js/styles/footer-styles.js");
  document.body.appendChild(styleJs);
})();

window.generateFooter = async function () {
  const requestCategory = await listCategories();
  const categories =
    requestCategory.length != 0
      ? requestCategory
      : JSON.parse(localStorage.categories);
  const requestEstablishments = await listEstablishments();
  const establishments =
    requestEstablishments.length != 0
      ? requestEstablishments
      : JSON.parse(localStorage.establishments);

  const footer = document.createElement("footer");
  const list = document.createElement("list");
  const listUnordered = document.createElement("ul");

  categories.forEach((category) => {
    let count = 0;
    establishments.forEach((establishment) => {
      if (establishment.category.uid === category.uid) {
        count++;
      }
    });
    if (count != 0) {
      const listItem = document.createElement("li");
      const listLink = document.createElement("a");
      listItem.addEventListener("click", () => renderCategorySelected(event));
      listLink.setAttribute("name", `${category.name}`);
      listLink.textContent = `${category.name} (${count})`;
      listItem.appendChild(listLink);
      listUnordered.appendChild(listItem);
    }
  });
  list.appendChild(listUnordered);
  footer.appendChild(list);
  document.body.appendChild(footer);
};

generateFooter();

async function renderCategorySelected(event) {
  const categorySelect = event.path[0].name;
  const input = document.createElement("input");
  const footer = document.querySelector("footer");
  input.value = categorySelect;
  await hiddenForFooter(event);
  await showCategory(input);
}

async function generateFooterRender() {
  const body = document.querySelector("body");
  const footer = body.querySelector("footer");
  body.removeChild(footer);
  await generateFooter();
}
