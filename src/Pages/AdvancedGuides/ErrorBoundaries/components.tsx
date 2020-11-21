import React, { Component, ErrorInfo } from "react";

import { Props, State } from "./type";

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught error:", error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return <h1>Algo de errado não está certo...</h1>;
    }
    return this.props.children;
  }
}
