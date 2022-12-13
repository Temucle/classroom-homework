let btn = document.getElementById("btn");
let body = document.body;

function changeColor() {
  let colorCode = "";
  for (i = 0; i < 6; i++) {
    rNumber = Math.floor(Math.random() * 16)
    if (rNumber == 10) {
      colorCode += "A";
    } else if (rNumber == 11) {
      colorCode += "B";
    } else if (rNumber == 12) {
      colorCode += "C";
    } else if (rNumber == 13) {
      colorCode += "D";
    } else if (rNumber == 14) {
      colorCode += "E";
    } else if (rNumber == 15) {
      colorCode += "F";
    } else {
      colorCode += "" + rNumber;
    }
  }
  let rcolor = `#${colorCode}`;
  btn.style.color = rcolor;
  body.style.backgroundColor = rcolor;
}
btn.addEventListener("click", changeColor);
