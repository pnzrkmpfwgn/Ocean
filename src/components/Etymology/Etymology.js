import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import useOnScreen from '../../utils/useOnScreen';
import classes from './Etymology.module.css';
import img from '../../Assets/Book.png';
function Etymology() {
  const [ref, visible] = useOnScreen({rootMargin: '-100px'});

  const anim1 = useSpring({
    to: async (next, cancel) => {
      if (visible) {
        await next({opacity: 1});
      }
    },
    from: {opacity: 0},
    delay: 900,
    config: {duration: 1500},
  });
  const anim2 = useSpring({
    to: async (next, cancel) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(0,0px,0)'});
      }
    },
    from: {opacity: 0, transform: 'translate3d(0,30px,0)'},
    delay: 2500,
    config: config.slow,
  });
  const anim3 = useSpring({
    to: async (next, cancel) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(0,0px,0)'});
      }
    },
    from: {opacity: 0, transform: 'translate3d(0,30px,0)'},
    delay: 4000,
    config: config.slow,
  });
  let section = (
    <React.Fragment>
      <div ref={ref}>
        <div className={classes.container}>
          <animated.img
            className={classes.img}
            src={img}
            alt='Book'
            style={anim1}
          />
          <animated.h2 className={classes.heading} style={anim1}>
            {' '}
            The Meaning of the word "ocean"{' '}
          </animated.h2>
          <animated.p className={classes.paragraph} style={anim2}>
            {' '}
            "Ocean" means the vast body of water on the surface of the globe.{' '}
          </animated.p>
          <animated.p className={classes.paragraph} style={anim3}>
            {' '}
            The word "ocean" is ultimately derived from Greek Ωκεανος (Okeanos),
            the name of the body of water thought to surround the Earth.{' '}
          </animated.p>
        </div>
      </div>
    </React.Fragment>
  );

  //return visible ? section : null;
  return section;
}
export default Etymology;
