import React from 'react';
import { useParams, useNavigate } from 'react-router';

export const Home = (props) => {
  const navigate = useNavigate();

  const handleGoStart = (event) => {
    event.preventDefault();
    navigate('/characters');
  };
  return (
    <div>
      <h1>Soy Home</h1>
      <button onClick={handleGoStart}>Ir a Characters</button>
    </div>
  );
};
