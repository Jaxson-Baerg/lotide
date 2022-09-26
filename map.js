const map = function(arr, func) {
  let newArr = []; // Initialize return array
  for (item of arr) { // Loop through each element of passed array
    newArr.push(func(item)); // Apply passed function to each element
  }
  return newArr;
};

module.exports = map;