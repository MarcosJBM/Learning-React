import React from "react";

const MyErrorBoundary: React.FC = (props) => {
  return (
    <div>
      <h1>Error</h1>
      {props.children}
    </div>
  );
};

export default MyErrorBoundary;
