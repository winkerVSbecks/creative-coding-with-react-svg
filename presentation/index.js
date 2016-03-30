// Import React
import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
// import clrs from './clrs.js';
// Import Spectacle Core tags
import {
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
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
// Import theme
import theme from './theme';
// Require CSS
require('normalize.css');
require('./theme/index.css');
require('static?!../assets/favicon.ico?output=assets/favicon.ico');

const images = {
  me: require('../assets/me.png'),
};

preloader(images);

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500} progress="bar">
          <Slide>
            <Heading size={1} style={{ fontFamily: 'serif', fontSize: '10rem' }}>
              क्रिएटिव कोडिंग
            </Heading>
            <Text lineHeight={1.2} margin="2rem 0">Creative Coding With React & SVG</Text>
            <Link target="_blank" href="https://github.com/rangle/intro-to-modular-css">
              <Text textColor="red">view on github</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={4}>Overview</Heading>
            <List>
              <ListItem>SVG Syntax</ListItem>
              <ListItem>Composing SVGs Using React</ListItem>
              <ListItem>Adding Interactivity</ListItem>
              <ListItem>"Re-Render the Whole World" Approach</ListItem>
            </List>
          </Slide>
          <CodeSlide
            textSize={ '1.6rem' }
            transition={['slide']}
            lang="svg"
            code={ require('raw!../assets/svg') }
            ranges={[
              { loc: [0, 24], title: 'SVG Syntax' },
              { loc: [1, 2], title: 'Circles' },
              { loc: [2, 4], title: 'Lines'  },
              { loc: [5, 8], title: 'Paths' },
              { loc: [4, 12], title: 'Groups / Layers'  },
            ]}/>
          <Slide>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M10.841,13.784c0-0.232-0.188-0.421-0.42-0.421c-0.116,0-0.222,0.048-0.297,0.124l-2.522,2.521c-0.076,0.077-0.123,0.183-0.123,0.298c0,0.232,0.188,0.421,0.42,0.421h1.508l-1.805,1.805c-0.076,0.076-0.123,0.182-0.123,0.298c0,0.232,0.188,0.42,0.42,0.42c0.116,0,0.222-0.047,0.298-0.123l2.522-2.523c0.076-0.075,0.123-0.181,0.123-0.297c0-0.232-0.188-0.42-0.42-0.42h0H8.913l1.805-1.805C10.794,14.005,10.841,13.9,10.841,13.784 M6.216,14.205c-0.116,0-0.221,0.047-0.297,0.123l-2.522,2.522c-0.077,0.076-0.124,0.181-0.124,0.297c0,0.232,0.188,0.421,0.421,0.421c0.116,0,0.221-0.047,0.297-0.123l2.523-2.523c0.077-0.075,0.123-0.181,0.123-0.297C6.636,14.394,6.448,14.205,6.216,14.205M16.722,5.063c0.001-0.036,0.006-0.072,0.006-0.109c0-1.393-1.13-2.523-2.523-2.523c-0.635,0-1.215,0.237-1.658,0.625C11.648,1.671,10.094,0.75,8.318,0.75c-2.533,0-4.623,1.867-4.985,4.299C1.853,5.401,0.75,6.729,0.75,8.318c0,1.857,1.506,3.363,3.364,3.363h11.773c1.857,0,3.363-1.506,3.363-3.363C19.25,6.75,18.174,5.436,16.722,5.063 M15.887,10.841H4.114c-1.391,0-2.523-1.132-2.523-2.523c0-1.172,0.796-2.18,1.938-2.451c0.334-0.079,0.587-0.354,0.638-0.694c0.303-2.042,2.088-3.582,4.152-3.582c1.425,0,2.321,0.299,3.102,1.502c0.132,0.205,0.768,0.762,1.009,0.796c0.039,0.006,0.117,0.008,0.117,0.008c0.202,0,0.398-0.072,0.554-0.208c0.307-0.269,0.699-0.417,1.104-0.417c0.928,0,1.683,0.755,1.682,1.691l-0.005,0.062c-0.018,0.398,0.246,0.754,0.632,0.853c1.116,0.286,1.896,1.289,1.896,2.44C18.409,9.709,17.277,10.841,15.887,10.841 M15.045,14.205c-0.116,0-0.221,0.047-0.297,0.123l-2.522,2.522c-0.076,0.076-0.123,0.181-0.123,0.297c0,0.232,0.188,0.421,0.42,0.421c0.116,0,0.221-0.047,0.298-0.123l2.522-2.523c0.076-0.075,0.123-0.181,0.123-0.297C15.466,14.394,15.277,14.205,15.045,14.205"></path>
            </svg>
            <Heading size={4}>
              Re-Render the Whole World
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit>
              Thank You!
            </Heading>
            <Layout>
              <Fit style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '1em',
              }}>
                <Image src={ images.me.replace('/', '') }
                  margin="0 1em 0 0" height="128px" />
              </Fit>
              <Fill>
                <Link target="_blank" href="http://varun.ca">
                  <Text lineHeight={1.2}
                    margin="2rem 0 0 0"
                    textAlign="left">
                    Varun Vachhar
                  </Text>
                </Link>
                <Link target="_blank"
                  href="http://varun.ca">
                  <Text lineHeight={1.2}
                    textColor="gray"
                    textAlign="left">
                    varun.ca
                  </Text>
                </Link>
                <Link target="_blank"
                  href="http://twitter.com/winkervsbecks">
                  <Text lineHeight={1.2}
                    textColor="gray"
                    textAlign="left">
                    @winkerVSbecks
                  </Text>
                </Link>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
