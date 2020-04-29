import React, {Fragment} from 'react';

import classes from '../Deep.module.css';
import anglerfish from '../../../Assets/Fishes/anglerfish.png';

function Level4() {
  return (
    <Fragment>
      <div>
        <h3 className={classes.H3_light}>Abyssopelagic Zone (Abyss)</h3>
        <p className={classes.P_light}>
          Abyssal Zone lies just above hadalpalegic layer. The layer’s name has
          origins in the Greek language and loosely translates to “no bottom”.
          There is no sunlight in this zone so the temperatures are near
          freezing point.
        </p>{' '}
        <img className={classes.anglerfish} src={anglerfish} alt='Anglerfish' />
      </div>
    </Fragment>
  );
}

export default Level4;
