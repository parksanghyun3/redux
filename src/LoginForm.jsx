import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './actions';

const useForm = (params) => {
  const [values, setValues] = useState(params);
  const [errors, setErrors] = useState({});

  // 인풋에 value 값 입력될 때마다 감지
  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({
      // 스프레드 문법으로 input에서 들어오는 value 값을 감지해서 [name]: value 의 형식으로 저장되게 끔 지정해준다.
      ...values, [name]: value,
    });
  };

  return {
    values,
    inputChange,
    setErrors,
    errors
  };
};

const validate = (values) => {
  const errors = {};
  // console.log(errors);
  if (!values.username) {
    errors.username = "닉네임을 적어주세요.";
  } else if (values.username.length < 3) {
    errors.username = "3글자 이상 적어주세요.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 적어주세요.";
  } else if (values.password.length < 6) {
    errors.password = "6글자 이상 적어주세요.";
  }

  return errors;
};

export const LoginForm = () => {
  const { values, inputChange, setErrors, errors } = useForm({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitBtn = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // Object.keys로 validate(values)객체를 배열로 변경해 반환하면 length값을 구할 수 있다 -> 그럼 조건문으로 length 확인 후 로그인과 메인 보내기 가능
    console.log(Object.keys(validate(values)));
  
    if (Object.keys(validate(values)).length === 0) {
      // 헤더에 values.username 전송
      dispatch(setUser({ username: values.username }));
  
      // 메인 페이지로 이동
      navigate("/main");
    }
  };

  return (
    <div className="login-wrap">
      <form onSubmit={submitBtn} className="login-form">
        <div className="inp-wrap">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={inputChange}
            autoFocus
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="inp-wrap">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={inputChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};