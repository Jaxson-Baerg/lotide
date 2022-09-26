const findKeyByValue = function(obj, val) {
  for (const key in obj) { // Loop through each key in passed object
    if (obj[key] === val) { // If the key has the same value as passed value
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;