import React, { Component } from 'react';
import clrs from './clrs';
import {
  Appear,
  BlockQuote,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import theme from './theme';
import { bgColorSlide, slide, demoSlide, imageSlide } from './utils';
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
  vectorField: require('../assets/vector-field.gif'),
  processing: require('../assets/processing.svg'),
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
          { slides.robertHodgin }
          { slides.reza }
          { slides.mariusWatz }
          <Slide>
            <BlockQuote>
              <Quote>Create Something Expressive Instead of Something Functional</Quote>
            </BlockQuote>
          </Slide>
          <Slide>
            <Image src={ images.processing } width="25%" />
            <Text>2009</Text>
          </Slide>
          { bgColorSlide('blue', emoji.js) }
          <Slide>
            <Heading size={4}>Creative Coding on the Web</Heading>
            <List>
              <ListItem>HTML5 Canvas</ListItem>
              <ListItem>WebGL</ListItem>
              <ListItem>Game/Physics Engines</ListItem>
              <ListItem>SVG</ListItem>
            </List>
          </Slide>
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
            <Image src={ images.vectorField } />
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
          <Slide>
            <Heading>SVG</Heading>
            <List>
              <ListItem>SVG images can be created with any text editor and/or drawing apps.</ListItem>
              <ListItem>Can be placed in HTML.</ListItem>
              <ListItem>First class citizen of the web.</ListItem>
            </List>
          </Slide>
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
            <Heading>React & SVG</Heading>
            <List>
              <ListItem>A JavaScript library for building user interfaces</ListItem>
              <ListItem>Build UIs with components</ListItem>
              <ListItem>Supports SVG by default</ListItem>
              <ListItem>Separate concerns</ListItem>
              <ListItem>Text, input elements, responsive behaviour for free</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>SVG Artboard</Heading>
            { emoji.artboard }
          </Slide>
          { codeSlides.svgSyntax }
          <Slide>
            <Heading size={3}>Path</Heading>
            <List>
              <ListItem>Create all the other basic shapes and more.</ListItem>
              <ListItem>Lines / Arcs / Curves </ListItem>
              <ListItem>Requires a Path Definition attribute <code className="bold">d</code></ListItem>
            </List>
          </Slide>
          { slides.triangleOnArtboard([]) }
          { slides.triangleOnArtboard([0]) }
          { slides.triangleOnArtboard([0, 1]) }
          { slides.triangleOnArtboard([0, 1, 2]) }
          { slides.triangleOnArtboard([0, 1, 2, 3]) }
          { codeSlides.path }
          <Slide>
            { emoji.jxnblk }
            <Heading size={6}>
              <Link href="http://jxnblk.com/react-icons"
                target="_blank"
                textColor="blue">
                jxnblk.com/react-icons
              </Link>
            </Heading>
          </Slide>
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
          <Slide>
            <Heading textAlign="left"
              size={5}
              textColor="blue"
              className="caps"
              margin="1rem 0">State</Heading>
            <Text textAlign="left" lineHeight={1.2}>a set of variables which define what is happening in your application.</Text>
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
            <Heading size={3}>
              comforts
            </Heading>
          </Slide>
          <Slide>
            { emoji.rainbow }
            <Heading size={4} margin="0 0 2rem 0">
              Don't Have to Fight the DOM
            </Heading>
          </Slide>
          { codeSlides.domFight }
          <Slide>
            { emoji.storm }
            <Heading size={4}>
              Re-Render the Whole World
            </Heading>
          </Slide>
          {
            demoSlide(images.truncation, 'Truncation',
              'http://winkervsbecks.github.io/truncation')
          }
          {
            demoSlide(images.fermatPoint, 'Fermat Point',
              'http://winkervsbecks.github.io/fermat-point')
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
              <Fill style={ center }>
                <div>
                  { emoji.chillwave('#FFCE31', 2) }
                  <Heading size={4} textColor="#F2B200"
                    lineHeight={1.05}
                    margin="0 0 0.5rem 0">
                    Animations
                  </Heading>
                  { emoji.chillwave('#FFCE31', 2) }
                </div>
              </Fill>
            </Layout>
          </Slide>
          {
            demoSlide(images.spring, `Hooke's Law`,
              'http://winkervsbecks.github.io/hookes-law')
          }
          <Slide bgColor="blue">
            { emoji.click }
            <Heading size={4} className="caps" textColor="white">
              Interaction
            </Heading>
          </Slide>
          { slide(codeSlides.clickableTriangleInteractive) }
          { codeSlides.clickableTriangle }
          { codeSlides.clickableTriangleContainer }
          { slide(codeSlides.clickableTriangleInteractive) }
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
