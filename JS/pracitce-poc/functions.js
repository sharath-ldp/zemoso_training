function add(x, y) {
    const total = x + y;
    return total;
  }

  
 add(10,50,7) //gives 60 & 7 is ignored

//------------------------------------------------------------------- 
 
//rest operator
 function avg(...args) {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  }
  
  let res = avg(2, 3, 4, 5); // 3.5
  console.log(res)
  
//------------------------------------------------------------------- 
 
