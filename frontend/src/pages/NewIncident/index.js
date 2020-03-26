import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { title, description, value };

    try {
      await api.post('/incidents', data, {
        headers: { Authorization: ongId },
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar novo caso');
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Logo be the hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrarmos um heroi.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para dashboard
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Titulo do caso"
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            placeholder="Descrição"
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text"
            placeholder="Valor em reais"
          />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
