import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return <Global styles={globalCSS} />;
};

const resetCSS = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  input,
  select,
  textarea,
  button {
    font: inherit;
    color: inherit;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  body {
    line-height: 1;
    width: 100%;
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }
`;

const globalCSS = css`
  @font-face {
    font-family: 'Hyundai Sans Head';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:
      local('Hyundai Sans Head Bold'),
      url('/fonts/HyundaiSansHead-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Head';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      local('Hyundai Sans Head Medium'),
      url('/fonts/HyundaiSansHead-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Head KR';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:
      local('Hyundai Sans Head KR Bold'),
      url('/fonts/HyundaiSansHeadKRBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Head KR';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      local('Hyundai Sans Head KR Medium'),
      url('/fonts/HyundaiSansHeadKRMedium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Head KR';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      local('Hyundai Sans Head KR Regular'),
      url('/fonts/HyundaiSansHeadKRRegular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Text';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      local('Hyundai Sans Text Medium'),
      url('/fonts/HyundaiSansText-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Text KR';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:
      local('Hyundai Sans Text KR Bold'),
      url('/fonts/HyundaiSansTextKRBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Text KR';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      local('Hyundai Sans Text KR Medium'),
      url('/fonts/HyundaiSansTextKRMedium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hyundai Sans Text KR';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      local('Hyundai Sans Text KR Regular'),
      url('/fonts/HyundaiSansTextKRRegular.woff2') format('woff2');
  }

  ${resetCSS}
`;

export default GlobalStyle;
