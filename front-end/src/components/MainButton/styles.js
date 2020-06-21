import styled from 'styled-components';

export const Button = styled.button`
  width: 311px;
  height: 44px;

  background: var(--unnamed-color-0099e9) 0% 0% no-repeat padding-box;
  border-radius: 50px;
  opacity: 1;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;   
  };
`;

export const Label = styled.span`
  font: Bold var(--unnamed-font-size-12)/var(--unnamed-line-spacing-17) var(--unnamed-font-family-open-sans);
  letter-spacing: var(--unnamed-character-spacing-0-12);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: Bold 12px/17px Open Sans;
  letter-spacing: 0.12px;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
`;



