import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './components/extra/homepage';
import MainPage from './components/extra/MainPage';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
