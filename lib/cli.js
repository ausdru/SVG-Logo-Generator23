// 'fs' module providing functionality, assisting with saving the newly generated SGV to a file.
const fs = require('fs'); 

// Inquirer is used to prompt the user input and collect answers.
const inquirer = require('inquirer'); 

// It exports the array of colors from our colors.js file.
const colors = require('./colors.js'); 

// Circle, triangle, and square are classes being defined in 'shapes.js'.
const { Circle, Triangle, Square } = require('./shapes.js'); 


console.log('Hello, and welcome to the SVG Logo Generator(v1)!');


// The CLI class managing the command-line interface, aides in the process of logo generation.
class CLI {
  async run() { // 'async run()' runs the logo generation process.
    try {
      const answers = await inquirer.prompt([ // This returns a promise with an object containing the users' answers.
        {
          type: 'input',
          name: 'text', 
          message: 'Enter text for your logo (No more than 3 characters).',
          validate: (input) => {
            if (input.length <= 3) { 
              return true;
            }
            return 'Please enter a maximum of 3 characters.';
          },
        },
        {  
          type: 'list',
          name: 'shapeColor',
          message: 'Select a color for your shape.',
          choices: colors,
        },
        { 
          type: 'list', 
          name: 'backgroundColor', 
          message: 'Select a color for your background.', 
          choices: colors, 
        }, 
        { 
          type: 'list',
          name: 'shape',
          message: 'Select a shape you want to use for your logo.',
          choices: ['square', 'circle', 'triangle'],
        },
        { 
          input: 'input', 
          name: 'width', 
          message: 'Enter the width of your logo (suggested between 200px and 400px).',
          validate: (input) => { // Height & width must be number greater than 0.
            if (Number.isInteger(+input) && +input > 0) {
              return true; 
            }
            return 'Please enter a positive integer.'; 
          }, 
        }, 
        {
          type: 'input', 
          name: 'height', 
          message: 'Enter the height of your logo (suggested between 200px and 400px).', 
          validate: (input) => {
            if (Number.isInteger(+input) && +input > 0) {
              return true; 
            } // If the input isn't bigger than 0, the message is displayed.
            return 'Please enter a positive integer.';
          }, 
        }, 
      ]);

      const { text, shapeColor, backgroundColor, shape, width, height } = answers; 
      this.generateLogo(text, shapeColor, backgroundColor, shape, width, height);
    } catch (error) { // This catches any error that may occur during the process.
      console.error('Something went wrong:', error);
    }
  }

  generateLogo(logoText, shapeColor, backgroundColor, shape, width, height) {
    let shapeObj;
  
    switch (shape) { // Switch statement checks the value of the shape input to determine the end-product's shape generation.
      case 'circle':
        shapeObj = new Circle(logoText, shapeColor, backgroundColor);
        break;
      case 'triangle':
        shapeObj = new Triangle(logoText, shapeColor, backgroundColor);
        break;
      case 'square':
        shapeObj = new Square(logoText, shapeColor, backgroundColor);
        break;
      default:
        console.log('Invalid shape!');
        return;
    }
  
    const svgMarkup = shapeObj.logoMarkup(width, height);
    this.saveSvgToFile(svgMarkup);
  }
  

  saveSvgToFile(svgMarkup) { 
    const fileName = `./examples/newlogo.svg`;

    // 'fs.writeFile' writes data to a file async, svgMarkup is the data that will be written to the file.
    fs.writeFile(fileName, svgMarkup, (err) => {  
      if (err) {
        console.log('Error saving SVG file:', err);
      } else {
        console.log(`Logo generated successfully and saved under: ${fileName}`);
      }
    });
  }
}

module.exports = CLI;
