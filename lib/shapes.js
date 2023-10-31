// This is the main class that serves the base class for all shapes.
class Shape {
  constructor(text, color, backgroundColor) {
    this.text = text;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }
  render() {
    return '';
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="95" fill="${this.color}" />`;
  }
  logoMarkup(width, height) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="${this.backgroundColor}" />
        <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2 - 10}" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
  logoMarkup(width, height) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="${this.backgroundColor}" />
        <polygon points="${width / 2},${height / 6} ${width - width / 6},${height - height / 6} ${width / 6},${height - height / 6}" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="75" y="50" width="150" height="100" fill="${this.color}" />`;
  }
  logoMarkup(width, height) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" fill="${this.backgroundColor}" />
        <rect x="${width / 6}" y="${height / 6}" width="${width - width / 3}" height="${height - height / 3}" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = { Shape, Circle, Triangle, Square };