// var strnumber = 'two';
// var strvalue;

// if (strnumber === 'one') {
//   strvalue = 1;
// }

// if ( strnumber === 'two') {
//   strvalue = 2;
// }

// console.log(strvalue);

var strnumber = 'two'
var strvalue;

switch (strnumber) {

  case 'one':
    strvalue = 1;

  case 'two':
    strvalue = 2;
}

console.log(strvalue);

var strnumber = 'four'
var strvalue;

switch (strnumber) {

  case 'one':
    strvalue = 1;
    break;

  case 'two':
    strvalue = 2;
    break;

  case 'two+one':

  case 'three':
    strvalue = 3;
    break;

  case 'four':
    strvalue = 4;
    break;
}

console.log(strvalue);