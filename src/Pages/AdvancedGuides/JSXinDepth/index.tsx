import React from "react";

import { UserProfile } from "./components";

export default function JSXInDepth() {
  let imageURL =
    "https://avatars1.githubusercontent.com/u/67931411?s=460&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4";

  return (
    <div>
      <h1>JSX In Depth</h1>
      <p>
        Fundamentalmente, JSX é somente um açúcar sintático (syntactic sugar)
        para a função React.createElement(component, props, ...children).
      </p>
      <h2>Usando Dot Notation Para Tipos JSX</h2>
      <p>
        Você também pode se referir a um componente React usando Dot Notation no
        próprio JSX. Isso é conveniente se você tem um único módulo que exporta
        vários componentes React.
      </p>
      <UserProfile.AvatarImage
        avatar={{
          image: imageURL,
          description: "Marcos Lindão",
        }}
      />
      <UserProfile.UserName name={"Marcos"} />
      <UserProfile.UserDescription description={"Gosto de Pepsi"} />
    </div>
  );
}
