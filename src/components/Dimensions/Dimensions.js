import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import sailBoat from '../../Assets/sailboat.png';
import classes from '../Origin/Origin.module.css';
import useOnScreen from '../../utils/useOnScreen';

function Dimensions(props) {
  //Custom hook for intersection observer
  const [ref, visible] = useOnScreen({rootMargin: '-100px'});

  //Animations
  const anim1 = useSpring({
    from: {opacity: 0, transform: 'translate3d(-20px,0,0)'},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(50px,0,0)'});
      }
    },
    config: config.gentle,
    immediate: props.animation,
  });
  const anim2 = useSpring({
    from: {opacity: 0},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1});
      }
    },
    delay: 1500,
    config: config.gentle,
    immediate: props.animation,
  });
  const anim3 = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,-50px,0)'},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(0,0px,0)'});
      }
    },
    delay: 3500,
    config: config.gentle,
    immediate: props.animation,
  });

  return (
    <React.Fragment>
      <div ref={ref} className={classes.container}>
        <animated.img style={anim1} src={sailBoat} alt='Saiboat' />
        <animated.h1 style={anim2} className={classes.H1}>
          {' '}
          The Ocean’s dimensions on Planet Earth{' '}
        </animated.h1>
        <animated.h3 style={anim2} className={classes.H3}>
          {' '}
          Saline water covers approximately{' '}
          <span className={classes.Span}> 71% </span> of Earth's Surface.{' '}
        </animated.h3>
        <animated.h3 style={anim2} className={classes.H3}>
          Average depth of Ocean is nearly 3,700 meters.{' '}
        </animated.h3>
        <animated.h4 style={anim3} className={classes.H4}>
          {' '}
          The maximum depth of the ocean is estimated to be 10,994 meters (6,831
          miles) at the <span className={classes.Span}>
            Mariana Trench
          </span>.{' '}
        </animated.h4>
      </div>
    </React.Fragment>
  );
}

export default Dimensions;
