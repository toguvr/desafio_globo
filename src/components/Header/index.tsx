import React from 'react';

import { RiMenuLine } from 'react-icons/ri';

import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';
import { useGlobalState } from '../../hooks/globalState';

export function Header() {
  const { globalState, setGlobalState } = useGlobalState();

  return (
    <Container>
      <div className="logo">
        <RiMenuLine
          color={!globalState.open ? 'var(--white)' : 'var(--blue)'}
          cursor="pointer"
          onClick={() =>
            setGlobalState({ ...globalState, open: !globalState.open })
          }
          size="24"
        />

        <h1>
          Globo
          <span>.</span>
        </h1>
      </div>

      <div className="profile">
        <div>
          <p>Augusto Telles</p>
          <span color="gray.300">augustotf93@gmail.com</span>
        </div>

        <a
          href="https://github.com/toguvr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={48} color="white" />
        </a>
      </div>
    </Container>
  );
}
