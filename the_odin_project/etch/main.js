// declaring variable outside makes it available
let div;
let container = document.getElementsByClassName("grid");
for (let index = 1; index <= 32; index++) {
  for (let index = 1; index <= 16; index++) {
    div = document.createElement("div");
    container[0].appendChild(div);
  }
}

container[0].addEventListener("mouseover", (e) => {
  e.target.classList.toggle("black");
});
