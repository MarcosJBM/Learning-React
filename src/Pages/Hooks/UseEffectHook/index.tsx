import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export default function UseEffectHook() {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    axios.get("https://api.github.com/users/marcosjbm").then(response => {
      const userData = response.data;
      setUser(userData);
    });
  }, []);

  return (
    <div id='user-container'>
      <img src={user?.avatar_url} alt={user?.login} />
      <h1>{user?.name}</h1>
      <h3>{user?.login}</h3>
      <p>{user?.bio}</p>
    </div>
  );
}
