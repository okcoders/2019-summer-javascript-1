## Nesting Arrays

Create *multidimensional* arrays by nesting arrays inside one another. Because an array is a collection of items, which are really just values, and an array is itself a value, the item at some index can be another array:

	var fourxfour = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	]

Notice the use of commas to separate items inside the nested array as well as the arrays from one another. `fourxfour` is now a two dimensional array, or array of arrays:

	> fourxfour
	[ [ 0, 0, 0, 0 ],
	  [ 0, 0, 0, 0 ],
	  [ 0, 0, 0, 0 ],
	  [ 0, 0, 0, 0 ] ]

Access the inner arrays with single bracket notation and the items inside them with double bracket notation:

	> fourxfour[0]
	[ 0, 0, 0, 0 ]

	> fourxfour[0][0]
	0

You could make 3D or even 4D arrays although two dimensions are the most common.

## Nesting Objects inside Arrays

It is common in javascript to use arrays of objects. Nest objects inside the arrays just as you would normally create objects. Watch your syntax and make sure to include commas in the correct places:

	var people = [
		{
			name: "Zach Mays",
			age: 26,
			sex: 'M'
		},
		{
			name: "Margaret Atwood",
			age: 29,
			sex: F
		},
		{
			name: "Justin Amazing",
			age: 15,
			sex: M
		}
	]

Access an object in the array using its position and array bracket notation:

	> people[0]
	{ name: 'Zach Mays',
	  age: 26,
	  sex: 'M' }

And access one of the object's properties using bracket notation for the array index and dot notation for the property:

	> people[0].name
	'Zach Mays'

