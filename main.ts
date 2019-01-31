//% color="#7F7FFF" weight=10 icon="\uf188" block="MBot"
namespace robotbit_mbot {
    export enum PPin {
        //% block="P0"
        P0 = DigitalPin.P0,
        //% block="P1"
        P1 = DigitalPin.P1,
        //% block="P2"
        P2 = DigitalPin.P2,
        //% block="P8"
        P8 = DigitalPin.P8,
        //% block="P12"
        P12 = DigitalPin.P12,
        //% block="P13"
        P13 = DigitalPin.P13,
        //% block="P14"
        P14 = DigitalPin.P14,
        //% block="P15"
        P15 = DigitalPin.P15,
    }

    //% blockId=me_line_follower_sensor
    //% block="Me Line Follower Sensor|left pin %ppin1|right pin %ppin2"
    export function me_line_follower_sensor(ppin1: PPin, ppin2: PPin): number[] {
        let pin1: number = ppin1
        let pin2: number = ppin2
        let digitalpin1: DigitalPin = pin1
        let digitalpin2: DigitalPin = pin2

        let res1 = pins.digitalReadPin(digitalpin1)
        let res2 = pins.digitalReadPin(digitalpin2)
        return [res1, res2]
    }

    //% blockId=me_ultrasonic_sensor
    //% block="Me Ultrasonic Sensor|pin %ppin1"
    export function me_ultrasonic_sensor(ppin1: PPin): number {
        let pin1: number = ppin1
        let digitalpin1: DigitalPin = pin1

        pins.setPull(digitalpin1, PinPullMode.PullNone);
        pins.digitalWritePin(digitalpin1, 0);
        control.waitMicros(2);
        pins.digitalWritePin(digitalpin1, 1);
        control.waitMicros(10);
        pins.digitalWritePin(digitalpin1, 0);

        let res = pins.pulseIn(digitalpin1, PulseValue.High, 23000);
        return res * 5 / 3 / 58;
    }

    //% blockId=me_joystick
    //% block="Me Joystick|x pin %ppin1|y pin %ppin2"
    export function me_joystick(ppin1: PPin, ppin2: PPin): number[] {
        let pin1: number = ppin1
        let pin2: number = ppin2
        let analogpin1: AnalogPin = pin1
        let analogpin2: AnalogPin = pin2

        let res1 = pins.analogReadPin(analogpin1)
        let res2 = pins.analogReadPin(analogpin2)
        return [res1, res2]
    }

    //% blockId=me_potentionmeter
    //% block="Me Potentionmeter|pin %ppin1"
    export function me_potentionmeter(ppin1: PPin): number {
        let pin1: number = ppin1
        let analogpin1: AnalogPin = pin1

        let res1 = pins.analogReadPin(analogpin1)
        return res1
    }

    //% blockId=me_sound_sensor
    //% block="Me Sound Sensor|pin %ppin1"
    export function me_sound_sensor(ppin1: PPin): number {
        let pin1: number = ppin1
        let analogpin1: AnalogPin = pin1

        let res1 = pins.analogReadPin(analogpin1)
        return res1
    }
}