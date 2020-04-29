import React, {Fragment} from 'react';

/*Images */
import octopus from '../../../Assets/Fishes/octopus.png';
import spermWhale from '../../../Assets/Fishes/Spermwhale.png';

import classes from '../Deep.module.css';

function Level3() {
  return (
    <Fragment>
      <div>
        <h3 className={classes.H3_light}>Bathypelagic Zone (Midnight Zone)</h3>
        <p className={classes.P_light}>
          The Bathypelagic layer found just above the Abyss. The layer is also
          called dark zone. Although the Bathypelagic Zone is dark, visible
          light may be observed from sea creatures found here. Some whale
          species like sperm whale spend time here for food.
        </p>
      </div>
      <img className={classes.octopus} src={octopus} alt='octopus' />
      <img className={classes.spermWhale} src={spermWhale} alt='spermwhale' />
    </Fragment>
  );
}

export default Level3;
