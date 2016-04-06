import React, { Component } from 'react';
import clrs from './clrs';
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Slide,
  Spectacle,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import theme from './theme';
import { codePen, bgColorSlide, slide, demoSlide, imageSlide } from './utils';
import * as slides from './slides';
import * as emoji from './emoji';
import * as codeSlides from './code-slides';
require('normalize.css');
require('./theme/index.css');
require('static?!../assets/favicon.ico?output=assets/favicon.ico');

const triangles = [
  require('../assets/triangles/checkwave-triangle.gif'),
  require('../assets/triangles/glossy.gif'),
  require('../assets/triangles/shadow.gif'),
  require('../assets/triangles/reuleauxtriangle.gif'),
  require('../assets/triangles/itsalive.gif'),
  require('../assets/triangles/triangleninja.gif'),
  require('../assets/triangles/triangleinspace.gif'),
  require('../assets/triangles/trails.gif'),
  require('../assets/triangles/hypnotriangle.gif'),
  require('../assets/triangles/thecentroid.gif'),
  require('../assets/triangles/thecircumcenter.gif'),
  require('../assets/triangles/lerpingtriangle.gif'),
];

preloader(triangles);

const images = {
  orange: require('../assets/orange.gif'),
  ropeinterface: require('../assets/ropeinterface.gif'),
  manypolygons: require('../assets/manypolygons.gif'),
  svg: require('../assets/svg.jpg'),
  underTheHood: require('../assets/svg-under-the-hood.svg'),
  fermatPoint: require('../assets/fermat-point.gif'),
  spring: require('../assets/spring.gif'),
  pizzaTheorem: require('../assets/pizza-theorem.gif'),
  truncation: require('../assets/truncation.gif'),
  oam: require('../assets/oam.gif'),
};

preloader(images);

