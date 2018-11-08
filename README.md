<p align="center">
  <br>
  <a href="https://twitter.com/MrAhmadAwais/">
    <img src="https://on.ahmda.ws/ef9952/c" width="120"/>
  </a>
</p>

<h1 align="center">Styled-Responsive-Media-Queries <code>styled-rmq</code></h1>

<p align="center">
  Styled Components Responsive Media Queries — Standard size from Chrome DevTools
</p>

<p align="center">
  <a title="Total Downloads" href="https://www.npmjs.com/package/styled-rmq">
    <img src="https://img.shields.io/npm/dt/styled-rmq.svg?style=flat">
  </a>
  <a title="Current Cersion" href="https://www.npmjs.com/package/styled-rmq">
    <img src="https://img.shields.io/npm/v/styled-rmq.svg?style=flat">
  </a>
  <a title="Follow me on Twitter @MrAhmadAwais →" href="https://twitter.com/mrahmadawais">
    <img src="https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow">
  </a>
  <br>
  <br>
</p>

## Getting Started

### Step #0

Install `styled-components` in your project.

```sh
npm i -S styled-components
```

### Step #1

Install `styled-rmq` in your project.

```sh
npm i -S styled-rmq
```

### Step #2

Import both.

```js

import styled from 'styled-components';
import rmq from 'styled-rmq';

const YourComponent = styled.div`
    background: tomato;

    /* XL: 4K 2560px */
    ${rmq('xl')} { background: hotpink; }
    /* ll: Laptop Large 1440px */
    ${rmq('ll')} { background: hotpink; }
    /* ls: Laptop 1024px */
    ${rmq('ls')} { background: hotpink; }
    /* t: Tablet 768px */
    ${rmq('t')}  { background: hotpink; }
    /* ml: Mobile Large 425px */
    ${rmq('ml')} { background: hotpink; }
    /* mm: Mobile Mediun 375px */
    ${rmq('mm')} { background: hotpink; }
    /* ms: Mobile Small 320px */
    ${rmq('ms')} { background: hotpink; }

`;
```

## Some Context

All of the sizes here come directly from the Chrome Dev Tools. I prefer px and [don't use `em` for media queries](https://adamwathan.me/dont-use-em-for-media-queries/).

![RMQ](https://on.ahmda.ws/c51fe6/c)

## License

MIT ⓒ Ahmad Awais. Follow me on Twitter [@MrAhmadAwais →](https://twitter.com/MrAhmadAwais/)
