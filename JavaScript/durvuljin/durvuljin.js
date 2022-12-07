let num = 7
let output = ''
for ( i=1 ; i <= num ; i++ ) {
    for ( j=1 ; j <= num ; j++ ) {
        if( i==1 || i==7 ) {
        output += '* '
        }
    }
    if( i!=1 && i!=7) {
        output += '*           *'
    }
    output += '\n'
}

console.log(output)