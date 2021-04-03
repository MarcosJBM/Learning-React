import { useEffect, useState } from 'react';

import axios, { AxiosError, AxiosResponse } from 'axios';

import { Container, Avatar, Informations } from './styles';

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export const UseEffectHook = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    axios
      .get<UserProps>('https://api.github.com/users/marcosjbm')
      .then((response: AxiosResponse) => {
        setUser(response.data);
      })
      .catch((error: AxiosError) => {
        console.error({
          message: error.message,
          statusCode: error.response?.status,
        });
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
