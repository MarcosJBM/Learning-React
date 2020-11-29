import React from "react";

import { AvatarProps } from "./type";

// Usando Dot Notation Para Tipos JSX
export const UserProfile = {
  AvatarImage: function AvatarImage({ avatar }: AvatarProps) {
    return (
      <img
        src={avatar.image}
        alt={avatar.description}
        width={250}
        height={250}
      />
    );
  },
  UserName: function UserName(props: { name: string }) {
    return <h1>{props.name}</h1>;
  },
  UserDescription: function UserDescription(props: { description: string }) {
    return <p>{props.description}</p>;
  },
};
