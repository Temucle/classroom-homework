let min = prompt('Minimum тоог оруулна уу?')
let max = prompt('Maximum тоог оруулна уу?')
let nmin = Number(min)
let nmax = Number(max)
let range = (nmax-nmin) + 1
let random = Math.floor( Math.random()*range ) + nmin
console.log(random)
