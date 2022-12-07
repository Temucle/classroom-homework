const secretcode = 'sesame'
let passcode = prompt( "PASSWORD")
let i = 0
if ( secretcode == passcode ) {
    alert('SUCCESSFULLY LOGIN!!!')
}
else {
    while ( i < 4 ) {
        i++
        let passcode = prompt( "INCORRECT PASSWORD!!! TRY AGAIN" )
        if ( passcode == secretcode ) {
            let i = 5
            alert('SUCCESSFULLY LOGIN!!!')
        }
        else if ( i == 4 ) {
            alert("5 TIMES FAILED BLOCKED!!!")
        }
    }
}