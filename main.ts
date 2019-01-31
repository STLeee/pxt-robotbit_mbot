//% color="#7F7FFF" weight=10 icon="\uf188" block="MBot"
namespace robotbit_mbot
{
    export enum PPin {
        //% block="P0"
        PPin0 = 0,
        //% block="P1"
        PPin1 = 1,
        //% block="P2"
        PPin2 = 2,
        //% block="P8"
        PPin8 = 8,
        //% block="P12"
        PPin12 = 12,
        //% block="P13"
        PPin13 = 13,
        //% block="P14"
        PPin14 = 14,
        //% block="P15"
        PPin15 = 15,
    }
    
    //% blockId=me_line_follower_sensor
    //% block="Me Line Follower Sensor|pin1 %ppin1|pin2 %ppin2"
    export function me_line_follower_sensor(ppin1: PPin, ppin2: PPin): number
    {
        return 0
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