import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    window.setInterval(() => Tick(), 1000);
  });

  function Tick() {
    const newDate = new Date();
    setDate(newDate);
  }

  return (
    <div>
      <h3>{date.toLocaleTimeString()}</h3>
    </div>
  );
};
