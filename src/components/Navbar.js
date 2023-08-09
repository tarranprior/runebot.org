import * as React from "react";
import { Link } from '@reach/router';

// Config
import { navigationLinks } from '../config';

// Styles
import styled from 'styled-components';
import mixins from '../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledHeader = styled.header`
  ${() => mixins.flexBetween};
  margin: 0 25px;
  padding: 25px 0;
  }
`;

const StyledNav = styled.nav`
  ${() => mixins.flexBetween};
  width: 100%;
  ol, li {
    display: inline;
  }
  a {
    padding: 0 1rem;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

function Navbar() {
  return(
    <StyledHeader>
      <StyledNav>
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          <ol>
            {navigationLinks &&
            navigationLinks.map(({ url, label }, i) => (
              <li key={i}>
                <a href={url}>{label}</a>
              </li>
            ))}
          </ol>
        </div>
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          <Link to="#docs"><FontAwesomeIcon className="fa-icon" icon={faBook} size="1x" />Documentation</Link>
          <a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-icon" icon={faGithub} size="1x" />Github</a>
        </div>
      </StyledNav> 
    </StyledHeader>
  );
};

export default Navbar;