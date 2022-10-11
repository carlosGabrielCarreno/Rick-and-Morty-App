import React from 'react';
import { useNavigate } from 'react-router';

export const Home = (props) => {
  const navigate = useNavigate();

  const handleGoStart = (event) => {
    event.preventDefault();
    navigate('/characters');
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        className="bg-cyan-500 hover:bg-cyan-600 p-1 animate__animated animate__rubberBand"
        onClick={handleGoStart}
      >
        Get started
      </button>
    </div>
  );
};
