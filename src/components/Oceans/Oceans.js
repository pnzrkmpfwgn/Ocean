import React from 'react';
import {animated, useSpring, config} from 'react-spring';
import useOnScreen from '../../utils/useOnScreen';
import classes from './Oceans.module.css';

const items = [
  'Pacific Ocean',
  'Atlantic Ocean',
  'Indian Ocean',
  'Southern Ocean',
  'Arctic Ocean',
];

function Oceans() {
  const [ref, visible] = useOnScreen({rootMargin: '-100px'});
  const anim = useSpring({
    to: async (next, cancel) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(0,0px,0)'});
      }
    },
    from: {opacity: 0, transform: 'translate3d(0,30px,0)'},
    delay: 500,
    config: config.slow,
  });
  return (
    <div className={classes.container} style={{height: '70vh'}} ref={ref}>
      <animated.h1 style={anim} className={classes.H1}>
        {' '}
        Division of Oceans{' '}
      </animated.h1>
      <animated.div className={classes.list} style={anim}>
        {' '}
        {items.map((name, index) => (
          <div key={index}> {name} </div>
        ))}{' '}
      </animated.div>
    </div>
  );
}

export default Oceans;
