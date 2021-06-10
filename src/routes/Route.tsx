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
  isAdmin = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  function routeToGo(location: { pathname: string }) {
    if (!user && location.pathname !== routes.index) {
      return (
        <Redirect
          to={{
            pathname: routes.index,
            state: { from: location },
          }}
        />
      );
    }
    if (!!user && isAdmin && user.role !== 'admin') {
      return (
        <Redirect
          to={{
            pathname: routes.dashboard,
            state: { from: location },
          }}
        />
      );
    }

    if (isPrivate === !!user) {
      return <Component />;
    }

    return (
      <Redirect
        to={{
          pathname: isPrivate ? routes.index : routes.dashboard,
          state: { from: location },
        }}
      />
    );
  }

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return routeToGo(location);
      }}
    />
  );
};

export default Route;
