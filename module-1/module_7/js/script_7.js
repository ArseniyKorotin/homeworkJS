const sizeControl = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");
const qwerrty = function () {
  sizeText.style.fontSize = sizeControl.value + "px";
};
sizeControl.addEventListener("input", qwerrty);