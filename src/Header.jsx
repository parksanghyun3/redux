// Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './actions';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    dispatch(setUser(null));
    navigate('/loginForm'); 
  };

  return (
    <header>
      <div>안녕하세요 {user.username}</div>
      {user && (
        <button onClick={handleLogout}>로그아웃</button>
      )}
    </header>
  );
};
