import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './actions';

// useForm 커스텀 훅 정의
const useForm = (initialState) => {
  const [values, setValues] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
};

const LoginForm = () => {
  const { values, handleChange } = useForm({ username: '', password: '' });
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 로그인 처리 로직을 추가해야 합니다.
    // 여기에서는 간단히 로그인 후 사용자 정보를 Redux에 저장하고 메인 페이지로 이동하는 예제입니다.
    console.log('Form submitted:', values);
    
    // 로그인 성공 시 사용자 정보 Redux에 저장
    dispatch(setUser({ username: values.username }));

    // 메인 페이지로 이동
    navigate('/main/dashboard'); // 예시 URL: /main/dashboard
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoFocus
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          ref={passwordRef}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
