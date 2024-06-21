var i = 0;

while (i < 20) {
  i++;
  if(i % 2 === 0) {
    continue;
  }
  console.log(`${i} is odd!`);
}

console.log('\n -- the end');


for (i = 0; i < 20; i++) {
  if (i === 13) {
    console.log('unlucky!');
    break;

  }
  console.log(`${i} is odd!`);
}

console.log('\n -- the end');