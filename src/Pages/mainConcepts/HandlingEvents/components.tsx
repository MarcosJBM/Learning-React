import React, { SyntheticEvent, useState } from "react";

export const ActionLink = () => {
  function handleClick(event: SyntheticEvent) {
    event.preventDefault();
    alert("O botão foi clicado!");
  }

  return <button onClick={handleClick}>Clique Aqui!</button>;
};

export const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }

  return <button onClick={handleClick}>{isToggleOn ? "On" : "Off"}</button>;
};
