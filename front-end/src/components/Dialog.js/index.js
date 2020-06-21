import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions, Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import { Icons } from '../../assets';
import MainButton from '../MainButton';
import { Button, Icon, Title, Actions } from './styles';


function SimpleDialog(props) {
  const { handleClose, open, title, onSubmit, disabled, children } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        <Title>{title}</Title>
        <Icon onClick={handleClose} src={Icons.close} alt="close" />
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Actions>
          <MainButton
            onClick={onSubmit}
            label="REGISTRAR"
            disabled={disabled}
          />
          <Button onClick={() => handleClose(false)}>cancelar</Button>
        </Actions>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SimpleDialog;