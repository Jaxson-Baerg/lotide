const flatten = function(array) {
  let flat = []; // Initialize return array
  for (let el of array) { // Loop through each element of passed array
    if (Array.isArray(el)) { // If element is nested array
      flat.push(...flatten(el)); // Push into return array the elements of returned recursion call of element
      continue; // Continue to next for iteration to skip rest of loop
    }
    flat.push(el); // If element is not a nested array, push to return array
  }
  return flat;
};

module.exports = flatten;