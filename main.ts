input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
