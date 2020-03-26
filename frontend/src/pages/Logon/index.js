import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Form } from './styles';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (err) {
      alert('Invalid ID');
    }
  }

  return (
    <Container>
      <section className="form">
        <img src={logo} alt="Logo be the hero" />
        <Form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            type="text"
            placeholder="Sua ID"
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>
      <img src={heroesImg} alt="Heros" />
    </Container>
  );
}
