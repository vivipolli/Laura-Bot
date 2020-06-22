import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Card, Text, Number, Icon } from './styles';

const CardSteps = ({
  data,
  selected,
  handleSelected,
}) => {

  return (
    <Grid xs={12} container justify="space-between">
      {data.map(item => (
        <Grid item>
          <Card
            onClick={() => {
             handleSelected(item.id);
            }}
            isSelected={item.id === selected}
          >
            <Icon src={item.icon} alt="" />
            <Number>{item.number}</Number>
            <Text>{`Etapa ${item.id}`}</Text>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardSteps;