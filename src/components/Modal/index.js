import React from 'react';
import {
  Container,
  Card,
  Title,
  Question,
  Answer,
  ButtonAdd,
  ButtonCancel,
} from './styles';

export default function Modal({ handleClose, handleAdd }) {
  return (
    <Container>
      <Card>
        <Title>PERGUNTA DO ALUNO</Title>
        <Question>
          Olá pessoal da cademia, gostaria de saber se quando acordar deve
          ingferir batata sode e frando log de primeira, preparar asmartmias e
          lotar a geladeira, dou um pico de insule ejogo o jodjaosdija
        </Question>
        <Title>SUA RESPOSTA</Title>
        <Answer placeholder="Digite aqui sua resposta" type="text" />

        <ButtonAdd onPress={handleAdd}>Responder aluno</ButtonAdd>
        <ButtonCancel onPress={handleClose}>Voltar</ButtonCancel>
      </Card>
    </Container>
  );
}
