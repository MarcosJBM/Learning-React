import React, { ChangeEvent, useState } from "react";
import { toCelsius, toFahrenheit, tryConvert } from "./functions";

import { TemperatureInputProps } from "./type";

function BoilingVerdict(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>A água ferveria.</p>;
  }
  return <p>A água não ferveria.</p>;
}

const TemperatureInput = (props: TemperatureInputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    props.onTemperatureChange(event.target.value);
  }

  return (
    <fieldset>
      <legend>Informe a temperatura em {props.scale}</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
};

export const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("Celsius");

  function handleCelsiusChange(temperature: string) {
    setScale("Celsius");
    setTemperature(temperature);
  }

  function handleFahrenheitChange(temperature: string) {
    setScale("Fahrenheit");
    setTemperature(temperature);
  }

  const celsius =
    scale === "Fahrenheit" ? tryConvert(temperature, toCelsius) : temperature;

  const fahrenheit =
    scale === "Celsius" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div id='calculator'>
      <TemperatureInput
        scale='Celsius'
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />

      <TemperatureInput
        scale='Fahrenheit'
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};
