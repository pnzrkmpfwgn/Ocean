import React, {Fragment} from 'react';
import {useSpring, animated, config} from 'react-spring';
import logo from '../../../Assets/Logo.png';
import classes from './Header.module.css';
const Header = (props) => {
  //These Animations has no chaining or visibility oberservation they are obligated to play out
  //as soon as website loaded.
  const anim1 = useSpring({
    from: {opacity: 0, marginLeft: -50},
    to: {opacity: 1, marginLeft: 0},
    config: config.gentle,
    delay: 800,
    immediate: props.animation,
  });
  const anim2 = useSpring({
    from: {opacity: 0, transform: 'translate3d(40px,0,0)'},
    to: {opacity: 1, transform: 'translate3d(0px,0,0)'},
    config: config.gentle,
    delay: 1100,
    immediate: props.animation,
  });
  return (
    <Fragment>
      <div className={classes.container}>
        <animated.div style={anim1}>
          <img className={classes.img} src={logo} alt='Logo' />
        </animated.div>
        <animated.h1 className={classes.heading} style={anim2}>
          {' '}
          The Ocean{' '}
        </animated.h1>
      </div>
    </Fragment>
  );
};

export default Header;
