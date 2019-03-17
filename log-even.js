/*   for ( i = 2; i<= 20; i++)
      {if (i%2===0) {console.log(i)
      }

   }
*/
let evens = (min, max) => {
	for (var i = min; i <= max; i++) {
		i%2 === 0? console.log(i):null;
	}
}

evens(2,20);
