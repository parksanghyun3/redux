import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import LoginForm from './LoginForm';
import MainPage from './MainPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/*" element={<Header><MainPage /></Header>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
