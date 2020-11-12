import { type } from "os";

export type MouseState = {
  x: number;
  y: number;
};

export type CatProps = {
  mouse: MouseState;
};

export type MouseProps = {
  children(state: MouseState): void;
};
