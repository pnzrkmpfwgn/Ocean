import React, {Fragment} from 'react';

/*Images */
import fish3 from '../../../Assets/Fishes/fish3.png';
import fish4 from '../../../Assets/Fishes/fish4.png';
import fish6 from '../../../Assets/Fishes/fish6.png';
import swordfish from '../../../Assets/Fishes/swordfish.png';

import classes from '../Deep.module.css';
function Level2() {
  return (
    <Fragment>
      <div>
        <h3 className={classes.H3_light}>Mesopelagic Zone (Twilight Zone)</h3>
        <p className={classes.P_light}>
          {' '}
          It can be referred as midwater zone.The light in this depth become
          fainter because it becomes harder to penetrate for sunlight. This zone
          is home to some strangest sea animals like swordfish and wolf eel.{' '}
        </p>
        <div>
          {' '}
          <img className={classes.fish3} src={fish3} alt='Fish' />{' '}
          <img className={classes.fish4} src={fish4} alt='Fish' />
          <img className={classes.fish6} src={fish6} alt='Fish' />
          <img className={classes.swordfish} src={swordfish} alt='Swordfish' />
        </div>
      </div>
    </Fragment>
  );
}

export default Level2;
