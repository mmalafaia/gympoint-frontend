import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import { Container, ButtonBig, ButtonEdit, ButtonDelete } from './styles';

const schema = Yup.object().shape({
  name: Yup.string('Formato do email inválido').required(
    'O nome é obrigatório'
  ),
  email: Yup.string()
    .email()
    .required('O email é obrigatório'),
  age: Yup.number()
    .integer()
    .required('A idade é obrigatória'),
  weight: Yup.number().required('O peso é obrigatório'),
  height: Yup.number().required('A altura é obrigatória'),
});

export default function Students() {
  const [studentList, setStudentList] = useState([]);
  const [findName, setFindName] = useState('');
  const [pageStatus, setPageStatus] = useState('add'); // show, add, edit

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: { name: findName },
      });

      setStudentList(response.data);
    }

    loadStudents();
  }, [findName]);

  function handleSubmitFilter(e) {
    setFindName(e.target.value);
  }

  function handleAdd() {
    setPageStatus('add');
  }

  async function handleSubmitSave(data) {
    console.tron.warn(data);

    const { name, email, age, weight, height } = data;

    try {
      const response = await api.post('/students', {
        body: { name, email, age, weight, height },
      });

      setPageStatus('show');
    } catch (error) {
      console.tron.warn(error);
    }
  }

  function handleBack() {
    setPageStatus('show');
  }

  function handleEdit() {
    setPageStatus('edit');
  }

  function handleDelete() {
    window.confirm('Vocẽ tem certeza que deseja deletar?');
    setPageStatus('edit');
  }

  function tableRow(row) {
    return (
      <tr key={row.email}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.age}</td>
        <td>
          <ButtonEdit type="button" onClick={handleEdit}>
            editar
          </ButtonEdit>
          <ButtonDelete type="button" onClick={handleDelete}>
            apagar
          </ButtonDelete>
        </td>
      </tr>
    );
  }

  if (pageStatus === 'show') {
    return (
      <Container>
        <header>
          <h1>Gerenciando alunos</h1>
          <div>
            <ButtonBig type="button" onClick={handleAdd}>
              CADASTRAR
            </ButtonBig>
            <input placeholder="Buscar aluno" onKeyPress={handleSubmitFilter} />
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
            <tbody>{studentList.map(student => tableRow(student))}</tbody>
          </table>
        </div>
      </Container>
    );
  }
  if (pageStatus === 'add') {
    return (
      <Container>
        <header>
          <h1>Edição de aluno</h1>
          <div>
            <ButtonBig color="#CCC" onClick={handleBack}>
              VOLTAR
            </ButtonBig>{' '}
            <ButtonBig color="#ee4d64" type="submit" form="formSubmit">
              SALVAR
            </ButtonBig>
          </div>
        </header>
        <Form schema={schema} onSubmit={handleSubmitSave} id="formSubmit">
          <span>NOME COMPLETO</span>
          <Input name="name" placeholder="informe seu nome completo" />
          <span>ENDEREÇO DE E-MAIL</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <ul>
            <li>
              <span>IDADE</span>
              <Input name="age" type="number" placeholder="Informe sua idade" />
            </li>
            <li>
              <span>PESO (em kg)</span>
              <Input
                name="weight"
                type="number"
                placehouder="60.0"
                step="0.1"
                min="20.0"
                max="300.00"
                placeholder="Informe seu peso"
              />
            </li>
            <li>
              <span>ALTURA</span>
              <Input
                name="height"
                type="number"
                placehouder="1.70"
                step="0.01"
                min="0.80"
                max="2.50"
                placeholder="Informe sua altura"
              />
            </li>
          </ul>
        </Form>
      </Container>
    );
  }
}
