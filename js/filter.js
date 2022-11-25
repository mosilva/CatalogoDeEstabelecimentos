const filterField = document.querySelector("#filter__table");

filterField.addEventListener("input", function () {
  let establishments = document.querySelectorAll(".body__information");

  if (this.value.length > 0) {
    for (const element of establishments) {
      const tdCategory = element.querySelector(".info-Categoria");
      const category = tdCategory.textContent;
      let expressionRegular = new RegExp(this.value, "i");

      if (!expressionRegular.test(category)) {
        invisibleEstab(element);
      } else {
        visibleEstab(element);
      }
    }
  } else {
    for (const element of establishments) {
      visibleEstab(element);
    }
  }
});
