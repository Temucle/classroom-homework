let input = prompt("Дурын тоог оруулна уу.")
let output = ""
let a = 0
let b = 1
for( i = 0; i < input/2; i++ ) {
    output += a + " " + b + " "
    a += b
    b += a
}
console.log(output)