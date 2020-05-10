import React from 'react';
import {Fragment} from 'react';

import classes from './ContentsLinks.module.css';
import Logo from '../../Assets/Logo.png';

function ContentsLinks() {
  return (
    <Fragment>
      <div className={classes.background}>
        <img src={Logo} alt='Logo' />
        <p className={classes.P}>
          {' '}
          The contents that I've used in this website:{' '}
        </p>
        <p className={classes.sub_heading}> Paragraph Infos: </p>
        <div className={classes.links_container}>
          <a
            className={classes.link}
            href=' https://www.etymonline.com/word/ocean'
          >
            {' '}
            Etymology{' '}
          </a>
          <a className={classes.link} href='https://www.noaa.gov/oceans-coasts'>
            {' '}
            Ocean Biosphere{' '}
          </a>
          <a className={classes.link} href='https://www.tos.org/oceanography/'>
            {' '}
            Oceanographical information{' '}
          </a>
          <a
            className={classes.link}
            href='https://web.archive.org/web/20150311032757/http://ngdc.noaa.gov/mgg/global/etopo1_ocean_volumes.html'
          >
            {' '}
            Dimensions of Ocean{' '}
          </a>
          <a
            className={classes.link}
            href='https://geology.com/records/deepest-part-of-the-ocean.shtml'
          >
            {' '}
            Geological information{' '}
          </a>
          <a
            className={classes.link}
            href='https://www.worldatlas.com/articles/the-5-layers-of-the-ocean.html'
          >
            {' '}
            Ocean Layers{' '}
          </a>
        </div>
        <p className={classes.sub_heading}> Image Sources: </p>
        <div className={classes.links_container}>
          <a
            className={classes.link}
            href='https://www.redbubble.com/i/art-print/Astronaut-and-Diver-Last-Frontiers-by-dru1138/28071954.1G4ZT'
          >
            {' '}
            Astronaut and Diver art{' '}
          </a>
          <a
            className={classes.link}
            href='https://www.henrychancpuprogramming.com/fullscreen-page/comp-jpk7qwbr/9b66637d-8778-485a-955f-eb61b7f6fa8f/0/%3Fi%3D0%26p%3Dcmbf5%26s%3Dstyle-jpk7qwl8'
          >
            {' '}
            Wavy Sea Image{' '}
          </a>
          <a
            className={classes.link}
            href='https://silhouettegarden.com/download/cthulhu-silhouette/#terms'
          >
            {' '}
            Arch Demon Cthulhu Silhouette{' '}
          </a>
          <a
            className={classes.link}
            href='https://ya-webdesign.com/imgdownload.html'
          >
            {' '}
            Fish Herd Image{' '}
          </a>
          <a
            className={classes.link}
            href='https://www.cleanpng.com/png-bubble-seabed-graphic-design-submarine-water-bubbl-273528/ '
          >
            Bubbles Image
          </a>
          <a
            className={classes.link}
            href='https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/'
            title='Flaticon'
          >
            Anglerfish
          </a>
        </div>
        <p className={classes.sub_heading}> Submarine paralax: </p>
        <div className={classes.links_container}>
          <a
            className={classes.link}
            href='https://codesandbox.io/u/creativiii '
          >
            {' '}
            Paralax code{' '}
          </a>
        </div>
        <p className={classes.P}>
          {' '}
          Note: I've lost track of some the content's links I am sorry that I
          couldn't include them.{' '}
        </p>
      </div>
    </Fragment>
  );
}

export default ContentsLinks;
