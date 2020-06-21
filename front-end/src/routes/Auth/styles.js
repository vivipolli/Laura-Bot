import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  align-content: center;
  display: grid;
  left: 0;
  right: 0;
  justify-content: center;
`;

export const Card = styled.div`
  width: 424px;
  height: 433px;
  position: relative;
  align-content: center;
  display: grid;

  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #017E280D;
  border-radius: 5px;
  opacity: 1;  
`;

export const Form = styled.form`
  justify-self: center;
  margin: 35px;
 
`;

export const Logo = styled.img`
  margin-top: -55px;  
  justify-self: center;
`;

export const Label = styled.p`
  letter-spacing: var(--unnamed-character-spacing-0-12);
  color: var(--unnamed-color-212121);
  text-align: left;
  letter-spacing: 0.12px;
  opacity: 1;
  font-size: 12px;
  font-family: open sans;
`;

export const Input = styled.input`
  width: 302px;
  height: 44px;
  padding: 0 10px;

  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-e3e3e3);
  border-radius: 2px;
  opacity: 1;

  &:focus {
    border: 1px solid var(--unnamed-color-e3e3e3);
    border-radius: 2px;      
  };

  color: #7A7A7A;
  font-size: 15px;
`;

export const Actions = styled.div`
  width: 100%;
  justify-content: center;
  display: grid;
  text-align: center;
`;

export const Button = styled.p`
  font: Bold var(--unnamed-font-size-12)/var(--unnamed-line-spacing-17) var(--unnamed-font-family-open-sans);
  letter-spacing: var(--unnamed-character-spacing-0-12);
  color: var(--unnamed-color-0099e9);
  text-align: center;
  font: Bold 12px/17px Open Sans;
  letter-spacing: 0.12px;
  color: #0099E9;
  text-transform: uppercase;
  opacity: 1;
  cursor: pointer;
  padding: 20px 0 30px;
  `;






























