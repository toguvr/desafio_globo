import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '../Button';
// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '520px',
    backgroundColor: 'var(--gray-700)',
    border: '2px solid var(--gray-700)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'white',
  },
  text: {
    margin: '24px 0 16px',
  },
  divButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

interface ComponentProps {
  text?: string;
  title?: string;
  onSubmit(): void;
  setOpenModal(bool: boolean): void;
  openModal: boolean;
}

function DialogModal({
  text = '',
  title = '',
  onSubmit,
  setOpenModal,
  openModal,
}: ComponentProps) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={() => setOpenModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title"> {title || 'Deseja excluir?'} </h2>
          <p className={classes.text} id="transition-modal-description">
            {text || 'Ao continuar o item será excluído.'}
          </p>
          <div className={classes.divButton}>
            <Button
              width="120px"
              backgroundColor="transparent"
              borderColor="var(--blue)"
              color="var(--blue)"
              onClick={() => setOpenModal(false)}
              transparent
            >
              Cancelar
            </Button>
            <Button
              width="120px"
              onClick={() => {
                onSubmit();
                setOpenModal(false);
              }}
              // loading={loading}
            >
              Excluir
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default DialogModal;
