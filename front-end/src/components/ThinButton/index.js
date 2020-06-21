import React from 'react';
import { Button, Label, Icon, Text } from './styles';
import { Icons } from '../../assets';

const ThinButton = ({
  onClick,
  label,
  disabled,
  contained = false,
  hasIcon= false,
  isCollapse,
}) => 
{
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      contained={contained}
    >
      <Label contained={contained}>
        <Text>{label}</Text>
        {hasIcon &&  <Icon isCollapse={isCollapse} src={Icons.arrowIcon} alt="arrow"/>}       
      </Label>
    </Button>
  );
}

export default ThinButton;