import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="GoBarber" />
        <h1>GYMPOINT</h1>
        <text>SEU E-MAIL</text>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <text>SUA SENHA</text>
        <Input name="password" type="password" placeholder="*************" />

        <button type="submit">
          {loading ? 'Carregango...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