const center = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500} progress="bar">
          { slides.hello }
          { slides.overview }
          <Slide>
            { emoji.math }
            <Heading size={3} lineHeight={1.2}>
              Mathematically<br/>Derived Graphics
            </Heading>
          </Slide>
          { bgColorSlide('blue', emoji.js) }
          <Slide>
            <Heading size={6} textAlign="left">
              Ellsworth Kelly Animated <small style={{ color: clrs.gray }}>» canvas</small>
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
            <Heading size={6} textAlign="left">A Triangle Every Day <small style={{ color: clrs.gray }}>» p5.js, paper.js, etc.</small></Heading>
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
          {
            bgColorSlide(
              'blue',
              <div>
                <Image src={ images.underTheHood} width="10em" />
                <Heading textColor="white" size={6}>SVG</Heading>
              </div>
            )
          }
          { imageSlide(images.svg) }
          {
            bgColorSlide(
              'blue',
              <div>
                <Image src={ images.underTheHood} width="10em" />
                { emoji.reactIcon }
                <Heading textColor="white" size={6}>SVG & React</Heading>
              </div>
            )
          }
          <Slide>
            <Heading size={4}>SVG Artboard</Heading>
            { emoji.artboard }
          </Slide>
          { codeSlides.svgSyntax }
          { slides.triangleOnArtboard([]) }
          { slides.triangleOnArtboard([0]) }
          { slides.triangleOnArtboard([0, 1]) }
          { slides.triangleOnArtboard([0, 1, 2]) }
          { slides.triangleOnArtboard([0, 1, 2, 3]) }
          { codeSlides.path }
          { codeSlides.reactComponent }
          { slide(codeSlides.triangle) }
          { codeSlides.composition }
          { slide(codeSlides.pulse) }
          <Slide bgColor="blue">
            { emoji.state }
            <Heading size={4} className="caps" textColor="white">
              State Driven
            </Heading>
          </Slide>
          { slides.statefulTriangle }
          {
            demoSlide(images.pizzaTheorem, 'Pizza Theorem',
              'http://winkervsbecks.github.io/pizza-theorem',
              '#D0DDF5')
          }
          <Slide bgColor="blue">
            { emoji.chillwave(clrs.white) }
            <Heading size={4}
              margin="0 0 0.5rem 0"
              textColor="white"
              style={{ letterSpacing: '0.1em' }}>
              ANIMATIONS
            </Heading>
            { emoji.chillwave(clrs.white) }
          </Slide>
          <Slide>
            <Heading size={4}>Define Animation in CSS</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="css"
                  textSize="1.5rem"
                  margin="2rem 0"
                  source={
                    require('raw!../assets/examples/animation.example')
                  }
                />
              </Fill>
              <Fit>
                <div style={{ marginLeft: '2rem' }}>
                  { codeSlides.animatedPulse }
                </div>
              </Fit>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={4} margin="0 0 1rem 0">
              Animated Triangle
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  textSize="1.1rem"
                  source={
                    require('raw!../assets/examples/animated-triangle.example')
                  }
                />
              </Fill>
              <Fit>
                <div style={{ margin: '6rem 0 0 1rem' }}>
                  { codeSlides.animatedPulse }
                </div>
              </Fit>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={4} margin="0 0 1rem 0">
              Animated Triangle Lazer Pulse
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  textSize="1.1rem"
                  source={
                    require('raw!../assets/examples/animated-triangles.example')
                  }
                />
              </Fill>
              <Fit>
                <div style={{ margin: '6rem 0 0 1rem' }}>
                  { codeSlides.lazerPulse(2) }
                </div>
              </Fit>
            </Layout>
          </Slide>
          <Slide>
            { emoji.couch }
            <Heading
              size={3}>
              Benefits
            </Heading>
          </Slide>
          <Slide>
            { emoji.rainbow }
            <Heading size={4} margin="0 0 2rem 0">
              Don't Have to Fight the DOM
            </Heading>
          </Slide>
          <Slide>
            { emoji.storm }
            <Heading size={4}>
              Re-Render the Whole World
            </Heading>
          </Slide>
          {
            demoSlide(images.fermatPoint, 'Fermat Point',
              'http://winkervsbecks.github.io/fermat-point')
          }
          {
            demoSlide(images.truncation, 'Truncation',
              'http://winkervsbecks.github.io/truncation')
          }
          <Slide>
            { emoji.objects }
            <Heading size={4}>
              Object Model vs Renderings
            </Heading>
          </Slide>
          { slides.renderings }
          <Slide>
            <Heading size={4}>Object Model</Heading>
            <List>
              <Appear><ListItem>Nested tree of layers & components</ListItem></Appear>
              <Appear><ListItem>You modify properties/styles and React handles the drawing.</ListItem></Appear>
              <Appear><ListItem>You can add interaction handlers or animations.</ListItem></Appear>
              <Appear><ListItem>You work with animations rather than drawing graphics.</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>Create Animations with</Heading>
            <List>
              <ListItem>CSS</ListItem>
              <ListItem>Greensock</ListItem>
              <ListItem>JS / React Motion / Rebound JS / etc.</ListItem>
            </List>
          </Slide>
          <Slide>
            <Layout style={ center }>
              <Fill>
                { emoji.box }
                <Heading size={4} textColor="#89664c" lineHeight={1.05}>
                  Discrete <span style={{ color: '#d3976e'}}>&</span><br/>Self Contained<br/>Objects
                </Heading>
              </Fill>
              <Fit style={ center }>
                { emoji.plus }
              </Fit>
              <Fit style={ center }>
                <div>
                  { emoji.chillwave(clrs.blue, 2) }
                  <Heading size={4} textColor="blue"
                    lineHeight={1.05}
                    margin="0 0 0.5rem 0">
                    Animations
                  </Heading>
                  { emoji.chillwave(clrs.blue, 2) }
                </div>
              </Fit>
            </Layout>
          </Slide>
          {
            demoSlide(images.spring, `Hooke's Law`,
              'http://winkervsbecks.github.io/hookes-law')
          }
          {
            demoSlide(images.oam,
              'OAM Site – collaboration with Ainsley Wagoner',
              'http://winkervsbecks.github.io/oam-site',
              'rgba(170,170,170, 0.25)')
          }
          { slides.starter }
          { slides.closing }
          { slides.credits }
        </Deck>
      </Spectacle>
    );
  }
}
