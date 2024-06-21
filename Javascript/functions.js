console.log('hello');

console.log(Math.max(20, 20, 2001 , 200));


var a = 8;
var b = 12;
console.log(a/b);


var  adividedbyb = divide(a, b);
function divide (firstnum, secondnum) {

  console.log(firstnum / secondnum);
  // return firstnum / secondnum;
}


function divide (a, b) {
  
  // console.log(firstnum / secondnum);
  return a / b;
}


var  adividedbyb = divide(12, b);


function divide (firstnum ) {
  return firstnum / b;
}

var adividedbyb = divide (a);


// function doubleNumber(x) {
//   return x * 2;
// }


var a = 8;
var b = 12;
var c = 10;
function changeC (value) {
  var c = 100;
  return c;
}

console.log(c);
// changeC(100);
var d = changeC(100);
console.log(c);
console.log('d equals ' + d);





var highestgrade ;
var grade1 = 60;
    grade2 = 100;
    grade3 = 90;

function findhighestgrade (grade) {
  if (typeof highestgrade == 'number') {
    if (grade > highestgrade) {
      highestgrade = grade;
    }
  }
  else {
    highestgrade = grade;
  }
}

console.log(findhighestgrade(grade1));
console.log(findhighestgrade(grade2));
console.log(findhighestgrade(grade3));