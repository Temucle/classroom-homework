let number = +prompt("Дурын тоог оруулна уу.");
let output = "";
for (i = 0; i < number; i++) {
  for (j = 0; j < number; j++) {
    if (i != 0 && i != number - 1) {
      if (j == 0 || j == number - 1) {
        output += "* ";
      } else {
        output += "  ";
      }
    }
    else {
        output += "* "
    }
  }
  output += "\n";
}
console.log(output);
