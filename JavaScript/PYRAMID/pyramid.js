// let n = prompt(`Дурын тоо оруулна уу.`)
let output = ""
for( i = 0; i < 10; i++ ) {
    for( j = 0; j < 10-i ; j++ ) {
        output+= ' '
    }
    
    for( j = 0; j < (i)*2+1; j++ ) {
        output+= '*'
    }
    output += '\n'
}  
console.log(output)