let input = prompt("Дурын тоог авна уу.")
let output = ''
for( i = input.length - 1 ; 0 <= i ; i-- ) {
    output += input[i]
}
alert(output)