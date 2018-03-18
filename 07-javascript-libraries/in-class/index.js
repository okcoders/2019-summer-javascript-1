var _ = require("lodash")

var arrayObject = [
  {name: "bob", favoriteColor: "blue"},
  {name: "zach", favoriteColor: "green"}
]


function sayHi(name, secondName, collection) {
  arrayObject[1].secondFavoriteColor = "pink"
  return "hi " + name + " and " + secondName
}

function forEach(collection, func) {
  for(var i = 0; i < collection.length; i++) {
    var result = func(collection[i])
    console.log(result)
  }
}

// forEach([1, 2, 5, 8, 9, 4], function(elem) {
//   return elem * elem
// })

function map(collection, func) {
  var mapped = []
  for(var i = 0; i < collection.length; i++) {
    var result = func(collection[i])
    console.log(result)
    mapped.push(result)
  }
  return mapped
}

var result = _.map([1, 2, 5, 8, 9, 4], function(elem) {
  return elem * elem
})


// find a function that turns the below into an array by splitting on the
// comma
var stringWCommas = "1, 2, 3, 7, 8"
// console.log(_.split(stringWCommas, ','))

var myArray = [1, 2, 4]
// console.log(_.head(myArray))
// console.log(_.tail(myArray))
// find a function that gives the first elem
// find a function that gives everything but the first elem

var dupArray = [1, 1, 1, 3, 3, 5, 5, 7, 8, 9]
console.log(_.uniq(dupArray))
// find a function that gives back unique values from above
// find a function that gives the sum of the above numbers















