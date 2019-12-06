import React from 'react';

import { Container, Time } from './styles';

export default function Students() {
  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <button type="button">CADASTRAR</button>
        <input placeholder="Buscar aluno" />
      </header>
    </Container>
  );
}
