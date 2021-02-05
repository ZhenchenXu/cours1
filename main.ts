let Mode_math = 0
basic.showString("Mode icone")
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (Mode_math == 0) {
            basic.showIcon(IconNames.Asleep)
        }
        if (Mode_math == 1) {
            basic.showString("1")
        }
        if (Mode_math == 2) {
            basic.showString("A")
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (Mode_math == 0) {
            basic.showIcon(IconNames.Happy)
        }
        if (Mode_math == 1) {
            basic.showString("2")
        }
        if (Mode_math == 2) {
            basic.showString("B")
        }
    } else if (input.buttonIsPressed(Button.AB)) {
        if (Mode_math == 0) {
            basic.showString("Mode Math")
            Mode_math = 1
            basic.clearScreen()
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (Mode_math == 1) {
            basic.showString("Mode lettre")
            Mode_math = 2
            basic.clearScreen()
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (Mode_math == 2) {
            basic.showString("Mode icone")
            Mode_math = 0
            basic.clearScreen()
        }
    }
}
basic.forever(function () {
	
})
