let a = 120
let b = 33
let c = 10
let d = 12
if ( a > b ) {
    if ( b > c ) {
        if ( c > d ) {
            console.log( d )
        }
        else {
            console.log( c )
        }
    }
    else {
        if ( b > d ) {
            console.log( d )
        }
        else {
            console.log( b )
        }
    }
}
else {
    if ( a > c ) {
        if ( c > d ) {
            console.log( d )
        }
      else {
            console.log( c )
        }
    } 
    else {
        if ( a > d ) {
            console.log( d )
        }
        else {
            console.log( a )
        }
    }
}
