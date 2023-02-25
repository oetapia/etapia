/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// gatsby-ssr.js

import React from 'react';
//import { Link } from 'gatsby';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="cormorant-light"
      rel="preload"
      href="/fonts/cormorant-light-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="cormorant-lightitalic"
      rel="preload"
      href="/fonts/cormorant-lightitalic-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="cormorant-semibold"
      rel="preload"
      href="/fonts/cormorant-semibold-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ]);
};