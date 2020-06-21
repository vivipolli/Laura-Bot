import React, { useState } from 'react';

import { Icons } from '../../assets';
import {
  Container,
  Logo,
  Logout,
  LogoutIcon,
  LogoutText
} from './styles';

const Header = ({
  onClick,
}) => {

  return (
    <Container>
      <Logo src={Icons.logo} alt="logo"/>
      <Logout onClick={onClick}>
        <LogoutIcon src={Icons.logout} alt="logout"/>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}

export default Header;