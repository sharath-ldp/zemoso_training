// Note that there's no function name before the parentheses

const avg = (...args) => {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  };
  
  // You can omit the `return` when simply returning an expression
  const sum = (a, b, c) => a + b + c;
  