import React, { createContext, useCallback, useState, useContext } from 'react';
import { UserProps } from '../dtos';
import api from '../services/api';
import { compareHash } from '../utils/hash';

interface AuthState {
  user: UserProps;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  email: string;
  password: string;
  role: string;
}

interface AuthContextData {
  user: UserProps;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: UserProps): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@desafio:user');

    if (user) {
      return {
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get(`user?email=${email}`);

    if (!Array.isArray(response.data) || response.data.length === 0) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatched = await compareHash(
      password,
      response.data[0].password,
    );

    if (!passwordMatched) {
      throw new Error('Email ou senha incorretos.');
    }

    const user = response.data[0];

    localStorage.setItem('@desafio:user', JSON.stringify(user));

    setData({ user });
  }, []);

  const signUp = useCallback(async ({ role, email, password }) => {
    const response = await api.post('/user', {
      email,
      password,
      role,
    });

    const user = response.data;

    localStorage.setItem('@desafio:user', JSON.stringify(user));

    setData({ user });
  }, []);

  const updateUser = useCallback(
    (user: UserProps) => {
      localStorage.setItem('@desafio:user', JSON.stringify(user));

      setData({
        ...data,
        user,
      });
    },
    [setData, data],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@desafio:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
