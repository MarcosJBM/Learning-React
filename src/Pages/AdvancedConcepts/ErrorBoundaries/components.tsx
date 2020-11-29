import React, { useEffect, useState } from "react";

import { Props } from "./type";

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(true);
  });

  return (
    <div>
      {hasError ? <h1>Algo de errado não está certo...</h1> : { children }}
    </div>
  );
};
