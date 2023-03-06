let $pyramid = document.getElementById("pyramid");
let $floors = document.getElementById("floors-input");
let pyramidHeight;

let sign = "*";
let row = "";

function pyramidGame() {
  pyramidHeight = $floors.value;
  let floors = pyramidHeight - 1;

  for (let i = 0; i < pyramidHeight; i++) {
    let spaces = "";

    for (let j = 0; j < floors; j++) {
      spaces += "";
    }

    row = spaces + sign;

    floors--;
    $pyramid.innerHTML += `${row} <br>`;
    sign += "**";
  }
}
