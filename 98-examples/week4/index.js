var user1 = {
    firstname: 'Bob',
    lastname: 'Rockers',
    address: '4113 Nicole Pl',
    phone: '555-555-1212',
    age: 42
}

var user2 = {
    firstname: 'Zack',
    lastname: 'Mayes',
    address: '123 Smith St',
    phone: '555-555-1213',
    age: 12
}

var weddinglist = [
    'old',
    'new',
    'barrowed',
    'red'
]

var userlist = [
    user1,
    user2
]

// console.log(userlist[1].firstname);

var addressbook = [
    {
        firstname: 'Bob',
        lastname: 'Rockers',
        address: '4113 Nicole Pl',
        phone: '555-555-1212',
        age: 42
    },
    {
        firstname: 'Carson',
        lastname: 'Smith',
        address: '4567 Eigth Stree',
        phone: '555-555-9999',
        age: 23
    },
    {
        firstname: 'Zack',
        lastname: 'Mayes',
        address: '123 Smith St',
        phone: '555-555-1213',
        age: 12
    }
];

function printFirstnames(add){
    for(var i=0;i<add.length;i++){
        console.log(add[i].firstname)
    }
}

var ourFunction = function(thing){
    for(var i = 0; i<thing.length;i++){
        console.log(thing[i].lastname);
    };
}

function forEach(arr1, func1){
    for(var i=0; i<arr1.length; i++){
        // printName(addressbook[i])
        func1(arr1[i]);
    }
}

function printContact(add){
    for(var i=0;i<add.length;i++){
        console.log("=================================")
        console.log(add[i].firstname, add[i].firstname)
        console.log(add[i].address)
        console.log(add[i].phone)
        console.log("=================================")
        console.log("")
    }
}

var printContact2 = function(contact){
        console.log("=================================")
        console.log(contact.firstname, contact.firstname)
        console.log(contact.address)
        console.log(contact.phone)
        console.log("=================================")
        console.log("")
}

// printContact(addressbook);
forEach(addressbook, printContact2);


// printFirstnames(addressbook);

// ourFunction(addressbook);

function ourConsole(message1){
    return function(message2){
        console.log("This is our message1 out: " +message1);
        console.log("This is our message2 out: " +message2);
    }
}

var mgs = ourConsole("Hello");
// mgs("Goodbye")

// arr1 = addresssbook
// func1 = function printName 

// addressbook[i] = x
function printName(x){
    console.log(x.firstname, x.lastname);
}

// forEach(addressbook,printName);

function printAddr(x){
    console.log(x.address);
}


// forEach(addressbook,printAddr);

// // var func2 = function(x){console.log(x.phone)}

// // forEach(addressbook,func2);
// forEach(addressbook, function(x){
//     console.log(x.phone)
// });

var printhello = function(){
    console.log("Hello Everyone!!!")
}  

// https://code.jquery.com/jquery-3.3.1.js
// https://jsonplaceholder.typicode.com/todos/1
setTimeout(function(){
    console.log("Hello World")
}, 5000);