let Name = prompt('Таний нэр хэн бэ?')
const date = new Date()
const time = date.getHours()
if (time <=5 ) {
    console.log(Name)
}
else if (time <= 5) {
    console.log(Name, 'таньд' , date , '-ний шөнийн мэнд хүрье!')
}
else if (time <= 12) {
    console.log(Name, 'таньд' , date , '-ний өглөөний мэнд хүрье!')
} 
else if (time <= 18) {
    console.log(Name, 'таньд' , date , '-ний өдрийн мэнд хүрье!')
} 
else {
    console.log(Name, 'таньд' , date , '-ний оройний мэнд хүрье!')
} 