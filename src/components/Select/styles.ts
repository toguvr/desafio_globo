import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  maxWidth?: string;
  erroMsg: boolean;
}

export const Container = styled.main<ContainerProps>`
  background: var(--gray-900);
  border-radius: 10px;
  border: 2px solid var(--gray-900);
  padding: 10px 16px;
  width: 100%;
  width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  color: #666360;

  display: flex;
  align-items: center;

  select {
    flex: 1;
    border: 0;
    background: transparent;
    width: 100%;
    color: #f4ede8;
    height: 24px;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    > option {
      color: #232129;
      padding: 15px;
    }

    ::-webkit-calendar-picker-indicator {
      filter: invert(100%);
    }

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }

    /* Cor do texto do autocomplete */
    :-webkit-autofill {
      -webkit-text-fill-color: white !important;
    }

    ::placeholder {
      color: #666360;
    }
  }

  ${(props) =>
    props.erroMsg &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--blue);
      border-color: var(--blue);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--blue);
    `}


  svg {
    margin-right: 16px;
  }
`;
