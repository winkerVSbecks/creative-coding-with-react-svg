import React from 'react';

const Triangle = ({ verts, color }) => {
  const pathData = [
    'M', verts[0][0],  verts[0][1],
    'L', verts[1][0],  verts[1][1],
    'L', verts[2][0],  verts[2][1],
    'Z',
  ].join(' ');

  return (
    <path d={ pathData } fill={ color } />
  );
};

export default Triangle;
