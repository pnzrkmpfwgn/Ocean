import React, {Fragment} from 'react';
import Header from '../header/Header';
import Landing from '../Landing/Landing';
import Etymology from '../../Etymology/Etymology';
import Origin from '../../Origin/Origin';
import Dimensions from '../../Dimensions/Dimensions';
import Oceans from '../../Oceans/Oceans';
import Life from '../../Life/Life';
import Bottom from '../Bottom/Bottom';
import classes from './MainPage.module.css';

const MainPage = () => {
  return (
    <Fragment>
      <div className={classes.background}>
        <Header />
        <Landing />
        <Etymology />
        <Origin />
        <Dimensions />
        <Oceans />
        <Life />
        <Bottom />
      </div>
    </Fragment>
  );
};

export default MainPage;
