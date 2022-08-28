import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";
import { StyledSpinner, SpinnerContainer } from "../utils/styles/index";

export const AuthenticatedRoute: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation();
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <SpinnerContainer>
        <StyledSpinner viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </StyledSpinner>
      </SpinnerContainer>
    );
  }
  if (user) return <>{children}</>;
  return <Navigate to="/login" state={{ from: location }} replace />;
};
