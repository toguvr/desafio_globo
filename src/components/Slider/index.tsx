import React, { ReactNode, useEffect } from 'react';
import { Container, Close, Page, Modal, ModalContainer } from './styles';

interface SliderProps {
  children: ReactNode;
  close: () => void;
  maxWidth?: string;
}

export default function Slider({
  children,
  close,
  maxWidth = '450px',
}: SliderProps) {
  useEffect(() => {
    function onEscapePress(e) {
      if (e.keyCode === 27) close();
    }
    document.addEventListener('keydown', (e) => onEscapePress(e));
  }, []);

  return (
    <Container maxWidth={maxWidth}>
      <Page />
      <Modal maxWidth={maxWidth}>
        <Close onClick={close}>Fechar</Close>
        <ModalContainer>{children}</ModalContainer>
      </Modal>
    </Container>
  );
}
