import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <header>
        <div>Welcome, {user ? `${user.username}님` : 'Guest'}</div>
        {/* 여기에 더 많은 헤더 내용을 추가할 수 있습니다. */}
      </header>
      {children}
    </>
  );
};

export default Header;
