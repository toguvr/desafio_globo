import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface AsideProps {
  open: boolean;
}

export const Container = styled.aside<AsideProps>`
  width: 256px;
  min-width: 256px;
  margin-right: 32px;

  display: flex;

  align-items: flex-start;

  flex-direction: column;

  > p {
    font-weight: bold;
    font-size: small;
    margin-bottom: 32px;
    color: var(--gray-400);
  }

  > a {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    text-decoration: none;
    font-size: 16px;
    color: var(--white);
    > svg {
      margin-right: 16px;
    }

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
      text-decoration: underline;
    }
  }

  display: ${(props) => (props.open ? 'none' : 'flex')};

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--gray-900);
    z-index: 1;
    padding: 24px;
  }
`;
