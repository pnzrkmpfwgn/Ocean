import React from 'react';
import Ocean from '../../../Assets/Ocean.png';
import classes from './Bottom.module.css';
function Bottom() {
  return (
    <div>
      <img className={classes.img} src={Ocean} alt='Ocean' />
    </div>
  );
}

export default Bottom;
