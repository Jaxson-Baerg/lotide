# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jaxson_baerg/lotide`

**Require it:**

`const _ = require('@jaxson_baerg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array
* `tail(array)`: returns everything after the first element of an array
* `middle(array)`: returns the middle on an array
* `without(array, toRemoveFromArray)`: returns an array with all elements specified in second parameter removed
* `map(array, function)`: returns an array with each element containing the result of the function parameter on initial element
* `takeUntil(array, funciton)`: returns an array containing all elements until element meets function parameter requirements
* `flatten(array)`: returns array flattened, all nesting removed
* `letterPositions(string)`: returns object with each key being a letter and each key's value being the indexes of which it appears in the string parameter
* `countLetters(string)`: returns an object with each key being a letter and each key's value being the number of times it appears within the string parameter
* `countOnly(array, object)`: returns an object with each key being the element in the array parameter that matched with a key in the object parameter and each value being the number of times it was counted within the array parameter
* `findKeys(object, function)`: returns the first key that passes the requirements of the function parameter
* `findKeysByValue(object, string)`: returns the first key of which it's value matches the value parameter
* `eqArrays(array, array)`: returns whether the array parameters are equal or not
* `eqObjects(object, object)`: returns whether the object parameters are equal or not
* `assertEqual(value, value)`: logs to the console an assert message whether the primitive value parameters are equal
* `assertArraysEqual(array, array)`: logs to the console an assert message whether the array parameters are equal
* `assertObjectsEqual(object, object)`: logs to the console an assert message whether the object parameters are equal