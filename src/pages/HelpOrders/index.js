import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import Modal from '~/components/Modal';

import { Container, ButtonEdit } from './styles';

export default function Students() {
  const [helpOrderList, setHelpOrderList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('help-orders');

      setHelpOrderList(response.data);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <header>
        <h1>Pedidos de auxílio</h1>
      </header>
      <div>
        {modal && (
          <Modal
            handleClose={() => {
              setModal(false);
            }}
            handleOcurrence={ocurrence => {}}
          />
        )}

        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th width="100"> </th>
            </tr>
          </thead>
          <tbody>
            {helpOrderList.map(hp => (
              <tr>
                <td>{hp.student.name}</td>
                <td>
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    responder
                  </ButtonEdit>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
