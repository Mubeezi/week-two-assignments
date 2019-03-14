
/
const transcationCharge = 0.025;
//determines the transaction charge//

  var amountTendered = 100000;

  console.log( 'This is what the billed amount is (less transaction charges)');
   var billed_amount = amountTendered -(transcationCharge*amountTendered) ;
  console.log( billed_amount );
