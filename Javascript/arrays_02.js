var gameofthrones = 'Game of Thrones',
    friends = 'Friends'
    breakingbad = 'Breaking Bad'
    thewire = 'The Wire'
    humans = 'Humans';


// top5Shows(gameofthrones , friends, breakingbad, thewire, humans)

var myfavshows = Array (
  gameofthrones, friends, breakingbad, thewire, humans
);


console.log(myfavshows);

top5Shows(myfavshows);
function top5Shows(show1, show2, show3, show4, show5) {
  console.log (`
  Here are my 5 favorite shows!
  -----------------------
  
  1.${ show1 }
  2.${ show2 }
  3.${ show3 }
  4.${ show4 }
  5.${ show5 }
  `)
};

// console.log(length.myfavshows);

var myfavshows = [
  'gameofthrones',
  'friends',
  'breakingbad',
  'thewire',
  'humans',
  'mickel'
];


// console.log(myfavshows);

top5Shows(myfavshows);
function top5Shows(show) {
  show.sort()
  console.log (`
  Here are my 5 favorite shows!
  -----------------------
  
  1.${ show[0] }
  2.${ show[1] }
  3.${ show[2] }
  4.${ show[3] }
  5.${ show[4] }
  `)
};