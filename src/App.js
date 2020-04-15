import React from 'react';
import MainPage from './components/layout/MainPage/MainPage';
import Deep from './components/Deep/Deep';
import Test from './Test';
//React Router dom
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/' exact component={MainPage} />
        <Route path='/deep' exact component={deep} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
