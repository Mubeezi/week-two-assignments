
// var d = "2000-10-09";

// var d = new Date();

//list = d.split('-');

//yr = list[0];

//age = 2019 - parseInt(yr);

//console.log(age);

const ageCalc=(x,y)=>
  y.slice(6,10)-x.slice(6,10);
    console.log(ageCalc("10-09-2000","03-15-2019"))
