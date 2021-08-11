var circle = document.querySelectorAll(".image-class");

circle.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e);
  });
});
