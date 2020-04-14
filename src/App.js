import React from 'react';
import Header from './components/layout/header/Header';
import Landing from './components/layout/Landing/Landing';
import Etymology from './components/Etymology/Etymology';
import Origin from './components/Origin/Origin';
import Dimensions from './components/Dimensions/Dimensions';
import Oceans from './components/Oceans/Oceans';
import Life from './components/Life/Life';
import Bottom from './components/layout/Bottom/Bottom';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <Etymology />
      <Origin />
      <Dimensions />
      <Oceans />
      <Life />
      <Bottom />
    </React.Fragment>
  );
};

export default App;
