import { ChangeEvent, useState } from 'react';

import { toCelsius, toFahrenheit, tryConvert } from './functions';

import { TemperatureInputProps } from './types';

const BoilingVerdict = (props: { celsius: number }) => {
  if (props.celsius >= 100) return <p>A água ferveria.</p>;

  return <p>A água não ferveria.</p>;
};

const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}: TemperatureInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Informe a temperatura em {scale}</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export const Calculator = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('Celsius');

  const celsiusTemperature = (temperature: string) => {
    setScale('Celsius');
    setTemperature(temperature);
  };

  const fahrenheitTemperature = (temperature: string) => {
    setScale('Fahrenheit');
    setTemperature(temperature);
  };

  const celsius =
    scale === 'Fahrenheit' ? tryConvert(temperature, toCelsius) : temperature;

  const fahrenheit =
    scale === 'Celsius' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale='Celsius'
        temperature={celsius}
        onTemperatureChange={celsiusTemperature}
      />

      <TemperatureInput
        scale='Fahrenheit'
        temperature={fahrenheit}
        onTemperatureChange={fahrenheitTemperature}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};
