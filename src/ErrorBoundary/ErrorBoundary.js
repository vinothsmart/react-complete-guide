import React, { useState, useEffect } from "react";

const ErrorBoundary = (props) => {
  const [state, setstate] = useState({
    hasError: false,
    errorMessage: "",
  });

  useEffect(() => {
    setstate({
      hasError: true,
      errorMessage: "Error",
    });
  }, []);

  return <>{state.hasError ? <h1>{state.errorMessage}</h1> : props.children}</>;
};

export default ErrorBoundary;
