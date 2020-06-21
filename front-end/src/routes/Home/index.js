import React, { useState } from 'react';

import Header from '../../components/Header';
import CardSteps from '../../components/CardSteps';
import ThinButton from '../../components/ThinButton';
import SimpleDialog from '../../components/Dialog.js';

import { Icons } from '../../assets';
import {
  Container,
  Table,
  Row,
  THeader,
  Col,
  RowHeader,
  TableContainer,
  NumberBox,
  NameTable,
  TextStatus,
  TextLevel,
  CollapseBox,
  RowList,
  RowItem,
  ColRight,
  CollapseTitle,
  SearchRow,
  SearchInput,
  SearchIcon,
  Dialog,
  Textarea,
  TextareaLabel,
} from './styles';


const data = [
  {
    icon: Icons.searchPerson,
    number: "75",
    id: 0,
  },
  {
    icon: Icons.watchLover,
    number: "75",
    id: 1,
  },
  {
    icon: Icons.timer,
    number: "75",
    id: 2,
  },
  {
    icon: Icons.commentBox,
    number: "75",
    id: 3,
  },
];


const Home = () => {

  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <CardSteps data={data} />
        <TableContainer>
          <Table>
            <RowHeader>
              <THeader>Prontuário (50)</THeader>
              <THeader>Nome do paciente</THeader>
              <THeader>Nível do alerta</THeader>
              <THeader>Data do alerta</THeader>
              <THeader>Atendimento</THeader>
            </RowHeader>
            <Row>
              <SearchRow>
                <SearchInput type="text" placeholder="Busque por, prontuários, Nomes, Nível do alerta, ou status" />
                <SearchIcon src={Icons.search} alt="search" />
              </SearchRow>
            </Row>
            <Row>
              <Col>
                <NumberBox>123</NumberBox>
              </Col>
              <Col>
                <NameTable>Oliver Martin Gomes</NameTable>
              </Col>
              <Col>
                <TextLevel level="nothing">azul</TextLevel>
              </Col>
              <Col>
                <NumberBox>12/06/19 - 16:17</NumberBox>
              </Col>
              <Col>
                <TextStatus status="pending">Realizado</TextStatus>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <ThinButton
                  onClick={() => setOpen(true)}
                  label="Registrar evolução"
                />
              </Col>
              <Col>
                <ThinButton
                  onClick={() => setCollapse(collapse => !collapse)}
                  isCollapse={collapse}
                  label="Resumo do alerta"
                  contained
                  hasIcon
                />
              </Col>
            </Row>
            <Row>ola</Row>

            {collapse &&
              <Row style={{ height: 300 }}>
                <CollapseBox>
                  <CollapseTitle>Sintomas do alerta vermelho:</CollapseTitle>
                  <RowList>
                    <RowItem>Dor de cabeça</RowItem>
                    <ColRight>1(leve)</ColRight>
                  </RowList>
                </CollapseBox>
              </Row>
            }

          </Table>
        </TableContainer>
        <SimpleDialog
          handleClose={() => setOpen(false)}
          open={open}
          title="Evolução do atendimento"
        // onSubmit={}
        // disabled={}
        >
          <Dialog>
            <TextareaLabel>Descritivo da evolução</TextareaLabel>
            <Textarea />
          </Dialog>
        </SimpleDialog>
      </Container>
    </>
  );
}

export default Home;

