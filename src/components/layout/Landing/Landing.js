import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import {useHistory} from 'react-router-dom';
import classes from './Landing.module.css';

const Landing = (props) => {
  let history = useHistory();
  const anim1 = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    delay: 3000,
    config: {duration: 1900},
    immediate: props.animation,
  });
  const anim2 = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,20px,0)'},
    to: {opacity: 1, transform: 'translate3d(0,0px,0)'},
    delay: 2000,
    config: config.stiff,
    immediate: props.animation,
  });
  const anim3 = useSpring({
    from: {opacity: 0, transfrom: 'translate3d(0,0,-15px)'},
    to: {opacity: 1, transform: 'translate3d(0,0,0px)'},
    delay: 4000,
    config: {duration: 1900},
    immediate: props.animation,
  });
  const links = () => {
    history.push('/links');
  };

  const contentslinks = () => {
    history.push('/contentslinks');
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <animated.span onClick={links} className={classes.Link} style={anim2}>
          Important Links
        </animated.span>

        <animated.span
          onClick={contentslinks}
          style={anim2}
          className={classes.Link}
        >
          Content's Sources
        </animated.span>
        <animated.h1 className={classes.heading} style={anim1}>
          The Life Source of Planet Earth
        </animated.h1>
        <animated.h2 className={classes.heading2} style={anim3}>
          Let's Learn More About It!
        </animated.h2>
      </div>
    </React.Fragment>
  );
};

export default Landing;
