/*
  Same logic as before but now we're "decapuslating" and separating the
  data from the behavior.

  This FP style approach comes with many benefits:
  - Clear separation from Model and Behavior
  - Plain data objects to describe entities
  - Behavior is more flexible for accepting changes of models, different models etc.
  - Behavior can mostly be represented as pure functions
  - Immutability and all it's benefits
  - You can still use ESModules to structure your code (Model, data and behavior in same module)
*/

export interface Circle {
  readonly x: number;
  readonly y: number;
  readonly radius: number;
}

function moveTo(circle: Circle, x: number, y: number): Circle {
  return {
    ...circle,
    x,
    y
  };
}

export function draw(circle: Circle) {
  return `Circle(${circle.x}, ${circle.y}): Diameter: ${circle.radius*2}`;
}

let circle: Circle = {
  x: 10,
  y: 10,
  radius: 5
};
console.log(draw(circle));
circle = moveTo(circle, 20, 20);
console.log(draw(circle));
