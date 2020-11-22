import React from "react";

import { Welcome, Comment } from "./components";

export default function ComponentsAndProps() {
  const authorImage =
    "https://avatars1.githubusercontent.com/u/67931411?s=460&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4";

  return (
    <div>
      <Welcome name={"Marcos"} />

      <Comment
        date={new Date()}
        text={"Opa meu bom!"}
        author={{ avatarURL: authorImage, name: "Marcos" }}
      />
    </div>
  );
}
