/*  var a=1
  while(a<=100){
    if(a%3===0 && a%5===0){
      console.log("fizzbuzz");
    }
    else if(a%3===0){console.log("fizz");
    }
  else if(a%5===0){console.log("buzz");
    }
    else{
      console.log(a);
    }
    a++;
  }*/

  var fizzBuzz = num => {
for (var n =1; n <= num; n++){
if (n%3===0 && n%5===0){
console.log("FizzBuzz!");
}else if (n%3===0) {
console.log("Fizz!");
}else if (n%5===0){
console.log("Buzz!");
}else{
console.log(n);
}
}
return ("finished!");
}
fizzBuzz (100)
