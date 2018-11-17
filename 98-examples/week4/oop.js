var Person = {
  firstname: "John",
  lastname: "Smith",
  printname: function(x){
    console.log( x.firstname, this.lastname );
  }
}

// Person.printname();

Person.firstname = 'Bobby';
Person.printname(Person);