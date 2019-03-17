/*var n=100;
for (var num = 2; num <= n; num++) {

  var a = false;//not prime
  for (var i = 2; i <= num; i++) {
      if (num%i===0 && i!==num) {
          a = true;
      }
  }
  if (a === false) {
    console.log(num);
  }
}

var num=1;*/
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
    console.log(num);

  }
    }
  }
  console.log(number(100));
