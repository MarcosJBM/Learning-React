import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container, Avatar, Informations } from "./styles";

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

const UseEffectHook = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    axios.get("https://api.github.com/users/marcosjbm").then(response => {
      setUser(response.data);
    });
  }, [user]);

  return (
    <Container>
      <Avatar src={user?.avatar_url} alt={user?.name} />
      <Informations>
        <h1>{user?.name}</h1>
        <h2>{user?.login}</h2>
        <p>{user?.bio}</p>
      </Informations>
    </Container>
  );
};

export default UseEffectHook;
