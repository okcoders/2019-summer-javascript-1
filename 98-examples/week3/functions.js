var tmp = {
    repete3: function(x){
        for(var i = 1; i <= 3; i++){
            x();
        }
    },

    hello: function(){
        console.log("Goodbye");
    }
}

// function hello(){
//     console.log("Hello");
// }

var functionName = 'hello';

tmp['repete3']( tmp[functionName] );
tmp.repete3( tmp.hello );

var maths = {
    add: function(x,y){
        return x + y;
    }
}

console.log("Adding 4 + 3836");
var answer = maths.add(4,3836)
console.log(answer);
console.log("And add 384 and 387464643");
console.log(maths.add(384,387464643));