export type MouseState = {
  x: number;
  y: number;
};

export type ArrowProps = {
  mouse: MouseState;
};

export type MouseProps = {
  children(state: MouseState): void;
};
