import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {LoginForm} from "./LoginForm";
import { MainPage } from "./MainPage";
import { SubPage } from "./SubPage";
import { Header } from "./Header";
import "./index.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/loginForm" />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/main" element={<><Header /><MainPage /></>} /> 
          <Route path="/subpage" element={<><Header /><SubPage /></>} />
          {/* tip: path가 /main에 진입했을 때, Header 컴포넌트도 보여야 하고 MainPage도 보여야 할 때, React Fragments <></> 를 사용해서 감싸주면 오류가 안뜬다. */}
        </Routes>
      </Router>
    </Provider>
  );
};

