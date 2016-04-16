import React from 'react';
require('../../presentation/styles.css');

const AnimatedTriangle = ({ verts, color, delay = 0 }) => {
  const pathData = [
    'M', verts[0][0],  verts[0][1],
    'L', verts[1][0],  verts[1][1],
    'L', verts[2][0],  verts[2][1],
    'Z',
  ].join(' ');

  const styles = {
    animation:
      'bounce 1.2s ease both infinite',
    transformOrigin: '50% 100%',
    animationDelay: `${ delay }ms`,
  };

  return (
    <path style={ styles } d={ pathData } fill={ color } />
  );
};

export default AnimatedTriangle;
