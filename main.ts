input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("Hello!")
    basic.pause(5000)
})
basic.forever(function on_forever() {
    basic.showNumber(0)
})
