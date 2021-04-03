export interface TemperatureInputProps {
  scale: 'Celsius' | 'Fahrenheit';
  temperature: string;
  onTemperatureChange: (temperature: string) => any;
}
