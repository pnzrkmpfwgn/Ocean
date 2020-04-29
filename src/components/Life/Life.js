import React, {useState} from 'react';
import useOnScreen from '../../utils/useOnScreen';
import {animated, config, useSpring} from 'react-spring';
import img from '../../Assets/Astro-naut.jpg';
import img2 from '../../Assets/Submarine.png';
import classes from './Life.module.css';

//React-router-dom
import {useHistory} from 'react-router-dom';

// Configuration for submarine's animation
const Config = {friction: 5, tension: 120, mass: 140};
function Life(props) {
  // Custom hook for user's viewport
  const [ref, visible] = useOnScreen({rootMargin: '-100px'});

  //State for Astro-naut's rotation animation
  const [state, setState] = useState(false);

  //History variable
  let history = useHistory();

  // Animations
  const anim = useSpring({
    from: {opacity: 0, transform: 'translate3d(-75px,0,0)'},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1, transform: 'translate3d(0px,0,0)'});
      }
    },
    config: config.wobbly,
    immediate: props.animation,
  });
  const anim2 = useSpring({
    from: {transfrom: 'translate(0deg)'},
    to: {
      transform: `rotate(
        ${state ? 180 : 0}deg)`,
    },
    config: {friction: 20, tension: 120, mass: 140},
    immediate: props.animation,
  });
  const anim3 = useSpring({
    from: {opacity: 0},
    to: async (next) => {
      if (visible) {
        await next({
          opacity: 1,
        });
      }
    },

    immediate: props.animation,
  });
  const anim4 = useSpring({
    from: {transform: 'translate3d(0,20px,0)'},
    to: async (next) => {
      if (visible) {
        await next({
          transform: 'translate3d(0,10px,0)',
        });
      }
    },
    immediate: props.animation,
    config: Config,
  });

  //Handling routing
  const Route = () => {
    history.push('/deep');
  };

  return (
    <React.Fragment>
      <div ref={ref} className={classes.container}>
        <animated.p style={anim} className={classes.paragraph}>
          {' '}
          As oceanographers state only 5% of all oceans has been discovered.
        </animated.p>
        <animated.p style={anim} className={classes.paragraph}>
          There are only 230,000 species discovered. There might be{' '}
          <span className={classes.Span}> 2,000,000 </span>
          species are waiting to be discovered in the other{' '}
          <span className={classes.Span}>95%</span> of the oceans.
        </animated.p>
      </div>

      <div className={classes.container2}>
        <animated.div style={anim3} className={classes.imgContainer}>
          {' '}
          <animated.img
            style={anim2}
            onClick={() => {
              setState(!state);
            }}
            className={classes.img}
            src={img}
            alt='Astro-naut'
          />
          <animated.p className={classes.paragraph} style={anim3}>
            It is exciting to think about all the species and places we might
            discover.
          </animated.p>
          <animated.span onClick={Route} style={anim3} className={classes.link}>
            {' '}
            So Let's dive in!{' '}
          </animated.span>
        </animated.div>
        <animated.img
          style={anim4}
          className={classes.submarine}
          src={img2}
          alt='Submarine'
        />{' '}
      </div>
    </React.Fragment>
  );
}

export default Life;
/**

 */
