import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import Triangle from '../assets/interactives/triangle.js';
import AnimatedTriangle from
  '../assets/interactives/animated-triangle.js';

export const svgSyntax = (
  <CodeSlide
    textSize={ '1.6rem' }
    transition={['slide']}
    lang="svg"
    code={ require('raw!../assets/examples/svg.example') }
    ranges={[
      { loc: [0, 24], title: 'SVG Syntax' },
      { loc: [0, 1], title: 'Define Your Artboard' },
      { loc: [1, 2], title: 'Circle' },
      { loc: [2, 3], title: 'Ellipse' },
      { loc: [3, 4], title: 'Line'  },
      { loc: [6, 10], title: 'Groups / Layers'  },
      { loc: [4, 6], title: 'Polygon'  },
      { loc: [7, 8], title: 'Paths' },
    ]}/>
);

export const path = (
  <CodeSlide
    transition={['slide']}
    lang="js"
    code={ require('raw!../assets/examples/path.example') }
    ranges={[
      { loc: [0, 8], title: `Let’s draw a SVG △ with JS` },
      { loc: [1, 2], note: 'Move To (0, 60)' },
      { loc: [2, 3], note: 'Draw a Line To (30, 0)'  },
      { loc: [3, 4], note: 'Draw a Line To (60, 60)'  },
      { loc: [4, 5], note: 'Close the Path' },
      { loc: [5, 6], title: 'Join it together', note: `pathData = 'M 0 60 L 30 0 L 60 60 Z'` },
    ]}/>
);

export const reactComponent = (
  <CodeSlide
    transition={['slide']}
    lang="js"
    code={ require('raw!../assets/examples/react-component.example') }
    ranges={[
      { loc: [0, 2], title: `△ Component` },
      { loc: [4, 19] },
      { loc: [19, 24], note: 'Vertices of The △: 3 (x,y) pairs'  },
      { loc: [6, 12], note: 'Generate the path data'  },
      { loc: [13, 16], note: 'Compose the path' },
      { loc: [25, 33], title: 'Bootstrap the application' },
    ]}/>
);

const vertices = [
  [0, 200],
  [100, 0],
  [200, 200],
];

export const triangle = (
  <svg width="200" height="200">
    <Triangle verts={ vertices } color="#FF1F58" />
  </svg>
);

export const stateTriangle = (
  <svg width="200" height="200">
    <Triangle verts={ vertices } color="#00662C" />
  </svg>
);

export const composition = (
  <CodeSlide
    transition={['slide']}
    lang="svg"
    code={ require('raw!../assets/examples/composition.example') }
    ranges={[
      { loc: [], title: `Scenes` },
      { loc: [1, 2], note: `Component...` },
      { loc: [1, 5], note: `Reusable components` },
      { loc: [0, 7], title: `Compose complex scenes` },
    ]}/>
);

const pulseVerts = [0, 1, 2, 3].map(i => {
  const s = (120 + (i * 40)) / 2;
  const y = 1.73205080757 * s;
  return [
    [150 - s, 270], [150, 270 - y], [150 + s, 270],
  ];
});

export const grads = (idx) => {
  return (
    <defs>
      <linearGradient id={ `g${idx}0` }
        x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA398" />
        <stop offset="100%" stopColor="#FF8EAC" />
      </linearGradient>
      <linearGradient id={ `g${idx}1` }
        x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7465" />
        <stop offset="100%" stopColor="#FF5681" />
      </linearGradient>
      <linearGradient id={ `g${idx}2` }
        x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF5C4D" />
        <stop offset="100%" stopColor="#FF3B6C" />
      </linearGradient>
      <linearGradient id={ `g${idx}3` }
        x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4633" />
        <stop offset="100%" stopColor="#FF1F58" />
      </linearGradient>
    </defs>
  );
};

export const pulse = (
  <svg width="300" height="300">
    { grads(1) }
    <Triangle verts={ pulseVerts[3] } color="url(#g10)" />
    <Triangle verts={ pulseVerts[2] } color="url(#g11)" />
    <Triangle verts={ pulseVerts[1] } color="url(#g12)" />
    <Triangle verts={ pulseVerts[0] } color="url(#g13)" />
  </svg>
);

export const animatedPulse = (
  <svg width="300" height="300">
    <AnimatedTriangle verts={ pulseVerts[3] }
      color="#FF1F58" />
  </svg>
);

export const lazerPulse = (idx) => {
  return (
    <svg width="300" height="300">
      { grads(idx) }
      <AnimatedTriangle verts={ pulseVerts[3] }
        color={ `url(#g${idx}0)` }
        delay={ 0 } />
      <AnimatedTriangle verts={ pulseVerts[2] }
        color={ `url(#g${idx}1)` }
        delay={ 60 } />
      <AnimatedTriangle verts={ pulseVerts[1] }
        color={ `url(#g${idx}2)` }
        delay={ 110 } />
      <AnimatedTriangle verts={ pulseVerts[0] }
        color={ `url(#g${idx}3)` }
        delay={ 220 } />
    </svg>
  );
};

export const svgFromJS = (
  <CodeSlide
    transition={['slide']}
    lang="js"
    code={ require('raw!../assets/examples/svg-js.example') }
    ranges={[
      { loc: [], title: `Generating SVG From JS` },
      { loc: [0, 5], note: `Create the SVG node` },
      { loc: [6, 8], note: `Create a path node` },
      { loc: [8, 15], note: `Create the path data` },
      { loc: [16, 18], note: `Set attributes for the path` },
      { loc: [19, 20], note: `Attach the path to the SVG` },
      { loc: [21, 22], note: `Attach the SVG to the DOM` },
    ]}/>
);
