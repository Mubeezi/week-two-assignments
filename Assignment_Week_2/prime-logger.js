var n=100;
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

var num=1;
