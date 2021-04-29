const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulingridients = document.querySelector("#ingredients");
const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");
ulingridients.innerHTML = list;