let inputLength = document.querySelector("#validation-input");
let TotalLenght = 6;
const inputVAlid = function () {
  if (+inputLength.value.length === TotalLenght) {
    inputLength.classList.remove("invalid");
    inputLength.classList.add("valid");
  } else if (+inputLength.value.length !== TotalLenght) {
    inputLength.classList.remove("valid");
    inputLength.classList.add("invalid");
  }
};
inputLength.addEventListener("input", inputVAlid);