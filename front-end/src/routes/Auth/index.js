import React from 'react';

import MainButton from '../../components/MainButton';
import { Icons } from '../../assets';
import {
  Container,
  Card,
  Label,
  Input,
  Actions,
  Button,
  Logo,
  Form
} from './styles';


const Auth = () => {
  return (
    <Container>
      <Card>
        <Logo src={Icons.lauraIcon} alt="laura" />
        <Form>
          <Label>Email</Label>
          <Input type="text" />
          <Label>Senha</Label>
          <Input type="password" />
        </Form>
        <Actions>
          <MainButton
            // onClick={}
            label="ENTRAR"
          // disabled={}
          />
          <Button>Esqueceu a senha?</Button>
        </Actions>
      </Card>

    </Container>
  );
}

export default Auth;