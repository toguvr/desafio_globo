import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';

interface GlobalStateProps {
  [key: string]: any;
}

interface GlobalStateContextData {
  globalState: GlobalStateProps;
  setGlobalState: Dispatch<SetStateAction<{}>>;
}

const GlobalStateProvider = createContext<GlobalStateContextData>(
  {} as GlobalStateContextData,
);

export const StateProvider: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    open: window.innerWidth > 768,
  } as GlobalStateProps);

  return (
    <GlobalStateProvider.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateProvider.Provider>
  );
};
export function useGlobalState(): GlobalStateContextData {
  const context = useContext(GlobalStateProvider);

  return context;
}
