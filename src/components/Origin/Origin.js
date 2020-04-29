import React from 'react';
import Wave from '../../Assets/Wave.png';
import classes from './Origin.module.css';
import {useSpring, animated, config} from 'react-spring';
import useOnScreen from '../../utils/useOnScreen';
function Origin(props) {
  const [ref, visible] = useOnScreen({rootMargin: '-100px'});
  const anim1 = useSpring({
    from: {transform: 'translate3d(-135px,0,0)'},
    to: async (next) => {
      if (visible) {
        await next({transform: 'translate3d(0px,0,0)'});
      }
    },
    config: config.wobbly,
    immediate: props.animation,
  });
  const anim2 = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,-25px,0)'},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(0,0px,0)'});
      }
    },
    delay: 800,
    config: config.wobbly,
    immediate: props.animation,
  });
  const anim3 = useSpring({
    from: {opacity: 0},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1});
      }
    },
    delay: 1500,
    config: config.slow,
    immediate: props.animation,
  });

  return (
    <React.Fragment>
      <div ref={ref} className={classes.container}>
        <animated.img
          style={anim1}
          className={classes.Img}
          src={Wave}
          alt='Wave'
        />
        <animated.h1 style={anim2} className={classes.H1}>
          {' '}
          The Origin of Earth's Ocean{' '}
        </animated.h1>
        <animated.h3 style={anim3} className={classes.H3}>
          {' '}
          The origin of the Ocean is unknown.{' '}
        </animated.h3>
        <animated.p style={anim3} className={classes.P}>
          {' '}
          Oceans are thought to have formed in the{' '}
          <span className={classes.Span}>
            {' '}
            Hadean Eon (began with the formation of Earth about 4.6 bilion years
            ago)
          </span>{' '}
          and may have been the cause for the emergence of life.{' '}
        </animated.p>
      </div>
    </React.Fragment>
  );
}

export default Origin;
