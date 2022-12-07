// console.log("Functions")

// function f1(x, y) {
//     console.log(Math.pow(x, 2) + Math.pow(y, 2))
// }
// f1(3, 4)

// function f2(x) {
//     console.log(Math.pow(x, Math.E))
// }
// f2(5)

// function f3(a,b) {
//     console.log( Math.pow(a, 2) - Math.pow(b, 2) )
// }
// f3(4, 8 )

// function f4(a, b) {
//     console.log( Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2) ) )
// }
// f4(3, 5 )

// function f5(y) {
//     console.log( Math.pow(y, 2) - 2 * y + 4 )
// }
// f5(2)
// function f6(a, b) {
//     console.log( a - b * ( Math.pow( a, 2 ) + Math.pow( b, 2 ) ) )
// }
// f6(10, 2)
// function myfunc( p1 , p2 ) {
//     return p1 + p2
// }
// console.log( myfunc( 2, 3 ) )
// function isEven( x ) {
//     return x%2
// }
// if ( isEven(13) == 0 ) {
//     console.log( 'It is Even number' )
// }
// else {
//     console.log( 'It is Odd number' )
// }
// let a = 42
// let b = 12
// let findMax = function ( a, b ) {
//     let result = ""
//     if ( a < b ) {
//         result = ` Max number is ${b}  `
//     }
//     else {
//         result = ` Max number is ${a} `
//     }
//     return result
// }
// console.log( findMax( a, b ))
let a = 42
let b = 12
let findMax = ( a, b ) => {
    let result = ""
    if ( a < b ) {
        result = ` Max number is ${b}  `
    }
    else {
        result = ` Max number is ${a} `
    }
    return result
}
console.log( findMax( a, b ))

