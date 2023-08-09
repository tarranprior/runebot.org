import { createGlobalStyle } from "styled-components";

// Styles
import mixins from "../styles/variables";
import variables from "../styles/variables";

const GlobalStyle = createGlobalStyle`
  ${mixins};
  ${variables};

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box:
  }

  html {
    width: 100%
    scroll-behavior: smooth !important;
  }

  ::selection {
    background-color: var(--lightest-grey);
    color: var(--grey);
  }

  body {
    font-family: Poppins, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  .container {
    margin: 0 auto;
    padding: 0 2.5em;
    max-width: 1200px;
  }

  h1 {
    font-size: clamp(24px, 8vw, 48px);
    line-height: 1.2;
    max-width: 800px;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: clamp(24px, 8vw, 36px);
    line-height: 1.2;
    max-width: 800px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: clamp(20px, 8vw, 28px);
    line-height: 1.2;
    max-width: 800px;
    margin-bottom: 25px;
  }

  h4 {
    margin-bottom: 15px;
  }

  p {
    font-size: 17.25px;
    font-weight: 300;
    color: var(--colour-dark-grey);
  }

  a {
    text-decoration: none;
    color: var(--white);
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--light-grey);
      transition: var(--transition);
    }
  }

  .fa-icon {
    margin-right: 0.5rem;
  }

  @-webkit-keyframes wobble-on-hover {
    16.65% {
      -webkit-transform: translateY(6px);
      transform: translateY(6px);
    }
    33.3% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    49.95% {
      -webkit-transform: translateY(3px);
      transform: translateY(3px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes wobble-on-hover {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  .wobble-on-hover {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .wobble-on-hover:hover, .wobble-on-hover:focus, .wobble-on-hover:active {
    -webkit-animation-name: wobble-on-hover;
    animation-name: wobble-on-hover;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

`;

export default GlobalStyle;