/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@stylex/core';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const appStyles = css({
  '*': { boxSizing: 'border-box', margin: 0, padding: 0, fontFamily: 'sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue"' },
  '*::after': { boxSizing: 'border-box', margin: 0, padding: 0 },
  '*::before': { boxSizing: 'border-box', margin: 0, padding: 0 },
  'a': { WebkitTapHighlightColor: 'transparent' },
  'html': { scrollBehavior: 'smooth', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' },
  'body': {
    height: '100dvh',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    placeContent: 'center',
    overflow: 'hidden'
  }
});

const bgStyles = css({
  width: 600,
  height: 600,
  position: 'relative',
  backgroundImage: "url('assets/image.avif')",
  backgroundSize: 'cover',
  zIndex: 10,
  '::before': {
    content: "''",
    position: 'absolute',
    backgroundImage: "url('assets/splash.avif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    mixBlendMode: 'lighten',
    zIndex: 11,
    inset: 0
  },
  '::after': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0%',
    top: '0',
    zIndex: 12,
    backgroundImage: 'linear-gradient(to right, transparent, #fff3, transparent)',
    opacity: 0
  },
  ':hover::after': {
    animation: 'move 1s linear both'
  }
});

const moveKeyframes = css.keyframes({
  '0%': { opacity: 1, transform: 'translateX(-100%)' },
  '100%': { opacity: 1, transform: 'translateX(100%)' }
});

function App() {
  return (
    <div className={appStyles}>
      <section className={bgStyles} style={{ animationName: moveKeyframes }}></section>
    </div>
  );
}

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
