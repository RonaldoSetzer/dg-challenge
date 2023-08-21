import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url(https://db.onlinewebfonts.com/c/19b8f54eb1f074fb01efb1c4f02e9623?family=AvertaStd-Regular);
@font-face {
    font-display: swap;
    font-family: AvertaStdPE;
    font-weight: 200;
    src: url(https://lp.dataguard.de/hubfs/Fonts/388A9B_8_0.eot);
    src: url(https://lp.dataguard.de/hubfs/Fonts/388A9B_8_0.eot) format("embedded-opentype"),url(https://lp.dataguard.de/hubfs/Fonts/388A9B_8_0.woff2) format("woff2"),url(https://lp.dataguard.de/hubfs/Fonts/388A9B_8_0.woff) format("woff"),url(https://lp.dataguard.de/hubfs/Fonts/388A9B_8_0.ttf) format("truetype")
}
@font-face {
    font-display: swap;
    font-family: AvertaStdPE;
    font-weight: 700;
    src: url(https://lp.dataguard.de/hubfs/Fonts/388A9B_2_0.eot);
    src: url(https://lp.dataguard.de/hubfs/Fonts/388A9B_2_0.eot) format("embedded-opentype"),url(https://lp.dataguard.de/hubfs/Fonts/388A9B_2_0.woff2) format("woff2"),url(https://lp.dataguard.de/hubfs/Fonts/388A9B_2_0.woff) format("woff"),url(https://lp.dataguard.de/hubfs/Fonts/388A9B_2_0.ttf) format("truetype")
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: AvertaStdPE, sans-serif;
  color: #003349;
  background-color: transparent;
  font-weight: 200;
}

body {
  --background-color: #ffffff;
  --foreground-color: #b2bcc2;
  --side-background-color: #f1f1f1;
  --side-foreground-color: #595959;
  --heading-color: #003349;
  --enabled-color: #5bc88d;
  --disabled-color: #c63040;
  background-color: var(--background-color);
  color: var(--foreground-color);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--heading-color);
  font-family: AvertaStdPE, sans-serif;
  font-weight: 400;
}

strong {
  font-weight: 700;
}

aside {
  background-color: var(--side-background-color);
  color: var(--side-foreground-color);
`;

