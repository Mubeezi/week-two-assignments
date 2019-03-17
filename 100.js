
/*var x = 56;
for (var i=0; i >x; i++); {
 if(x<=100){
     console.log("input again");
 }
 else{ console.log(x)

 }
};*/
const apply = num =>{

  for (var nums =0; nums >num; nums++); {
   if(num<=100){
       return "input again";
   }
   else{
     return num;

   }
  };

}

console.log(apply(88));
