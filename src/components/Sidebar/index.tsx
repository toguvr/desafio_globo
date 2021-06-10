import React from 'react';
import {
  MdDashboard,
  MdPeopleOutline,
  MdPowerSettingsNew,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useGlobalState } from '../../hooks/globalState';
import { routes } from '../../routes';
import { Container } from './styles';

export default function Sidebar() {
  const { user, signOut } = useAuth();
  const { globalState, setGlobalState } = useGlobalState();

  return (
    <Container open={!globalState.open}>
      <p>{user.role === 'admin' ? 'Administrador' : 'Funcionário'}</p>
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'var(--blue)',
        }}
        to={routes.dashboard}
        onClick={() =>
          setGlobalState({
            ...globalState,
            open: window.innerWidth > 768,
          })
        }
      >
        <MdDashboard size={20} />
        <p>Dashboard</p>
      </NavLink>

      {user.role === 'admin' && (
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'var(--blue)',
          }}
          onClick={() =>
            setGlobalState({
              ...globalState,
              open: window.innerWidth > 768,
            })
          }
          to={routes.users}
        >
          <MdPeopleOutline size={20} />
          <p>Usuários</p>
        </NavLink>
      )}
      <NavLink onClick={signOut} to="/">
        <MdPowerSettingsNew size={20} />
        <p>Sair</p>
      </NavLink>
    </Container>
  );
}
