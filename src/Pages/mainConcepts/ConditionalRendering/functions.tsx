import React from "react";

export function LoginButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Login</button>;
}

export function LogoutButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Logout</button>;
}
