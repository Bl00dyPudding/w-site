window.onload = function () {
    counter(3578, 'main_mobile_devices_footer_wrap_clients_number')
}

function counter (num, selector) {
    const elem = document.querySelector(`.${selector}`)
    let number = 0
    const interval = setInterval(() => {
        elem.innerText = ++number
        if (number === num) clearInterval(interval)
    },10)
}
