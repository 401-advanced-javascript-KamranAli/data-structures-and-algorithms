
function shift(array, value) {
  const startArray = [];
  for (let i = 0; i < array.length; i += 1) {
    startArray[i] = startArray[i + 1] || 0;
  }
}

module.exports = shift;
