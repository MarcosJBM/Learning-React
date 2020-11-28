export type TemperatureInputProps = {
  scale: "Celsius" | "Fahrenheit";
  temperature: string;
  onTemperatureChange: (temperature: string) => any;
};
