import React, { Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundaries/components";

import("./functions").then(math => {
  console.log(math.Add(2, 2));
});

// Funciona apenas com arquivos .tsx
const OtherComponent = React.lazy(() => import("./otherComponent"));
const AnotherComponent = React.lazy(() => import("./anotherComponent"));

export function MyComponent() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}
