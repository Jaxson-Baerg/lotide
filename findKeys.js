const findKeys = function(obj, func) {
  for (let key in obj) { // Loop through each key
    if (func(obj[key])) { // Apply passed function to key
      return key;
    }
  }
};

module.exports = findKeys;
