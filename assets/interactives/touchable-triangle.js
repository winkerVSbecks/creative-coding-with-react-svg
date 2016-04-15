import React from 'react';

const TouchableTriangle = ({ verts, color, delay, onClick }) => {
  const pathData = [
    'M', verts[0][0],  verts[0][1],
    'L', verts[1][0],  verts[1][1],
    'L', verts[2][0],  verts[2][1],
    'Z',
  ].join(' ');

  const styles = {
    animation:
     'bounce 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both infinite',
    transformOrigin: '50% 100%',
    animationDelay: `${ delay }ms`,
  };

  return (
    <path style={ styles }
          d={ pathData }
          fill={ color }
          onClick={ onClick } />
  );
};

export default TouchableTriangle;
