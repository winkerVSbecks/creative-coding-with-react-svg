import React from 'react';
import {
  CodePane,
  Fill,
  Fit,
  Heading,
  Layout,
  Slide,
} from 'spectacle';


export const cssAnimation = (
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
);
