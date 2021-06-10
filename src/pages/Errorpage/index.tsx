import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

import { routes } from '../../routes';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <h2>Ooooops...</h2>
      <p>
        Alguma coisa deu errado na página que você estava tentando acessar :(
      </p>
      <Link to={routes.index}>Retornar para o inicio</Link>
    </Container>
  );
};

export default ErrorPage;
