'use strict';

const checkCounts = function (value) {
  let counter = 0;
  const odd = (number) => 3 * number + 1;
  const even = (number) => number/2;
  
  do {
    if(value % 2 !== 0) {
      value = odd (value);
      } else {
      value = even(value)
      }
    counter += 1;
  }while(value > 1)
  
  
  console.log(counter)
}
checkCounts(23061912);
