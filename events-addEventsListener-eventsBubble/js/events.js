// Option-3:
function makeRed() {
  document.body.style.backgroundColor = "coral";
}

// Option-4:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "lightblue";
}

// Option-5:
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option-6:
document
  .getElementById("make-goldenRod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  }); 
