module.exports = function parseString(stringData) {
  return stringData.split(',').map(data => data.trim());
}