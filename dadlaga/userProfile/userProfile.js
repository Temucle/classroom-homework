fetch('https://randomuser.me/api').then((res) => {
    return res.json()
}).then((userData) => {
    console.log(userData.results)
    console.log(document.querySelectorAll('.userPic img'))
    for ( let i = 0; i < 3; i++ ) {
    document.getElementsByClassName('userName')[i].innerHTML = userData.results[0].name.first + " " + userData.results[0].name.last
    document.getElementsByClassName('userMail')[i].innerHTML = userData.results[0].email
    document.getElementsByClassName('userCell')[i].innerHTML = userData.results[0].cell
    document.getElementsByClassName('userIMG')[i].setAttribute("src", userData.results[0].picture.large)
    }
})
