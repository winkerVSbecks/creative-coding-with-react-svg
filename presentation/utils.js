import React from 'react';
import { Slide } from 'spectacle';

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
