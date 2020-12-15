import React, { useMemo } from "react";

export default function UseMemoHook() {
  const users = [
    { id: 1, name: "Marcos", age: 18 },
    { id: 2, name: "Luiz", age: 17 },
    { id: 3, name: "Daniel", age: 17 },
    { id: 4, name: "Godoi", age: 20 },
    { id: 5, name: "Nathan", age: 20 },
  ];

  // use Mesmo é utilizado quando vc for fazer algum tipo de calculo dentro da sua aplicação
  const returnUsersName = useMemo(
    () => users.map(user => <li key={user.id.toString()}>{user.name}</li>),
    [users]
  );

  return <div>{returnUsersName}</div>;
}
