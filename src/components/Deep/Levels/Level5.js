import React, {Fragment} from 'react';

import ctuhullu from '../../../Assets/Fishes/ctuhullu.png';

//React-router-dom
import {useHistory} from 'react-router-dom';

import classes from '../Deep.module.css';

function Level5() {
  //History hook
  let history = useHistory();

  const links = () => {
    history.push('/links');
  };

  const contentslinks = () => {
    history.push('/contentslinks');
  };

  return (
    <Fragment>
      <div>
        <h3 className={classes.H3_light_S}>
          Hadalpelagic Zone (The Trenches){' '}
        </h3>
        <p className={classes.P_light_S}>
          {' '}
          Hadalpelagic Zone is found from ocean basin and bellow. The zone
          cannot be explored without specialized kit. Because it’s very cold and
          the pressure is very high. Natural light cannot penetrate to the
          Trenches. So it’s completely dark.{' '}
        </p>
        <p className={classes.Ps_light}>Wonder what resides in this place?</p>
      </div>
      <div className={classes.bottom}>
        <div className={classes.btn1} onClick={links}>
          Important Links{' '}
        </div>
        <div className={classes.btn1} onClick={contentslinks}>
          {' '}
          Content's Sources
        </div>
        <img className={classes.ctuhullu} src={ctuhullu} alt='ctuhullu' />
      </div>
    </Fragment>
  );
}

export default Level5;
