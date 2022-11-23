(() => {
  const styleJs = document.createElement("script");
  styleJs.setAttribute("src", "js/styles/footer-styles.js");
  document.body.appendChild(styleJs);
})();

async function generateFooter() {
  const categories = await listCategories();
  const establishments = await listEstablishments();
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
}

generateFooter();

async function renderCategorySelected(event) {
  const categorySelect = event.path[0].name;
  const input = document.createElement("input");
  const footer = document.querySelector("footer");
  input.value = categorySelect;
  //footer.appendChild(input);
  //input.style.display = "none";
  await hiddenForFooter(event);
  await showCategory(input);
  //footer.removeChild(input);
}
