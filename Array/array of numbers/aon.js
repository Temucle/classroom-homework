arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
max = Math.max(...arrayOfNumbers);
min = Math.min(...arrayOfNumbers);
console.log(arrayOfNumbers);
let result = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  result += arrayOfNumbers[i];
}
console.log(`niilber ni ${result}`);
console.log("hamgiin ih " + max);
console.log("hamgiin baga " + min);
arrayOfNumbers.push(`push hiij oruulj irev 12`)
arrayOfNumbers.unshift(`unshift ashiglan oruulj irev 21`)