import React, { createContext, useContext, useState, useCallback } from 'react';

interface LoadContextData {
  start(): void;
  stop(): void;
}

const LoadContext = createContext<LoadContextData>({} as LoadContextData);

export const LoadProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const start = useCallback(() => {
    setLoading(true);
  }, []);

  const stop = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadContext.Provider value={{ start, stop }}>
      {loading && <span>Carregando</span>}
      {children}
    </LoadContext.Provider>
  );
};
export function useLoad(): LoadContextData {
  const context = useContext(LoadContext);

  return context;
}
