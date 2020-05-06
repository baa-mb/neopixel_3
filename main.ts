input.onButtonPressed(Button.A, function () {
    dauerlauf = 0
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    dauerlauf = 1
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    dauerlauf = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
})
let dauerlauf = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
dauerlauf = 1
basic.forever(function () {
    if (dauerlauf) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
    } else {
        strip.rotate(1)
        strip.show()
        basic.pause(1000)
    }
})
