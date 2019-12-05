import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} sizes="48" alt="Gympoint" />
          <h1>GYMPOINT</h1>
        </div>
        <nav>
          <div>
            <Link to="/dashboard">ALUNOS</Link>
            <Link to="/dashboard">PLANOS</Link>
            <Link to="/dashboard">MATRÍCULAS</Link>
            <Link to="/dashboard">PEDIDOS DE AUXÍLIO</Link>
          </div>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
