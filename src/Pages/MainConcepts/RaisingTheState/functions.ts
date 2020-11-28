export function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

export function tryConvert(
  temperature: string,
  convert: (input: number) => number
) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);

  return output.toString();
}
