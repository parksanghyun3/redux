import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    localStorage.removeItem('username');
    navigate('/loginForm');
  };

  return (
    <div>
      <h1>Error</h1>
      <button onClick={handleHomeClick}>홈으로 가기</button>
    </div>
  );
};
