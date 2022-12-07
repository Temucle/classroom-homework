let n = prompt("Дурын тоог оруулна уу.")
let output = ""
for( let i = 0; i < n; i++ ) {
    for( let k = 0; k < n; k++ ) {
        if ( i == 0 || i== n - 1 ) {
        output +="* "
        }
    }
    output += "\n"
    if ( i < n - 2 ) {
    output += "*"
    for ( let j = 0; j < n*2-3; j++ )
    output += " "
    output += "*"
    }
}
console.log( output )