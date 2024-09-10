basic.showIcon(IconNames.Heart)
let a = 0
basic.forever(function () {
    for (let a = 0; a <= 255; a++) {
        led.setBrightness(a)
        basic.pause(2)
    }
    for (let a = 0; a <= 255; a++) {
        led.setBrightness(255 - a)
        basic.pause(2)
    }
})
