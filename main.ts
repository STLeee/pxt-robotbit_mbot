//% color="#7F7FFF" weight=10 icon="\uf188" block="MBot"
namespace robotbit_mbot
{
	function motor(pin: number, speed: number) {
		let TM1 = speed % 256
		let TM2 = speed / 256
		let CH = (pin - 1) * 4 + 8
		pins.i2cWriteNumber(64, CH * 256 + TM1, NumberFormat.Int16BE, false)
		pins.i2cWriteNumber(64, (CH + 1) * 256 + TM2, NumberFormat.Int16BE, false)
    }
    
    export enum MPin
    {
        //% block="M1+"
        Mpin11 = 13,
        //% block="M1-"
        Mpin12 = 14,
        //% block="M2+"
        Mpin21 = 15,
        //% block="M2-"
        Mpin22 = 16,
        //% block="M3+"
        Mpin31 = 11,
        //% block="M3-"
        Mpin32 = 12,
        //% block="M4+"
        Mpin41 = 9,
        //% block="M4-"
        Mpin42 = 10,
    }

    //% blockId="move_motor_pin"
	//%block="move Motor at|pin %MPin|value %number"
	export function move_motor_pin(mpin: MPin, value: number): void {
		if (value > 100) value = 100
		if (value < 0) value = 0
		value = Math.map(value, 0, 100, 0, 4095)
		motor(mpin, value)	
	}
}