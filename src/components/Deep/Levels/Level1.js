import React, {Fragment} from 'react';

/* Images */
import herd from '../../../Assets/Fishes/Fish-herd.png';
import dolphin from '../../../Assets/Fishes/dolphin.png';
import seahorse from '../../../Assets/Fishes/Seahorse.png';
import fish1 from '../../../Assets/Fishes/fish1.png';
import fish2 from '../../../Assets/Fishes/fish2.png';
import fish5 from '../../../Assets/Fishes/fish5.png';
import shark from '../../../Assets/Fishes/shark.png';
import bubbles from '../../../Assets/bubbles.png';
import whale from '../../../Assets/Fishes/whale.png';

import classes from '../Deep.module.css';

const Level1 = () => {
  return (
    <Fragment>
      <div>
        <img className={classes.herd} src={herd} alt='Herd' />
      </div>
      <h3 className={classes.H3}> Epipelagic Zone (Sunlight Zone) </h3>
      <p className={classes.P}>
        {' '}
        The most habitable zone for marine life. From the surface the depth is
        656 feet. Most of the human activities occur here. This depth is
        relatively bright and warm.{' '}
      </p>
      <div>
        <img className={classes.fish5} src={fish5} alt='Fish' />
        <img className={classes.dolphin} src={dolphin} alt='dolphin' />
        <img className={classes.fish2} src={fish2} alt='fish' />
        <img className={classes.seahorse} src={seahorse} alt='Seahorse' />
      </div>
      <div style={{marginTop: '75px'}}>
        <img className={classes.fish1} src={fish1} alt='Fish' />
        <img className={classes.shark} src={shark} alt='Shark' />
      </div>
      <img src={bubbles} alt='bubbles' />
      <img className={classes.Level1_bubbles} src={bubbles} alt='bubbles' />
      <img
        className={classes.Level1_whale_bubbles}
        src={bubbles}
        alt='bubbles'
      />
      <img className={classes.whale} src={whale} alt='whale' />
    </Fragment>
  );
};

export default Level1;
