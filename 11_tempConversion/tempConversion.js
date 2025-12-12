const convertToCelsius = function(fahrenheitTemp) {
  let celsuisTemp = (fahrenheitTemp - 32) * 5/9;
  return Math.round(celsuisTemp * 10)/10;
};

const convertToFahrenheit = function(celsuisTemp) {
  let fahrenheitTemp = (celsuisTemp * 9/5) + 32;
  return Math.round(fahrenheitTemp * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
