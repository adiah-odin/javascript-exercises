Get the list of items to search for.

For each item, 
	use indexOf item and then slice/splice the array there.
	repeat until indexOf returns -1


let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
        fruits.indexOf('dates');    -> -1

slice returns a new copy of the elements in the array:
if the return from indexOf is not "-1", then do a slice (array.slice(0, value) + array.slice(value+1))