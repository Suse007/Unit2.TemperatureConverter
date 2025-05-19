// console.log("Hello, world!");

function convertToCelsisus(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(convertToCelsisus(32));

function describeTemperature(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius < 0) {
    return `very cold`;
  } else if (celsius < 20) {
    return `cold`;
  } else if (celsius < 30) {
    return `warm`;
  } else if (celsius < 40) {
    return `hot`;
  } else {
    return `very hot`;
  }
}

const temperatureFahrenheit = 100;
console.log(`${temperatureFahrenheit} is ${describeTemperature(temperatureFahrenheit)}`);

function describeTemperature(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;


  if (celsius < 0) {
    return `very cold`;
  } else if (celsius < 20) {
    return `cold`;
  } else if (celsius < 30) {
    return `warm`;
  } else if (celsius < 40) {
   
    return `hot`;
  } else {
    return `very hot`;
  }
}
function promptTemperature(){
    const fahrenheit = (prompt(`Enter a temperature in Fahrenheit`));
    if (fahrenheit !== null) {
        const message = describeTemperature(fahrenheit);
        alert(message);
    } else {
        alert(`Please enetr a valid number`);
    }
    }
promptTemperature();
