function sortear() {

    let aleatorio = Math.random()
    let num = Math.trunc( aleatorio * 100)

    let res = document.getElementById('result')
    res.innerHTML += '<p>Acabei de sortear o número <mark>${num}</mark>!</p>'
}
function limpar() {
    let res = document.getElementById('result')
    res.innerHTML = null
}