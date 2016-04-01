import React from 'react';
import {
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

const images = {
  me: require('../assets/me.png'),
};

preloader(images);

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


export const hello = (
  <Slide>
    <Heading size={1} style={{ fontFamily: 'serif', fontSize: '10rem' }}>
      क्रिएटिव कोडिंग
    </Heading>
    <Text lineHeight={1.2} margin="2rem 0">Creative Coding With React & SVG</Text>
    <Link target="_blank" href="https://github.com/rangle/intro-to-modular-css">
      <Text textColor="red">view on github</Text>
    </Link>
  </Slide>
);

export const overview = (
  <Slide>
    <Heading size={4}>Overview</Heading>
    <List>
      <ListItem>SVG Syntax</ListItem>
      <ListItem>Composing SVGs Using React</ListItem>
      <ListItem>Adding Interactivity</ListItem>
      <ListItem>"Re-Render the Whole World" Approach</ListItem>
    </List>
  </Slide>
);
