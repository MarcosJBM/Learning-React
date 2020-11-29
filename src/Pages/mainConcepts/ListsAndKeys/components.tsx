import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map(number => number * 2);

export const listItemsArray = doubled.map(number => (
  <li key={number.toString()}>{number}</li>
));

function ListItem(props: { value: number }) {
  return <li>{props.value}</li>;
}

export function NumberList() {
  return (
    <ul>
      {numbers.map(number => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
