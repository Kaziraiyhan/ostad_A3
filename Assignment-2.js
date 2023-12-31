// 2) javascript function returns

function maxNumber(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  const numbers1 = [10, 20, 5, 30, 25];
  console.log(maxNumber(numbers1));
  
  const numbers2 = [5, 15, 7];
  console.log(maxNumber(numbers2));
  
  const emptyArray = [];
  console.log(maxNumber(emptyArray));
  