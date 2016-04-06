import React from 'react';
import { Slide, Heading, Link, Image } from 'spectacle';
import clrs from './clrs';

export function codePen(id, height = 600) {
  return (
    <iframe height={ height }
      scrolling="no"
      src={ `//codepen.io/winkerVSbecks/embed/${id}/?height=${height}&theme-id=8427&default-tab=result` }
      allowTransparency="true"
      allowFullScreen="true"
      style={{
        width: '100%',
        border: 'none',
      }} fill>
    </iframe>
  );
}

export function iFrame(url, height = 600) {
  return (
    <iframe height={ height }
      scrolling="no"
      src={ url }
      allowTransparency="true"
      allowFullScreen="true"
      style={{
        width: '100%',
        border: 'none',
      }} fill>
    </iframe>
  );
}


export function slide(content) {
  return <Slide>{ content }</Slide>;
}

export function bgColorSlide(color, content) {
  return <Slide bgColor={ color }>{ content }</Slide>;
}

export function imageSlide(img) {
  return <Slide bgImage={ img } />;
}

export function demoSlide(img, title, url, color) {
  return (
    <Slide bgColor={ color }>
      <Image src={ img } width="650" margin="0" />
      <Heading size={ 6 }
        style={{
          borderBottom: `2px solid ${clrs.gray}`,
          padding: '0.5rem 0',
          margin: '1rem 0 0 0',
          textAlign: 'left',
          fontSize: '2rem',
        }}>
        <Link href={ url } textColor="black" target="_blank">{ title }</Link>
      </Heading>
    </Slide>
  );
}
