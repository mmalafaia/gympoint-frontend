import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Container, ButtonEdit, ButtonDelete } from './styles';

export default function Students() {
  const [studentList, setStudentList] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: { name },
      });

      setStudentList(response.data);
    }

    loadStudents();
  }, [name]);

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <div>
          <button type="button">CADASTRAR</button>
          <input placeholder="Buscar aluno" />
        </div>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th width="100"> </th>
            </tr>
          </thead>
          <tbody>
            {studentList.map(student => (
              <tr key={student.email}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
