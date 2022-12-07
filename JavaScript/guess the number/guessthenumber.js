let random = Math.floor( Math.random() * 100 ) + 1
console.log( random )
let answer = prompt('1-100 хооронд тоо таана уу.')
while ( answer != random ) {
    if ( answer < random ) {
        answer = prompt('Таны хариу бага байна.')
    }
    else {
        answer = prompt('Таны хариу их байна.')
    }
}
if ( answer == random ) {
    alert(`Congratulations!!! Та ${random} тоог амжилттай таалаа`)
}
