import React, { useCallback, useEffect, useMemo } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { routes } from '.';

interface RouteProps extends ReactDOMRouteProps {
  isAdmin?: boolean;
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,

  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? routes.index : routes.dashboard,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
