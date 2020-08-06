const colourBtn = document.querySelector(".colourBtn");
const bodyBackground = document.querySelector("body");
const hex = document.querySelector(".hex");
let hexColour;

colourBtn.addEventListener("click", changeColour);

function generateRandomColor() {
  const randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
  hexColour = randomColour;
  return randomColour;
  //random color will be freshly served
}

function changeColour() {
  const randomColour = generateRandomColor();
  bodyBackground.style.backgroundColor = randomColour;
  document.querySelector(".hex").innerHTML = randomColour;
}

//initialise
bodyBackground.style.backgroundColor = generateRandomColor(); // -> #e1ac94
hex.innerHTML = hexColour;
