const shuffle = require("./shuffler.js"); //link shuffler
var prime=[];
const number = (n) =>
{
  for (var num = 2; num <= n; num++) {

    var a = false;
    for (var i = 2; i <= num; i++) {
        if (num%i===0 && i!==num) {
            a = true;
        }
    }
    if (a === false) {
     prime.push(num);
//add prime number to array prime
  }

}
console.log(prime);
console.log(".............................................................")

var b=shuffle(prime);
return b;





  }
number(100); //calls function


let sortAll = (arr) => {

	let swapped;
	let size = arr.length -1;

	do {
		swapped = false;

		for (let i = 0; i < size; i++) {
			//
			if (arr[i] > arr[i+1]) {
				const temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped=true;
			}
		}
	} while(swapped);
	return arr;
}

console.log(sortAll(shuffle(number(100))));
