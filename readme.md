<p align="center">
  <br>
  <a href="https://twitter.com/MrAhmadAwais/">
    <img src="https://on.awais.dev/ef9952/c" width="120"/>
  </a>
</p>

<h1 align="center">Styled-Responsive-Media-Queries <code>styled-rmq</code></h1>

<p align="center">
  Styled Components Responsive Media Queries — Standard sizes from Chrome DevTools.
</p>

<p align="center">
  <a title="Total Downloads" href="https://www.npmjs.com/package/styled-rmq">
    <img src="https://img.shields.io/npm/dt/styled-rmq.svg?style=flat&label=Downloads">
  </a>
  <a title="Current Version" href="https://www.npmjs.com/package/styled-rmq">
    <img src="https://img.shields.io/npm/v/styled-rmq.svg?style=flat">
  </a>
  <a title="This open source project is supported by VSCode.pro" href="https://VSCode.pro" target="_blank"><img src="https://img.shields.io/badge/Supported%20by-VSCode%20Power%20User%20Course%20%E2%86%92-gray.svg?colorA=444444&colorB=4F44D6" alt="VSCode.pro"></a>
  <a title="Follow me on Twitter @MrAhmadAwais →" href="https://twitter.com/mrahmadawais">
    <img src="https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow">
  </a>
  <br>
  <br>
</p>

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install --save @emotion/core @emotion/styled styled-rmq

# OR
npm install --save styled-components styled-rmq
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

Import both.

```js
import styled from '@emotion/styled'; // OR import styled from 'styled-components';
import rmq from 'styled-rmq';

const YourComponent = styled.div`
    background: tomato;

    ${rmq('xl')} { background: tomato; }  /* xl: 2560px : 4K */
    ${rmq('ll')} { background: hotpink; } /* ll: 1440px : Laptop Large */
    ${rmq('ls')} { background: orange; }  /* ls: 1024px : Laptop */
    ${rmq('t')}  { background: skyblue; } /* t:  768px  : Tablet */
    ${rmq('ml')} { background: purple; }  /* ml: 425px  : Mobile Large */
    ${rmq('mm')} { background: silver; }  /* mm: 375px  : Mobile Medium */
    ${rmq('ms')} { background: green; }   /* ms: 320px  : Mobile Small */
    /**
     *  Custom Media Queries
     * — Think of elements instead of size
     * — Make them look good on all sizes.
     *
     * E.g. Small tablet size 585px.
    */
    ${rmq('585')} { background: hotpink; } /* custom: 585px */
`;

export const Component = (
  <YourComponent>Being Used Here!</YourComponent>
);
```

## Some Context + Examples

All of the sizes used in the responsive media queries in `styled-rmq` come directly from the Chrome Dev Tools. I prefer `px` and [don't use `em` for media queries](https://adamwathan.me/dont-use-em-for-media-queries/). I'll collect a list of sites using this package below.

- [VSCode Power User Course][n]
- [Node CLI Course][n]

![RMQ](https://on.awais.dev/03dae5/c)

## [Changelog →](CHANGELOG.md)

All notable changes in this project's [released versions](https://github.com/ahmadawais/Styled-Responsive-Media-Queries/releases) are documented in the [changelog](CHANGELOG.md) file.

## License

MIT ⓒ Ahmad Awais. Follow me on Twitter [@MrAhmadAwais →](https://twitter.com/MrAhmadAwais/)

<br>

[![👌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/sponsor.png)](https://github.com/AhmadAwais/sponsor)

## Sponsor

Me ([Ahmad Awais](https://twitter.com/mrahmadawais/)) and my incredible wife ([Maedah Batool](https://twitter.com/MaedahBatool/)) are two engineers who fell in love with open source and then with each other. You can read more [about me here](https://ahmadawais.com/about). If you or your company use any of my projects or like what I’m doing then consider backing me. I'm in this for the long run. An open-source developer advocate.

[![Ahmad on Twitter](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

### [NodeCLI.com][n] — Learn to build Node.js CLI Automation

> This repository is part of the [NodeCLI.com][n] course.

After building hundreds of developer automation tools used by millions of developers, I am sharing exactly how you can do it yourself with minimum effective effort. Learn to build Node.js & JavaScript based CLI (Command Line Interface) apps. Automate the grunt work, do more in less time, impress your manager, and help the community.
→ I'm sharing it all in this online video course. [Node CLI Automation
without wasting a 1,000 hours][n] →</p>

[![Node CLI Course](https://raw.githubusercontent.com/ahmadawais/stuff/master/nodecli/featured.jpg)][n]

[![Node CLI](https://img.shields.io/badge/-NodeCLI.com%20%E2%86%92-gray.svg?colorB=488640&style=flat)][n]

[n]: https://NodeCLI.com?utm_source=github&utm_medium=referral&utm_campaign=ahmadawais/cli-meow-help

[![Awais on Twitter](https://raw.githubusercontent.com/ahmadawais/stuff/master/sponsor/sponsor.jpg)](https://github.com/AhmadAwais/sponsor)

[v]: https://VSCode.pro/?utm_source=github.com&utm_medium=referral&utm_campaign=ahmadawais/Styled-Responsive-Media-Queries
[n]: https://NodeCLI.com/?utm_source=github.com&utm_medium=referral&utm_campaign=ahmadawais/Styled-Responsive-Media-Queries
