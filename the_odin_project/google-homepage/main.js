let button = document.getElementById("cta");
button.innerText = "I'm Feeling Lucky";

let refreshIntervalId = null;
button.onmouseover = () => {
  // setTimeout(() => {
  refreshIntervalId = setInterval(() => {
    button.innerText = "";
    choosePhrase();
  }, 500);
  // }, 1000);
};

button.mouseleave = () => {
  clearInterval(refreshIntervalId) && (refreshIntervalId = null);
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
