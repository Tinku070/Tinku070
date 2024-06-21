var paycheck = 400;
var bankaccount = 1000;

var carpaymentispaid = false;
var carpayment = 450;

// try to pay car payment with paycheck
if (paycheck >= carpayment) {
  paycheck -=  carpayment;
  carpaymentispaid = true;
}
else if (bankaccount >= carpayment){
  bankaccount -= carpayment;
  carpaymentispaid = true;
}

else {
  
}


if (carpaymentispaid) {
  console.log ('Thank you for paying your car payment!');

}
else {
  console.log('Please pay your car payment!');
}

console.log('- paycheck =' + paycheck)
console.log('- bankaccount =' + bankaccount)