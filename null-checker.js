/*var a = 1;

if (a>0) // the value is greater than zero'
{
console.log(1);
}
else if (a<0) //less than zero'
{
console.log(-1);
}

else
{
console.log(0);// equals zero' */
var x = (t) => { return t > 2? 'val is greater than 2': t < 2? 'val is less than 2': t == 2? 'val is equal to 2': 'not known'}
console.log(x(15));
