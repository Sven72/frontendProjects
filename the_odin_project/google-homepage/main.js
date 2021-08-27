let button = document.getElementById("cta");
button.innerText = "I'm Feeling Lucky";

button.onmouseover = () => {
  setTimeout(() => {
    setInterval(() => {
      button.innerText = "";
      choosePhrase();
    }, 500);
  }, 1000);
};

let phrases = [
  "I'm Feeling Hungry",
  "I'm Feeling Playful",
  "I'm Feeling Trendy",
];

function choosePhrase() {
  let phraseLength = phrases.length;
  let randomPhrase = Math.floor(Math.random() * phraseLength);
  button.innerHTML = phrases[randomPhrase];
}
