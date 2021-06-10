import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  color: string;
  backgroundColor: string;
  borderColor: string;
  width: string;
  transparent?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#28E0AC'};
  height: 48px;
  min-height: 48px;
  max-width: ${(props) => props.width};
  border-radius: 8px;
  border: ${(props) =>
    `2px solid ${props.borderColor ? props.borderColor : '#28E0AC'}`};
  padding: 12px;
  width: 100%;
  color: ${(props) => props.color};
  font-weight: 700px;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    margin-right: 10px;
  }

  img {
    position: absolute;
    left: 24px;
  }

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
    border: ${(props) => props.borderColor || 'var(--blue)'};
  }
`;
