//% color="#7F7FFF" weight=10 icon="\uf188" block="MBot"
namespace robotbit_mbot
{
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
    //% block="Me Line Follower Sensor|pin1 %ppin1|pin2 %ppin2"
    export function me_line_follower_sensor(ppin1: PPin, ppin2: PPin): number[]
    {
        var ppin1str: string = PPin[ppin1];
        var ppin2str: string = PPin[ppin2];
        var digitalpin1: DigitalPin = DigitalPin[ppin1str]
        var digitalpin2: DigitalPin = DigitalPin[ppin2str]
        let res1 = pins.digitalReadPin(digitalpin1)
        let res2 = pins.digitalReadPin(digitalpin2)

        return [digitalpin1, digitalpin2]
    }
    
    //% blockId=me_ultrasonic_sensor
    //% block="Me Ultrasonic Sensor|pin1 %ppin1"
    export function me_ultrasonic_sensor(ppin1: PPin): number
    {
        return 0
    }
    
    //% blockId=me_joystick
    //% block="Me Joystick|pin1 %ppin1|pin2 %ppin2"
    export function me_joystick(ppin1: PPin, ppin2: PPin): number
    {
        return 0
    }
    
    //% blockId=me_potentionmeter
    //% block="Me Potentionmeter|pin1 %ppin1"
    export function me_potentionmeter(ppin1: PPin): number
    {
        return 0
    }
    
    //% blockId=me_sound_sensor
    //% block="Me Sound Sensor|pin1 %ppin1"
    export function me_sound_sensor(ppin1: PPin): number
    {
        return 0
    }
}