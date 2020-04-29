import React, {Fragment, useState, useEffect} from 'react';
import classes from './Deep.module.css';

/* Levels */
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Level4 from './Levels/Level4';
import Level5 from './Levels/Level5';

/*Debounce util for debouncing the position info and save performance */
import {debounce} from '../../utils/Debounce';

/*Images */
import submarine from '../../Assets/Submarine.png';
import logo from '../../Assets/Logo.png';
import bubbles from '../../Assets/bubbles.png';
/* Dependincies */
import {useSpring, animated, config} from 'react-spring';

function Deep() {
  //State of animation for cleanup
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    return () => {
      setAnimation(true);
    };
  }, []);

  const anim1 = useSpring({
    from: {opacity: 0, transform: 'translate3d(-50px,0,0)'},
    to: {opacity: 1, transform: 'translate3d(0px,0,0)'},
    config: config.gentle,
    immediate: animation,
  });

  const anim2 = useSpring({
    to: {opacity: 1, transform: 'translate3d(0,100px,0)'},
    from: {opacity: 0, transform: 'translate3d(0,250px,0)'},
    config: config.gentle,
    immediate: animation,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', debounce(handleScroll, 5, animation));
    return () => {
      window.removeEventListener(
        'scroll',
        debounce(handleScroll, 5, animation)
      );
      setScrollY(0);
    };
  }, [animation]);

  const [{springscrollY}, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  const parallaxLevel = 1;
  springsetScrollY({
    springscrollY: scrollY,
    immediate: animation,
  });

  const interpHeader = springscrollY.interpolate(
    (o) => `translateY(${o / parallaxLevel}px)`
  );
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.container1}>
          <animated.div style={anim1}>
            <img src={logo} alt='Logo' />
          </animated.div>
        </div>
        <div className={classes.start}></div>

        <div className={classes.card}>
          <h3 className={classes.H3}>Mission: Discover Depths </h3>
        </div>
        <animated.img
          style={{transform: interpHeader}}
          className={classes.submarineFeatures}
          src={submarine}
          alt='submarine'
        />
        <animated.img
          style={anim2}
          className={classes.bubbles}
          src={bubbles}
          alt='bubbles'
        />
        <div className={classes.container2}>
          <div className={classes.Level1}>
            {' '}
            <Level1 />{' '}
          </div>
          <div className={classes.Level2}>
            {' '}
            <Level2 />{' '}
          </div>
          <div className={classes.Level3}>
            {' '}
            <Level3 />{' '}
          </div>
          <div className={classes.Level4}>
            {' '}
            <Level4 />{' '}
          </div>
          <div className={classes.Level5}>
            {' '}
            <Level5 />{' '}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Deep;
