radio.onReceivedNumber(function (receivedNumber) {
    EstatAlarma = receivedNumber
})
let EstatAlarma = 0
radio.setGroup(76)
EstatAlarma = 0
basic.forever(function () {
    if (EstatAlarma == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (EstatAlarma == 1) {
        basic.showIcon(IconNames.Sad)
    }
})
