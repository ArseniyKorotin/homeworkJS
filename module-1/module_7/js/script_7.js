const sizeControl = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");
const qwerrty = function () {
  sizeText.style.fontSize = sizeControl.value + "5px";
};
sizeControl.addEventListener("blur", qwerty);