#26 Functions From Lodash

## add

Adds two numbers.

### Arguments

x: The first number in an addition.
y: The second number in an addition.

### Returns

Integer

### Example
```
add(6, 4);
//returns 10
```

## camelCase

Converts string to camel case.

### Arguments

string: the string to convert to camel case

### Returns

String after conversion to camel case (first letter in each word is capitalized except for the first 
word, which is lowercase)

### Example
```
camelCase('--foo-bar--')
//returns 'fooBar'
```


## capitalize

Converts the first character of a string to uppercase and the remaining to lowercase.

### Arguments

string: the string to capitalize

### Returns

String after converting first letter to capital and remaining letters to lowercase.

### Example
```
capitalize('aPPle pIE')
//returns 'Apple pie'
```

## chunk

Splits an array into smaller arrays with each having the length of a given number

### Arguments

array: the array to split up
number: the length of each smaller array created after splitting up array

### Returns

An array of smaller arrays made of elements from a larger array. Each element's length is the same as the number chosen
when the function was called. If the array cannot be split evenly, there will be a final chunk with remaining
elements.

### Example
```
chunk(['a', 'b', 'c', 'd'], 2)
//returns [['a', 'b'], ['c', 'd']]
```


## compact

Creates an array with all falsey values removed.

### Arguments

array: the array from which falsey values will be removed

### Returns

An array with falsey values removed

### Example

```
compact(['bat', 'cap', '', null, 'tree', undefined])
//returns ['bat', 'cap', 'tree']

```

## concat

Creates a new array concatenating an array with additonal arrays and/or values.

### Arguments

array: the array to concatenate
values: values to concatenate with the array

### Returns

An array with the values from the original array as well as additional arrays and/or values 
that were provided as arguments.

### Example

```
concat(['Learners Guild'], 'laptops', 'giant monitors', [['desks', 'people']])
//returns ['Learners Guild', 'laptops', 'giant monitors', ['desks', 'people']]

```

## divide

Divide two numbers

### Arguments

x: the numerator
y: the denomenator

### Returns

Integer

### Example

```
divide(1, 5)
//returns 0.2

```

## drop

Slices n elements from the beginning of an array.

### Arguments

array: the array from which to drop elements
n: the number of elements to drop

### Returns

An array with n elements dropped from the beginning

### Example

```
drop([1, 2, 3], 2)
//returns [3]

```

## join

Converts all elements in an array into a string seperated by a given separator

### Arguments

array: the array to convert
separator: the seperator to put between elements after conversion of the array into a string

### Returns

A string made of the array's elements seperated by a given separator

### Example

```
join([2, 4, 6, 8, 'Who', 'do', 'we', 'appreciate.'], ' ')
//returns '2 4 6 8 Who do we appreciate.'

```

## kebabCase

Converts string to kebab case

### Arguments

string: the string to be converted into kebab case

### Returns

A string with a dash between each word

### Example

```
kebabCase('_*_&Our_$String')
//returns 'our-string'

```

## last

Gets the last element of an array.

### Arguments

array: the array from which the last element is wanted

### Returns

The value of the last element of the array

### Example

```
last(['a', 'b', 'c'])
//returns 'c'

```

## lowerFirst

Converts the first character of a string to lowercase, with other characters unchanged

### Arguments

string: the string to convert

### Returns

A string with the first character changed to lowercase

### Example

```
lowerFirst('THIS iS A 100$ bill')
//returns 'tHIS iS A 100$ bill'

```

## min

Computes the minimum value of an array

### Arguments

array: the array from which to find the minimum value

### Returns

The smallest value from the given array

### Example

```
min([8, 17, 45, 1, 5, 7, 19, 1, 47])
//returns 1

```

## multiply

Multiplies two numbers

### Arguments

x: the first factor being multiplied
y: the second factor being multiplied

### Returns

Integer

### Example

```
multiply(-4, 2)
//returns -8

```

## nth

Gets element at index n of an array.

### Arguments

array: the array from which to find element at index n
n: the index from which to return the value

### Returns

Value of element at index n of an array. If n is negative, the nth element from the end is returned

### Example

```
nth([2, 4, 6, 8, 10], -3)
//returns 6

```

## pull

Removes all given values from an array

### Arguments

array: the array to modify
values: the values to remove from the array

### Returns

The array containing only the remaining values after values from arguments are removed

### Example

```
pull([1, 2, 3, 1, 2, 3], 1, 3)
//returns [2, 2]

```

## range

Creates an array of numbers progressing from a starting point up to an ending point (not including end value).

### Arguments

start: the start of the range
end: the end of the range
step: the value to increment or decrement by

### Returns

An array with the numbers from start to end (not encluding end value)

### Example

```
range(-1, 5)
//returns [-1, 0, 1, 2, 3, 4]

```

## repeat

Repeats the given string n times

### Arguments

string: the string to repeat
n: the number of times to repeat the string

### Returns

A string made up of the given string repeated n times

### Example

```
repeat('*', 3)
//returns '***'

```

## reverse

Reverses array so first element becomes the last, second becomes second to last and so on...

### Arguments

array: the array to reverse

### Returns

An array with the given array's elements in reversed order

### Example

```
reverse([1, 2, 3])
//returns [3, 2, 1]

```

## slice

Creates a slice of an array from a given starting point, up to but not including a given end.

### Arguments

array: the array to slice
startingIndex: starting point
endingIndex: end

### Returns

An array sliced from a larger array

### Example

```
slice([1, 2, 3, 4, 5, 6], 1, 5)
//returns [2, 3, 4, 5]

```

## snakeCase

Converts a string to snake case

### Arguments

string: the string to convert

### Returns

A string with an underscore between each word

### Example

```
snakeCase('some string')
//returns ‘some_string’

```

## startsWith

Checks if a given string starts with a given string value

### Arguments

string: the string to inspect
target: the string to compare
position: the position in the string to begin the comparison

### Returns

True if string begins with target at given position (or at index 0 if position not specified) or false

### Example

```
startsWith('abc', 'a')
//returns true

```

## subtract

Subtracts one number from another

### Arguments

x: the number to subtract from
y: the number being subtracted from x

### Returns

Integer

### Example

```
subtract(6, 4)
//returns 2

```

## sum

Computes the sum of the values within an array

### Arguments

array: contains values to be added together

### Returns

Integer

### Example

```
Sum([1, 2, 3, 4])
//returns 10

```

## tail

Gets all but first element of array

### Arguments

array: the array from which to return all but first element

### Returns

The given array but without its first element

### Example

```
tail([4, 5, 6, 7, 8])
//returns [5, 6, 7, 8]

```

## toLower

Converts all letters in string to lower case

### Arguments

string: the array to convert

### Returns

A string with all letters in lowercase. Anything that is not a letter remains unchanged.

### Example

```
toLower(’__FOO_BAR__')
//returns ‘__foo_bar__’

```
