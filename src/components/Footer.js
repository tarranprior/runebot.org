import * as React from "react";
import { Link } from '@reach/router';

import moment from 'moment';

// Config
import { developerURL } from '../config';

// Styles
import styled from 'styled-components';
import mixins from '../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  background-color: var(--white);
  color: var(--grey);
  text-align: center;
  margin-top: -1rem !important;

  .container {
    ${() => mixins.flexBetween};
    text-align: left !important;
    padding-bottom: 2.75rem;
  }

  a, p {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
  }

  a {
    :hover {
      color: var(--blurple) !important;
    }
  }

  div {
    margin-top: -1.5rem;
    padding-bottom: 0.75rem;
  }

  ul {
    list-style-type: none;
    li {
      padding: 2px;
    }
  }

  .logo-container {
    margin-top: -3.75rem;
  }

  .logo {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 24px;
    font-weight: 300;
    @media (max-width: 768px) {
      padding-top: 1.5rem;
    }
  }

  .icon {
    margin-right: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .social-icons {
    li {
      display: inline;
      padding-right: 0.75rem;
    }
  }
  .social-icon {
    padding-top: 1.5rem;
    font-size: 20px;
  }

  .copyright {
    margin-top: 1.5rem;
  }
`;

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--white)" fill-opacity="1" d="M0,0L34.3,37.3C68.6,75,137,149,206,154.7C274.3,160,343,96,411,101.3C480,107,549,181,617,192C685.7,203,754,149,823,117.3C891.4,85,960,75,1029,85.3C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <StyledFooter>
        <div className="container">
          <div className="logo-container">
            <p><Link to="/" className="logo"><FontAwesomeIcon className="icon" icon={faRobot} size="1x" /> Rune<strong>bot</strong></Link></p>
            <p>The open-source RuneScape lookup tool for Discord.</p>
            <ul className="social-icons">
              <li><a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faGithub} size="1x" /> </a></li>
              <li><a href="http://support.runebot.org" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faDiscord} size="1x" /> </a></li>
            </ul>
            <p className="copyright">
              Copyright © {moment().year()} <a href={developerURL} target="_blank" rel="noopener noreferrer">Runebot</a>
            </p>
          </div>
          <div className="footer-menu">
            <h4>Runebot</h4>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Our Team</Link></li>
              <li><Link to="/">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link to="/">Community</Link></li>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">DMCA</Link></li>
            </ul>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;