var names = ['mike' , 'sarah' , 'peter'];

console.log(Math.random()*10)

Math.ceil(
  Math.random()*10
)

console.log(Math.ceil())

Math.floor(
  Math.random()*10
)

console.log(Math.floor())

Math.round(
  Math.random()*10
)

console.log(Math.round())


function rando (n) {
  return Math.floor(
    Math.random() * n
  )
}

names [rando(names.lenght)]

names.push('joe', 'snow', 'jessica');

var names2 = names;

var names3 = names.concat(['joe'])

console.log(names3)