function changeBg() {
    const p = document.getElementsByTagName('p')
    for ( i=0; i<p.length; i++) {
    p[i].style.backgroundColor = 'red'
    }
}