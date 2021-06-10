import styled, { keyframes } from 'styled-components';

const slide = ({ maxWidth }) => keyframes`
  from {
    /* margin-right: ${maxWidth}; */
    margin-right: -450px;
  }

  to {
    margin-right: 0px;
  }
`;

const show = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 50;
  bottom: 0;
  right: 0;
  left: 50;
  display: flex;
  height: calc(100vh - 96px);
  width: calc(100vw);
  z-index: 10;
`;

export const Close = styled.span`
  color: var(--pink);
  align-self: flex-end;
  cursor: pointer;
`;

export const Modal = styled.div`
  background: var(--gray-800);
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  box-shadow: 0 3px 6px #000000ce;
  padding: 21px 42px;
  display: flex;
  flex-direction: column;
  animation: ${(props) => slide(props.maxWidth)} 0.1s linear;

  @media (max-width: 678px) {
    min-width: 90%;
  }
`;

export const Page = styled.div`
  background: var(--gray-800);
  opacity: 0.5;
  width: 100%;
  height: 100%;
  animation: ${show} 0.3s;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  margin: 20px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  min-height: 100%;
  padding-bottom: 150px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h4 {
    align-self: flex-start;
    margin-bottom: 20px;
  }
`;
