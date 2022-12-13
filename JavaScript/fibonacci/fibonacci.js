let input = prompt("Дурын тоог оруулна уу.")
let output = ""
let a = 1
let b = 0
for( i = 0; i < input; i++ ) {
    output += " " + b + " "
    a += b
    b = a
}
console.log(output)