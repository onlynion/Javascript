// Option-1 : Directly set on the HTML element

// Option-2: Add onclick function on the HTML element
// <button onclick="makered()">Make red</button>
function makered() {
  document.body.style.backgroundColor = "red";
}

// Option-3:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// Option-3: another
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// Option-4: 
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option-4: another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// Option-4: Final
document
  .getElementById("make-tomato")
  .addEventListener("click", function makeTomato() {
    document.body.style.backgroundColor = "tomato";
  });