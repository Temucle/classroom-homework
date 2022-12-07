var score = 0
const answer1 = '5'
let q1 = prompt("2+3= хэд вэ?")
if ( q1 == answer1 ) {
 score++
}
const answer2 = 'Ulaanbaatar'
let q2 = prompt('Монгол улсын нийслэл юу вэ?')
if ( q2 == answer2 ) {
    score++
}
const answer3 = 2022
let q3 = prompt('Одоо хэдэн он вэ?')
if ( q3 == answer3 ) {
    score++
}
const answer4 = "Apple"
let q4 = prompt('Алим гэдэгийг ангилиар бичнэ үү?')
if ( q4 == answer4 ) {
    score++
}
const answer5 = 3
let q5 = prompt('Монгол улс хэдэн сая хүн амтай вэ?')
if ( q5 == answer5 ) {
    score++
}

console.log('Та 5 аас',score, 'оноо авсан байна')
