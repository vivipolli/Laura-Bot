import React from 'react';
import { Button, Label } from './styles';

const MainButton = ({
  onClick,
  label,
  disabled,
}) => 
{
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
    >
      <Label>{label}</Label>
    </Button>
  );
}

export default MainButton;