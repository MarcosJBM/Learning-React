export interface SquareProps {
  value: string;
  onClick: () => void;
}

export interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

export interface GameProps {
  history: { squares: string[] }[];
  xIsNext: boolean;
  stepNumber: number;
}
