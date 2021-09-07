let black = document.getElementById("black");
let rainbow = document.getElementById("rainbow");
let eraser = document.getElementById("delete");

let eraserFunc;
let rainbowColor;

let div;
let container = document.getElementsByClassName("grid");
for (let index = 1; index <= 32; index++) {
  for (let index = 1; index <= 16; index++) {
    div = document.createElement("div");
    container[0].appendChild(div);
  }
}

rainbow.addEventListener("click", () => {
  rainbowColor = true;
});

eraser.addEventListener("click", () => {
  eraserFunc = true;
});

// Muss checken, ob innerhalb der Funktion "eraser" geklickt wird.
// => Listen constantly to events
container[0].addEventListener("mouseover", (e) => {
  if (eraserFunc == true) {
    e.target.style.backgroundColor = "red";
  }
  if (rainbowColor == true) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.random().toFixed(1);
    console.log(r, g, b, a);
    e.target.style.backgroundColor =
      "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }
  if (e.target.classList != "black") {
    e.target.classList = "black";
  } else {
    e.target.classList = "black";
  }
});
