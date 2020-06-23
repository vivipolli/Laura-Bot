/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';
import * as moment from 'moment';

import Header from '../../components/Header';
import CardSteps from '../../components/CardSteps';
import ThinButton from '../../components/ThinButton';
import SimpleDialog from '../../components/Dialog.js';
import api from '../../services/api';
import { criticalityLevel, criticalityTag } from '../../utils/criticality';

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
  ColLeft,
  ColRight,
  CollapseTitle,
  SearchRow,
  SearchInput,
  SearchIcon,
  Dialog,
  Textarea,
  TextareaLabel,
} from './styles';


const Home = () => {

  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);
  const [panelId, setPanelId] = useState(0);
  const [patients, setPatients] = useState([]);
  const [symtoms, setSymptoms] = useState([]);

  const [filter, setFilter] = useState('');
  const [description, setDescription] = useState(null);

  const [selected, setSelected] = useState(0);
  const [countStep, setCountStep] = useState({
    "zero": "0",
    "first": "0",
    "second": "0",
    "third": "0"
  })

  const history = useHistory();

  useEffect(() => {
    api.get('patients', { params: { filter } }).then(res => {
      const data = res.data;

      const zero = data.filter(item => item.step === 0).length;
      const first = data.filter(item => item.step === 1).length;
      const second = data.filter(item => item.step === 2).length;
      const third = data.filter(item => item.step === 3).length;
      setCountStep({
        zero,
        first,
        second,
        third,
      });

      const patientsList = data.filter(item => item.step === selected);
      console.log(patientsList);
      if (!isEmpty(patientsList)) {
        setPatients(patientsList);
      } else setPatients([]);
    })
  }, [selected, filter])


  function handleSelectItem(id) {
    setSelected(id);
  }

  const handleInfo = (id) => {
    // lógica para permitir apenas um painel aberto de cada vez
    if (panelId === 0) {
      setCollapse({ ...collapse, [id]: !collapse[id] });
    } else {
      if (collapse[id]) {
        setCollapse({ ...collapse, [id]: !collapse[id] });
        setPanelId(id);
      } else {
        setCollapse({ ...collapse, [panelId]: collapse[panelId] = false });
        setCollapse({ ...collapse, [id]: !collapse[id] });
      }
    }
    setPanelId(id);

    api.get(`patients/${id}`)
      .then(resp =>
        setSymptoms(resp.data.symptoms),
      )
  };

  const onUpdate = (id) => {
    const data = { description, status: 'Atendido' };
    api.put(`patients/${id}`, data)
    .then(() => 
      { 
        setOpen(false);
        setSelected(0);
        setDescription('');
      }
    )
  };


  const stepsCards = [
    {
      icon: Icons.searchPerson,
      number: countStep.zero,
      id: 0,
    },
    {
      icon: Icons.watchLover,
      number: countStep.first,
      id: 1,
    },
    {
      icon: Icons.timer,
      number: countStep.second,
      id: 2,
    },
    {
      icon: Icons.commentBox,
      number: countStep.third,
      id: 3,
    },
  ];

  return (
    <>
      <Header onClick={() => history.push('/')} />
      <Container>
        <CardSteps
          data={stepsCards}
          selected={selected}
          handleSelected={handleSelectItem}
        />
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
                <SearchInput
                  value={filter}
                  onChange={({ target: { value } }) => setFilter(value)}
                  type="text"
                  placeholder="Busque por, prontuários, Nomes, Nível do alerta, ou status" />
                <SearchIcon src={Icons.search} alt="search" />
              </SearchRow>
            </Row>
            {!isEmpty(patients) && patients.map(row => (
              <>
                <Row>
                  <Col>
                  {/* sorry, I forgot to do this param */}
                    <NumberBox>123</NumberBox>
                  </Col>
                  <Col>
                    <NameTable>{row.name}</NameTable>
                  </Col>
                  <Col>
                    <TextLevel level={criticalityTag(row.level)}>
                      {criticalityTag(row.level)}
                    </TextLevel>
                  </Col>
                  <Col>
                    <NumberBox>
                      {`${moment(row.create_at).format('DD/MM/YYYY')} - ${moment(row.create_at).format('hh:mm')}`}
                    </NumberBox>
                  </Col>
                  <Col>
                    <TextStatus status="pending">{row.status}</TextStatus>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <ThinButton
                      onClick={() => setOpen(true)}
                      label="Registrar evolução"
                    />
                  </Col>
                  <Col>
                    <ThinButton
                      onClick={() => handleInfo(row.id)}
                      isCollapse={collapse[row.id]}
                      label="Resumo do alerta"
                      contained
                      hasIcon
                    />
                  </Col>
                </Row>
                {collapse[row.id] && (
                  <Row style={{ height: 300 }}>
                    <CollapseBox>
                      <CollapseTitle>Sintomas do alerta vermelho:</CollapseTitle>
                      {!isEmpty(symtoms) && symtoms.map(item => (
                        <RowList>
                          <ColLeft>{item.name}</ColLeft>
                          <ColRight>{criticalityLevel(item.level)}</ColRight>
                        </RowList>
                      ))}
                    </CollapseBox>
                  </Row>
                )}
                <SimpleDialog
                  handleClose={() => setOpen(false)}
                  open={open}
                  title="Evolução do atendimento"
                  onSubmit={() => onUpdate(row.id)}
                  disabled={description === null}
                >
                  <Dialog>
                    <TextareaLabel>Descritivo da evolução</TextareaLabel>
                    <Textarea
                      value={description}
                      onChange={({ target: { value } }) => setDescription(value)}
                    />
                  </Dialog>
                </SimpleDialog>
              </>
            ))}
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Home;

