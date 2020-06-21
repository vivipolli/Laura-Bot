import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 32px 23px 28px 23px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  position: relative;
`;

export const Row = styled.tr`
  height: 52px;
  ${
  css`
      &:nth-child(even) {
        background: #F7F6F4;
      }

      &:nth-child(odd) {
        background: #fff;
      }
    `}
`;
export const Col = styled.td`
  padding: 8px;
`;


export const THeader = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  opacity: 1;  

  color: var(--unnamed-color-212121);
  font: Bold 13px/18px var(--unnamed-font-family-open-sans);
  letter-spacing: 0px;
  color: #212121;
`;

export const RowHeader = styled.tr`
  height: 51px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border-bottom: 1px solid var(--unnamed-color-212121);
  border-left: 1px solid var(--unnamed-color-212121);
  border-right: 1px solid var(--unnamed-color-212121);
  opacity: 1;
}
`;

export const TableContainer = styled.div`
  margin-top: 50px;
  border: 1px solid #cccbcb;
  border-radius: 5px;
  border-top: 1px solid #212121;
  background: #fff;
}
`;

export const NumberBox = styled.span`
  color: var(--unnamed-color-7a7a7a);
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  font-family: open sans;
}
`;

export const NameTable = styled.span`
  font: Bold 13px/18px var(--unnamed-font-family-open-sans);
  color: var(--unnamed-color-212121);
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
}
`;

export const TextStatus = styled.p`
  color: var(--unnamed-color-1c7d00);
  text-align: left;
  font-family: open sans;
  font-size: 13px/18px;
  letter-spacing: 0px;
  opacity: 1;

  ${props =>
    props.status === 'pending' ?
      css`
        bcolor: #1C7D00;
      `
      :
      css`
        color: #FF881F;
      `
  }
}
`;

export const TextLevel = styled.div`
  border-radius: 3px;
  opacity: 1;
  width: 61px;
  height: 19px;
  font-family: open sans;
  font-weight: 500;
  font-size: 13px;
  padding: 0 5px;
  text-align: center;

  ${props => {
    switch (props.level) {
      case "high":
        return (
          css`
          background: var(--unnamed-color-ffccd3) 0% 0% no-repeat padding-box;
          border: 1px solid var(--unnamed-color-ec2c47);
          color: var(--unnamed-color-ec2c47);
        `
        )
      case "medium":
        return (
          css`
          background: var(--unnamed-color-fff7d5) 0% 0% no-repeat padding-box;
          border: 1px solid var(--unnamed-color-f6c500);
          color: var(--unnamed-color-f6c500);
        `
        )
      case "low":
        return (
          css`
          color: blue;
          border: 1px solid blue;
          background-color: #d4e3ff;
        `
        )
      default:
        return (
          css`
          color: gray;
          border: 1px solid gray;
        `
        )
    }
  }
  }
`;

export const CollapseBox = styled.div`
  width: 100%;
  background: #fff;
  position: absolute;
  height: 300px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  padding: 23px;
`;

export const CollapseTitle = styled.p`
  font: Bold 13px/18px var(--unnamed-font-family-open-sans);
  color: var(--unnamed-color-212121);
  text-align: left;
  font: Bold 13px/18px Open Sans;
  letter-spacing: 0px;
  color: #212121;
  opacity: 1;
`;

export const RowList = styled.div`
  display: flex;
  width: 346px;
`;
export const RowItem = styled.div`
  border: 1px solid #E3E3E3;
  height: 30px;
  font-size: 13px;
  font-family: open sans;
  align-items: center;
  display: flex;
  padding: 0 60px 0 10px;
`;

export const ColRight = styled.div`
  border: 1px solid #E3E3E3;
  height: 30px;
  font-size: 13px;
  font-family: open sans;
  align-items: center;
  display: flex;
  padding: 0 130px 0 10px;
  color: gray;
`;

export const SearchRow = styled.div`
  background: var(--unnamed-color-e3e3e3) 0% 0% no-repeat padding-box;
  width: 100%;
  position: absolute;
  display: grid;
  align-content: center;
  height: 53px; 
`;

export const SearchInput = styled.input`
  width: 97%;
  margin-left: 10px;
  padding-left: 20px;
  color: gray;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Dialog = styled.div`
  margin-left: 32px;
`;

export const Textarea = styled.textarea`
  width: 298px;
  height: 118px;
  padding: 14px;

  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-0099e9);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 2px;
  opacity: 1;
  resize: none;
`;

export const TextareaLabel = styled.span`
  font-size: 12px;
  letter-spacing: var(--unnamed-character-spacing-0-12);
  color: var(--unnamed-color-0099e9);
  text-align: left;
  font-family: Open Sans;
  letter-spacing: 0.12px;
  opacity: 1;
`;
































