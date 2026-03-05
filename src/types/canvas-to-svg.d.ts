declare module 'canvas-to-svg' {
  export default class C2S {
    constructor(width: number, height: number);
    beginPath(): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    fill(): void;
    stroke(): void;
    closePath(): void;
    fillText(text: string, x: number, y: number): void;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    font: string;
    getSerializedSvg(): string;
  }
}
