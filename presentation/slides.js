import React from 'react';
import {
  Appear,
  CodePane,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import * as emoji from './emoji';
import * as codeSlides from './code-slides';

const images = {
  me: require('../assets/me.png'),
  cracking: require('../assets/generative/Absolut-Cracking.gif'),
  amberLayer: require('../assets/generative/AmberLayer.gif'),
  cme04: require('../assets/generative/cme_04.jpg'),
  cme05: require('../assets/generative/cme_05.jpg'),
  fieldFlow: require('../assets/generative/field-flow.png'),
};

preloader(images);

export const hello = (
  <Slide>
    <Heading size={6} textColor="blue" fit>
      Creative Coding with
    </Heading>
    <Heading size={1} fit>
      React & SVG
    </Heading>
    <Layout>
      <Fit style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '1em',
      }}>
        <Image src={ images.me }
          margin="0 1em 0 0" height="160px"
          style={{ borderRadius: '50%' }}/>
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
);

export const overview = (
  <Slide>
    <Heading size={4}>Overview</Heading>
    <List>
      <ListItem>Background</ListItem>
      <ListItem>SVG Syntax</ListItem>
      <ListItem>Creating SVG images with React</ListItem>
      <ListItem>Animations</ListItem>
      <ListItem>Demos & Features</ListItem>
    </List>
  </Slide>
);

export const closing = (
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
        <Image src={ images.me }
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
);

export const starter = (
  <Slide>
    <Heading size={1} fit>
      React SVG Starter
    </Heading>
    <Heading size={3} margin="2rem 0 0 0" fit>
      <Link textColor="red"
        href="https://github.com/winkerVSbecks/react-svg-starter"
        target="_blank">
        github.com/winkerVSbecks/react-svg-starter
      </Link>
    </Heading>
  </Slide>
);

export const credits = (
  <Slide>
    <Heading size={6}>Icons and Images from</Heading>
    <List>
      <ListItem>
        <Link textColor="blue"
          href="http://iconmonstr.com">
          iconmonstr.com (Alexander Kahlkopf)
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="blue"
          href="https://dribbble.com/shots/1934932-77-Essential-Icons-Free-Download">
          Bryn Taylor
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="blue"
          href="https://dribbble.com/shots/1925069-Lynny-Icon-Set-Free">
          Matthew Skiles
        </Link>
      </ListItem>
      <ListItem>
        <Link textColor="blue"
          href="http://emojione.com">
          emojione.com
        </Link>
      </ListItem>
    </List>
  </Slide>
);

export const renderings = (
  <Slide>
    <Heading size={4}>
      Renderings
    </Heading>
    <Layout>
      <Fit>
        <CodePane
          lang="js"
          textSize="1.5rem"
          margin="2rem 0"
          source={
            require('raw!../assets/examples/renderings.example')
          }
        />
      </Fit>
      <Fill style={{
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}>
        <div className="circle" />
      </Fill>
    </Layout>
  </Slide>
);

export function triangleOnArtboard(steps) {
  const defs = [
    <span key={1}>M 0,60 </span>,
    <span key={2}>&nbsp;&nbsp; L 30,0 </span>,
    <span key={3}>&nbsp;&nbsp; L 60,60</span>,
    <span key={4}>&nbsp;&nbsp; Z</span>,
  ];

  const tStep = steps.length - 1;
  const stepComps = tStep === -1 ? (<span key={0}>Path Def</span>) :
                                  steps.map(idx => defs[idx]);

  return (
    <Slide transition={['fade']}>
      <Text style={{ fontFamily: 'monospace', margin: '0 0 4rem 0' }}>
        { stepComps }
      </Text>
      { emoji.triangleOnArtboard(steps[tStep]) }
    </Slide>
  );
}

const center = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 0 0px',
  color: '#000',
  fontFamily: 'monospace',
  fontWeight: 'bold',
};

function headingStyles(bgColor, color) {
  return {
    margin: 0,
    backgroundColor: bgColor,
    color: color,
    fontSize: '1.6rem',
    padding: '1rem 0',
  };
}

export const statefulTriangle = (
  <Slide>
    <Layout style={{ alignItems: 'stretch', height: 400 }}>
      <Appear style={{ width: '33.3%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Heading style={
          headingStyles('#0074D9', '#B3DCFF')
        }>State</Heading>
        <div style={[ center, {
          borderBottom: `2px solid #004966`,
          backgroundColor: '#7FDBFF',
          color: '#004966',
        } ]}>
          <div style={{
            textAlign: 'left',
            padding: '0 1rem',
            fontSize: '1.2rem',
            color: '#004966',
          }}>
            [<br/>
            &nbsp;&nbsp;[0, 200],<br/>
            &nbsp;&nbsp;[100, 0],<br/>
            &nbsp;&nbsp;[200, 200],<br/>
            ]
          </div>
        </div>
        <div style={[ center, {
          backgroundColor: '#7FDBFF',
        } ]}>
          '#00662C'
        </div>
      </div>
      </Appear>
      <div style={{ width: '33.3%', display: 'flex', flexDirection: 'column' }}>
        <Heading style={
          headingStyles('#FF851B', '#662F00')
        }>Properties</Heading>
        <div style={[ center, {
          borderBottom: `2px solid #665800`,
          backgroundColor: '#FFDC00',
          color: '#665800',
        } ]}>
          vertices
        </div>
        <div style={[ center, {
          backgroundColor: '#FFDC00',
          color: '#665800',
        } ]}>
          color
        </div>
      </div>
      <div style={{ width: '33.3%', display: 'flex', flexDirection: 'column' }}>
        <Heading style={
          headingStyles('#2ECC40', '#0E3E13')
        }>Output</Heading>
        <div style={[ center, { backgroundColor: '#01FF70' } ]}>
          { codeSlides.stateTriangle }
        </div>
      </div>
    </Layout>
  </Slide>
);

const imgStyle = { width: '50%', height: '50%' };

export const reza = (
  <Slide>
    <Heading size={4}>Reza Ali</Heading>
    <Image src={ images.amberLayer } style={imgStyle} />
    <Image src={ images.fieldFlow } style={imgStyle} />
  </Slide>
);

export const robertHodgin = (
  <Slide>
    <Heading size={4}>Robert Hodgin</Heading>
    <Image src={ images.cme04 } style={imgStyle} />
    <Image src={ images.cme05 } style={imgStyle} />
  </Slide>
);

export const mariusWatz = (
  <Slide>
    <Heading size={4}>Marius Watz</Heading>
    <Image src={ images.cracking } style={imgStyle} />
  </Slide>
);
