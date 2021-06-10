import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from '../../pages/LoginPage';
import { routes } from '../../routes';

const mockedHistoryPush = jest.fn();

const mockedSignIn = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({ push: mockedHistoryPush }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe('SignIn Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to sign in and go to dashboard', async () => {
    const result = render(<SignIn />);

    const emailField = result.getByPlaceholderText('E-mail');
    const passwordField = result.getByPlaceholderText('Senha');
    const buttonElement = result.getByText('Entrar');

    fireEvent.change(emailField, {
      target: { value: 'usuariocomum@teste.com.br' },
    });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith(routes.dashboard);
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const result = render(<SignIn />);

    const emailField = result.getByPlaceholderText('E-mail');
    const passwordField = result.getByPlaceholderText('Senha');
    const buttonElement = result.getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'no-valid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const result = render(<SignIn />);

    const emailField = result.getByPlaceholderText('E-mail');
    const passwordField = result.getByPlaceholderText('Senha');
    const buttonElement = result.getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'augusto@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });
});
