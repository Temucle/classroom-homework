let input = +prompt('Таны оруулсан тоог анхны')
let result = ""
for( i=2; i < input; i++ ) {
    if ( input%i == 0 ) {
        result = 'Энэ тоо нь анхны тоо биш байна.'
        break
    }
    else {
        result = 'Энэ нь анхны тоо байна.'
    }
}
if( input == 0 || input == 1) {
    result = 'Энэ нь анхны тоо биш байна.'
}
else if ( input == 2 ) {
    result = 'Энэ нь анхны тоо байна.'
}
alert( result )