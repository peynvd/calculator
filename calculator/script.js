let displayBox = document.querySelector(".display");

let list = document.querySelectorAll(".show-display");
//console.log(list)
function showDisplay(event) {
  const x = event.target.innerText;
  //   console.log(x);
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  return (displayBox.innerHTML += x);
}

function calculate() {
  let result = displayBox.innerText;
  // console.log(typeof result)
  // console.log(eval(result))
  displayBox.innerText = eval(result);
}

function allClear() {
  displayBox.innerText = 0;
}

function clear() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);
list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});
