const without = function(data, dataToRemove) {
  let dataWithout = [...data]; // Copy over passed array
  for (let i = 0; i < data.length; i++) { // Loop through each element in passed array to remove from
    for (let el of dataToRemove) { // Loop through each element in passed array to remove
      if (dataWithout[i] === el) {
        dataWithout.splice(i, 1); // Remove elements that match
        i--; // Jump back due to splice removing element
      }
    }
  }
  return dataWithout;
};

module.exports = without;