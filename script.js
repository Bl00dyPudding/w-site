window.onload = function () {
    counter(3578, 'number_clients')
    counter(207, 'number_coffee')
    counter(2500, 'number_posts')
    counter(873, 'number_likes')
    counter(900, 'number_launched')
    // counter(вписать число, 'название класса')
}

function counter (num, selector) {
    const elem = document.querySelector(`.${selector}`)
    let number = 0
    const interval = setInterval(() => {
        elem.innerText = ++number
        if (number === num) clearInterval(interval)
    },10)
}
