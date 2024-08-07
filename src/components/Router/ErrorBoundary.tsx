import { isRouteErrorResponse, useRouteError, Navigate } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <Navigate to='/2024' />;
  }
};

export default ErrorBoundary;