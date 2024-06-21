var myfavshows = [

  'games of thrones ',
  'friends',
  'the wires',
  'twin preaks',
  'dance'
];

// while loop ... for loop.

// var i = 10;

for (i =0; i < 10; i++) {
// while (i < 10) {
  console.log(i);
  // i++;
}

console.log('all done! ');

var i;
var show = '';
for (i =0; i < myfavshows.length; i++) {
  // while (i < 10) {
    // console.log(i);
    // i++;
    // show = show + i + ' - ' + myfavshows[i]
    show += '${ i + 1 } - $ { myfavshows[i] } \ n'
  }
  
  console.log(show);