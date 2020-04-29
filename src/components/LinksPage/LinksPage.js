import React from 'react';
import {Fragment} from 'react';

import classes from './LinksPage.module.css';
import Logo from '../../Assets/Logo.png';

function LinksPage() {
  return (
    <Fragment>
      <div className={classes.background}>
        <img src={Logo} alt='Logo' />
        <p className={classes.P}>
          {' '}
          Here are some charities and organisations who are cleaning and
          protecting the ocean:{' '}
        </p>
        <div className={classes.links_container}>
          <a className={classes.link} href='https://www.projectaware.org/'>
            {' '}
            Project AWARE{' '}
          </a>
          <a className={classes.link} href='https://www.lonelywhale.org/'>
            {' '}
            Lonely Whale{' '}
          </a>
          <a className={classes.link} href='https://www.sealegacy.org/'>
            {' '}
            SeaLegacy{' '}
          </a>
          <a className={classes.link} href='https://oceandefenders.org/'>
            {' '}
            Ocean Defenders Alliance{' '}
          </a>
          <a className={classes.link} href='https://www.pangeaseed.foundation/'>
            {' '}
            PangeaSeed Foundation{' '}
          </a>
          <a className={classes.link} href='https://www.ghostgear.org/'>
            {' '}
            Global Ghost Gear Initiative{' '}
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default LinksPage;
