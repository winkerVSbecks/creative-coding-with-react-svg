import React from 'react';

const clrs = ['#FFE200', '#34A766', '#0072BB', '#DB3B43', '#FE7541', '#4E0250'];

const ClickableTriangle = ({ vertices, color, delay = 0, handleClick }) => {
  const pathData = [
    'M', vertices[0][0], vertices[0][1],
    'L', vertices[1][0], vertices[1][1],
    'L', vertices[2][0], vertices[2][1],
    'Z',
  ].join(' ');

  const styles = {
    animation:
     'otherBounce 1.2s ease both infinite',
    transformOrigin: '50% 100%',
    animationDelay: `${ delay }ms`,
    cursor: 'pointer',
  };

  return (
    <path style={ styles }
          d={ pathData }
          fill={ color }
          onClick={ handleClick } />
  );
};

class ClickableTriangleApp extends React.Component {

  constructor() {
    super();
    this.state = {
      vertices: [ [0, 400], [200, 40], [400, 400] ],
      color: getRandomColour(),
    };
  }

  render() {
    return (
      <svg width="400" height="400">
        <ClickableTriangle vertices={ this.state.vertices }
                           color={ this.state.color }
                           handleClick={ this.changeColor } />
      </svg>
    );
  }

  changeColor = () => {
    this.setState({
      color: getRandomColour(this.state.color),
    });
  };

}

function getRandomColour(color) {
  const newColor = clrs[Math.floor(Math.random() * clrs.length)];
  return color === newColor ? getRandomColour(color) : newColor;
}

export default ClickableTriangleApp;
