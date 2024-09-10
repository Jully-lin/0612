def on_button_pressed_a():
    basic.show_string("Hello!")
    basic.pause(200)
    basic.show_number(2)
input.on_button_pressed(Button.A, on_button_pressed_a)
