// Note the { } braces: this is destructuring an object
function area({ width, height }) {
    return width * height;
  }
  
  // The { } braces here create a new object
  console.log(area({ width: 2, height: 3 }));
  