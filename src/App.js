import React from 'react';
import MainPage from './components/layout/MainPage/MainPage';
import Deep from './components/Deep/Deep';
import LinksPage from './components/LinksPage/LinksPage';
import ContentsLinks from './components/ContentsLinks/ContentsLinks';

//React Router dom
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/' exact component={MainPage} />
        <Route path='/deep' exact component={Deep} />
        <Route path='/links' exact component={LinksPage} />
        <Route path='/contentslinks' exact component={ContentsLinks} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
