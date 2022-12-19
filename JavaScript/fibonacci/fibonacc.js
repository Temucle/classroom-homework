let input = prompt("Дурын тоог оруулна уу.")
let output = ""
let sum = 0
let a = 0
let b = 1
for( i = 0; i < input; i++ ) {
    output += sum + " " 
    sum = a + b
    b = a
    a = sum 
}
console.log(output)