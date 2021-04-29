const items = document.querySelectorAll(".item");
const ul = Array.from(document.querySelector("#categories").children);
for (let elem of ul) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} Количество элементов: ${quantityElem}`);
}