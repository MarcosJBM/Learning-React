import React, { useMemo } from "react";

import { Container, List } from "./styles";

const UseMemoHook = () => {
  const users = [
    { id: 1, name: "Marcos", age: 18 },
    { id: 2, name: "Luiz", age: 17 },
    { id: 3, name: "Daniel", age: 17 },
    { id: 4, name: "Godoi", age: 20 },
    { id: 5, name: "Nathan", age: 20 },
  ];

  const returnUsersName = useMemo(
    () => users.map(user => <List key={user.id.toString()}>{user.name}</List>),
    [users]
  );

  return (
    <Container>
      <h2>User´s Name</h2>
      {returnUsersName}
    </Container>
  );
};

export default UseMemoHook;
