import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 56px;
  background: var(--unnamed-color-ff881f) 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
`;

export const Logo = styled.img`
  margin-top: 10px;
  margin-left: 22px;  
`;

export const LogoutIcon = styled.img`
  margin-right: 5px;  
`;

export const Logout = styled.div`
  float: right;
  margin-top: 18px;
  margin-right: 28px;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const LogoutText = styled.span`
  font: Regular var(--unnamed-font-size-12)/var(--unnamed-line-spacing-17) var(--unnamed-font-family-open-sans);
  letter-spacing: var(--unnamed-character-spacing-0-12);
  color: var(--unnamed-color-f7f6f4);
  text-align: left;
  opacity: 0.8;
`;


