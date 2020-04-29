import React, {Fragment, useEffect, useState} from 'react';
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
  const [state, setState] = useState(false);

  useEffect(() => {
    return () => setState(true);
  }, []);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Fragment>
      <div className={classes.background}>
        <Header animation={state} />
        <Landing animation={state} />
        <Etymology animation={state} />
        <Origin animation={state} />
        <Dimensions animation={state} />
        <Oceans animation={state} />
        <Life animation={state} />
        <Bottom />
      </div>
    </Fragment>
  );
};

export default MainPage;
