let input = prompt( "Дурын тоо оруулна уу?" )
let output = ""
for( let i = 0; i < +input; i++ ) {
    for( let j = 0; j < i+1 ; j++ ) {
        output += j + 1 + " " 
    }    
    output +='\n'
}
console.log( output )

let output2 = ""
for( let i = 0; i < +input; i++ ) {
    for( let j = +input; i < j ; j-- ) {
        output2 += j + ` `
    }    
    output2 +='\n'
}
console.log( output2 )