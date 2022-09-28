// Created by: Owen Whalley
// Created on: 2022/09/28
// 
// This sets hunger to 0 on start.
let hunger = 0
// Created by: Owen Whalley
// Created on: 2022/09/28
// 
// If A button is pressed, it increases hunger by one and shows the value on the microbit. If button B is pressed, it resets hunger and shows the value.
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hunger = hunger + 1
        basic.showNumber(hunger)
    } else if (input.buttonIsPressed(Button.B)) {
        hunger = 0
        basic.showNumber(hunger)
    }
})
