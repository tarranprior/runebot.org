import * as React from "react";

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Statistics from "./sections/Statistics";
import Invite from '../components/sections/Invite';
import Footer from '../components/Footer';

// Styles
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const StyledBody = styled.body`
    background-color: var(--blurple);
    color: var(--white);
`

function Layout() {
  return (
    <StyledBody>
      <div id="root">
        <GlobalStyle />
        <Navbar />
        <Hero />
        <Features />
        <Statistics />
        <Invite />
        <Footer />
      </div>
    </StyledBody>
  );
};

export default Layout;