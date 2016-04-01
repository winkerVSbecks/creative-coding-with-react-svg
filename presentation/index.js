import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import {
  Appear,
  // BlockQuote,
  // Cite,
  // Code,
  // CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  // Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import theme from './theme';
import { codePen, iFrame, bgColorSlide, imageSlide, slide } from './utils';
import * as slides from './slides';
import * as emoji from './emoji';
require('normalize.css');
require('./theme/index.css');
require('static?!../assets/favicon.ico?output=assets/favicon.ico');

const triangles = [
  require('../assets/checkwave-triangle.gif'),
  require('../assets/glossy.gif'),
  require('../assets/shadow.gif'),
  require('../assets/reuleauxtriangle.gif'),
  require('../assets/itsalive.gif'),
  require('../assets/triangleninja.gif'),
  require('../assets/triangleinspace.gif'),
  require('../assets/trails.gif'),
  require('../assets/hypnotriangle.gif'),
  require('../assets/thecentroid.gif'),
  require('../assets/thecircumcenter.gif'),
  require('../assets/lerpingtriangle.gif'),
];

preloader(triangles);

const images = {
  orange: require('../assets/orange.gif'),
  ropeinterface: require('../assets/ropeinterface.gif'),
  manypolygons: require('../assets/manypolygons.gif'),
  svg: require('../assets/svg.jpg'),
};

preloader(images);

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500} progress="bar">
          { slides.hello }
          { bgColorSlide('blue', emoji.js) }
          <Slide>
            <Heading size={6} textAlign="left">
              Ellsworth Kelly Animated
            </Heading>
            <Image width="14vw" src={ images.manypolygons } />
            <Image width="20vw" src={ images.orange } />
            <Image width="20vw" src={ images.ropeinterface } />
          </Slide>
          <Slide>
            <Heading size={4} margin="0 0 2rem 0" textAlign="left">
              p5.js
            </Heading>
            { codePen('EKwVdZ', 400) }
          </Slide>
          <Slide>
            <Heading size={6} textAlign="left">A Triangle Every Day – p5.js, paper.js, etc.</Heading>
            <Layout style={{ flexWrap: 'wrap' }} fill>
              {
                triangles.map((triangle, idx) => {
                  return (
                    <Fill key={ idx }>
                      <Image width="15vw" src={ triangle } />
                    </Fill>
                  );
                })
              }
            </Layout>
          </Slide>
          <Slide bgImage={ images.svg }>
            <Appear><div>{ emoji.confused }</div></Appear>
          </Slide>
          <Slide>
            <Heading size={4}>SVG Canvas</Heading>
            { emoji.canvas }
          </Slide>
          <CodeSlide
            textSize={ '1.6rem' }
            transition={['slide']}
            lang="svg"
            code={ require('raw!../assets/svg.example') }
            ranges={[
              { loc: [0, 24], title: 'SVG Syntax' },
              { loc: [0, 1], title: 'Define Your Canvas' },
              { loc: [1, 2], title: 'Circle' },
              { loc: [2, 3], title: 'Ellipse' },
              { loc: [3, 4], title: 'Line'  },
              { loc: [4, 6], title: 'Polygon'  },
              { loc: [6, 10], title: 'Groups / Layers'  },
              { loc: [7, 8], title: 'Paths' },
            ]}/>
          <CodeSlide
            textSize={ '1.6rem' }
            transition={['slide']}
            lang="js"
            code={ require('raw!../assets/path.example') }
            ranges={[
              { loc: [0, 8], title: `Let’s draw a SVG △ with JS` },
              { loc: [1, 2], title: 'Move To (60, 60)' },
              { loc: [2, 3], title: 'Draw a Line To (30, 0)'  },
              { loc: [3, 4], title: 'Draw a Line To (60, 60)'  },
              { loc: [4, 5], title: 'Close the Path' },
              { loc: [5, 6], title: 'Join it together', note: 'M 0 60 L 30 0 L 60 60 Z... thank you Brent Jackson!' },
            ]}/>
          {
            slide(iFrame('//winkervsbecks.github.io/a-triangle-everyday/svg-triangle-pulse-lazer'))
          }
          <Slide>
            { emoji.storm }
            <Heading size={4}>
              Re-Render the Whole World
            </Heading>
          </Slide>
          { slides.closing }
        </Deck>
      </Spectacle>
    );
  }
}
