import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 158px;
  height: 30px;

  background: var(--unnamed-color-0099e9) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-0099e9);
  border-radius: 50px;
  opacity: 1;
  cursor: pointer;
  position: relative;
  text-trasform: uppercase;

  ${props =>
    props.contained ?
      css`
        background: var(--unnamed-color-0099e9) 0% 0% no-repeat padding-box;
      `
      :
      css`
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
      `};  

  &:focus {
    outline: none;   
  };
`;

export const Label = styled.div`
  font: Bold 11px/15px var(--unnamed-font-family-open-sans);
  text-align: center;
  letter-spacing: 0.11px;
  text-transform: uppercase;
  opacity: 1;

  ${props =>
    props.contained ?
      css`
        color: var(--unnamed-color-ffffff);
      `
      :
      css`
        color: var(--unnamed-color-0099e9);
      `};  
`;

export const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: 40%;
  ${props =>
    props.isCollapse &&
      css`
      transform: rotate(180deg);
      `
  } 
`;

export const Text = styled.span`
  margin-right: 10px;
`;



