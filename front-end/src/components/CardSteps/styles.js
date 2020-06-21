import styled, { css } from 'styled-components';

export const Card = styled.div`
  height: 113px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #017E280D;
  border-radius: 5px;
  opacity: 1;
  position: relative;
  cursor: pointer;
  width: 312px;

  ${props =>
    props.isSelected &&
      css`
        border: 1px solid var(--unnamed-color-ff881f);
      `
  }
`;

export const Text = styled.span`
  font: Bold var(--unnamed-font-size-12)/var(--unnamed-line-spacing-17) var(--unnamed-font-family-open-sans);
  letter-spacing: var(--unnamed-character-spacing-0-48);
  color: var(--unnamed-color-7a7a7a);
  text-align: right;
  letter-spacing: 0.48px;
  opacity: 1;
  position: absolute;
  bottom: 24px;
  right: 16px;
`;

export const Number = styled.span`
  font: Bold var(--unnamed-font-size-40)/var(--unnamed-line-spacing-55) var(--unnamed-font-family-open-sans);
  letter-spacing: var(--unnamed-character-spacing-1-6);
  color: var(--unnamed-color-212121);
  text-align: center;
  opacity: 1;
  position: absolute;
  top: 10px;
  right: 16px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 18px;
  left: 21px;
`;


