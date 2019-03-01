// Button 5

var btn5 = document.querySelector('#btn5')

// Other Buttons Text

var btn1 = document.querySelector('#btn-text-1')
var btn2 = document.querySelector('#btn-text-2')
var btn3 = document.querySelector('#btn-text-3')
var btn4 = document.querySelector('#btn-text-4')
var btn6 = document.querySelector('#btn-text-6')
var btn7 = document.querySelector('#btn-text-7')
var btn8 = document.querySelector('#btn-text-8')
var btn9 = document.querySelector('#btn-text-9')

// Store grid state to render according to number
var clickCount = 1

function spinButtons(a, b, c, d, e, f, g, h) {
    // assing each button a value received according to grid state count
    btn1.innerHTML = a
    btn2.innerHTML = b
    btn3.innerHTML = c
    btn4.innerHTML = d
    btn6.innerHTML = e
    btn7.innerHTML = f
    btn8.innerHTML = g
    btn9.innerHTML = h
}

btn5.addEventListener('click', function (e) {
    // if count has reached top, reset it
    if (clickCount === 8) clickCount = 0

    // increase count, which will render different output according to number
    clickCount++

    // render based by clickCount. Render values are passed in the function

    if (clickCount === 1) spinButtons(1, 2, 3, 4, 6, 7, 8, 9)
    if (clickCount === 2) spinButtons(4, 1, 2, 7, 3, 8, 9, 6)
    if (clickCount === 3) spinButtons(7, 4, 1, 8, 2, 9, 6, 3)
    if (clickCount === 4) spinButtons(8, 7, 4, 9, 1, 6, 3, 2)
    if (clickCount === 5) spinButtons(9, 8, 7, 6, 4, 3, 2, 1)
    if (clickCount === 6) spinButtons(6, 9, 8, 3, 7, 2, 1, 4)
    if (clickCount === 7) spinButtons(3, 6, 9, 2, 8, 1, 4, 7)
    if (clickCount === 8) spinButtons(2, 3, 6, 1, 9, 4, 7, 8)
})
