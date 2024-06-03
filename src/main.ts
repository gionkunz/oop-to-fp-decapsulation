export class Circle {
  constructor(
    public x: number,
    public y: number,
    public radius: number) {

  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    return `Circle(${this.x}, ${this.y}): Diameter: ${this.radius*2}`;
  }
}

const circle = new Circle(10, 10, 5);
console.log(circle.draw());
circle.moveTo(20, 20);
console.log(circle.draw());
