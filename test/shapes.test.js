const { Shape, Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape Generation', () => {
  it('should generate a valid Circle SVG', () => {
    const circle = new Circle('Circle', 'blue', 'yellow', 'white');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="150" cy="100" r="95" fill="blue" />');
  });

  it('should generate a valid Triangle SVG', () => {
    const triangle = new Triangle('Triangle', 'red', 'green', 'lime');
    const svg = triangle.render(); 
    expect(svg).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
  });

  it('should generate a valid Square SVG', () => {
    const square = new Square('Square', 'purple', 'orange', 'pink');
    const svg = square.render();
    expect(svg).toEqual('<rect x="75" y="50" width="150" height="100" fill="purple" />');
  });
});
