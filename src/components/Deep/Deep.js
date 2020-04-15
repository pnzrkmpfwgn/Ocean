import React, {Fragment, useState, useEffect} from 'react';
import classes from './Deep.module.css';

/*Debounce util for debouncing the position info and save performance */
import {debounce} from '../../utils/Debounce';

/*Images */
import submarine from '../../Assets/Submarine.png';

/* Dependincies */
import {useSpring, animated} from 'react-spring';
function Deep() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', debounce(handleScroll));
    return () => window.removeEventListener('scroll', debounce(handleScroll));
  }, []);

  const [{springscrollY}, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  const parallaxLevel = 1;
  springsetScrollY({
    springscrollY: scrollY,
  });

  const interpHeader = springscrollY.interpolate(
    (o) => `translateY(${o / parallaxLevel}px)`
  );
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.start}></div>
        <div className={classes.submarine}>
          <animated.img
            style={{transform: interpHeader}}
            className={classes.submarineFeatures}
            src={submarine}
            alt='submarine'
          />
          <div className={classes.card}>
            <h1 className={classes.H1}> Let's discover the depths </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Deep;
