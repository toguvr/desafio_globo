import React from 'react';
import { AuthProvider } from './auth';
import { LoadProvider } from './load';
import { StateProvider } from './globalState';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <StateProvider>
        <LoadProvider>{children}</LoadProvider>
      </StateProvider>
    </AuthProvider>
  );
};

export default AppProvider;
