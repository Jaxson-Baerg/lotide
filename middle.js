const middle = function(data) {
  const leng = data.length; // Assign length of passed array
  let mid = []; // Initialize return array
  if (leng === 1 || leng === 2) { // Gate for array of one or two elements
    return mid;
  } else if (leng % 2 === 0) { // Gate if array is even, returns two middle numbers
    mid.splice(0, 0, data[(leng / 2) - 1], data[leng / 2]);
  } else {
    mid.push(data[(Math.ceil(leng / 2)) - 1]);
  }
  return mid;
};

module.exports = middle;