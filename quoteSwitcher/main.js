let circles = document.querySelectorAll(".image-class");
let quote = document.getElementById("display-quote");

// TODO Ternary Operator
quotator = (character) => {
  if (character == "spiderman") {
    quote.textContent = "Hi, I am Spiderman";
  } else if (character == "mrkrabs") {
    quote.textContent = "Hi, I am Mr. Krabs";
  } else {
    quote.textContent = "Hi, I am Spongebob";
  }
};

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    let character = circle.getAttribute("data-character");
    circle.classList.toggle("active");
    quotator(character);
  });
});
