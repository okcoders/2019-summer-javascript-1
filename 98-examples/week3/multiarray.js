var example = [ 
    [ 'a', 'b', 'c' ],
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    ['jim','john', 'joe'] ];

for(var i = 0; i < example.length; i++){
    var innerArray = example[i];
    for(var j = 0; j < innerArray.length; j++){
        console.log(innerArray[j]);
    }
}