// src/functions/filterOddEven.js

function filterOdd(...numbers) {
    return numbers.filter((num) => num % 2 !== 0);
  }
  
  function filterEven(...numbers) {
    return numbers.filter((num) => num % 2 === 0);
  }
  
  function generateRandomList(n = 7) {
    const randomList = [];
  
    for (let i = 0; i < n; i++) {
      randomList.push(Math.floor(Math.random() * 100) + 1);
    }
  
    return randomList;
  }
  
  export { filterOdd, filterEven, generateRandomList };