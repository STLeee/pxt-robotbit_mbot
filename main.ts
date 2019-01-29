//% color="#7F7FFF" weight=10 icon="\uf7c0"
namespace robotbit_mbot
{
    //% blockId=robotbit_mbot_show_number
    //% block="show|number %v"
    //% v.min=0 v.max=9
    export function showNumber(v: number, interval: number = 150): void
    { 
        serial.writeString(v + "\r\n");
    }
}