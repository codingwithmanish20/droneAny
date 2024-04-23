import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleComponentError = (error, errorInfo) => {
    // You can also log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.ErrorBoundary onError={handleComponentError}>
      {children}
    </React.ErrorBoundary>
  );
}

export default ErrorBoundary;