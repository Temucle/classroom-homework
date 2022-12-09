let input = prompt(" Үг бичнэ үү. ");
let output = "";
for (i = 0; i < input.length; i++) {
  if (input[i] == input[i].toUpperCase()) {
    output += input[i].toLowerCase();
  } else {
    output += input[i].toUpperCase();
  }
}
                                
alert(output);
