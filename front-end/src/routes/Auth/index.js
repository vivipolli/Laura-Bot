import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import MainButton from '../../components/MainButton';
import api from '../../services/api';
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


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Auth = () => {
  const [openSnack, setOpenSnack] = useState(false);
  const [loginMsg, setLoginMsg] = useState('Login efetuado com sucesso');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useHistory();

  async function onSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    api.post('/login', data)
      .then(resp => {
        if (resp.status === 200) {
          history.push('/home');
          setOpenSnack(true);
        }})
      .catch((err) => {
        setLoginMsg("Senha ou email incorretos");
        setOpenSnack(true);
      });
  };

  return (
    <Container>
      <Card>
        <Logo src={Icons.lauraIcon} alt="laura" />
        <Form>
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            required
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            required
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </Form>
        <Actions>
          <MainButton
            onClick={onSubmit}
            label="ENTRAR"
            disabled={(email || password) === null}
          />
          <Button>Esqueceu a senha?</Button>
        </Actions>
      </Card>
      <Snackbar open={openSnack} autoHideDuration={6000}>
        {loginMsg === 'success' ? (
          <Alert severity="success">{loginMsg}</Alert>
        )
          :
          <Alert severity="error">{loginMsg}</Alert>
        }
      </Snackbar>
    </Container>
  );
}

export default Auth;