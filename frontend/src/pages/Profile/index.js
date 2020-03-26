import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Casos } from './styles';

import logo from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const name = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api
      .get('/profile', {
        headers: { Authorization: ongId },
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Não foi possivel deletar');
    }
  }

  function handleLogOut() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="Logo be the hero" />
        <span>{name}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogOut} type="button">
          <FiPower color="#e02041" size={18} />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <Casos>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </Casos>
    </Container>
  );
}
