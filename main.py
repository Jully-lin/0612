def on_button_pressed_a():
    basic.show_string("Hello!")
    basic.pause(5000)
    basic.show_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
