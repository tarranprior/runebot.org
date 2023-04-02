import * as React from "react";
import { Link } from '@reach/router';

import moment from 'moment';

// Config
import { developerName, developerURL } from '../config';

// Styles
import styled from 'styled-components';
import mixins from '../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  background-color: var(--white);
  color: var(--grey);
  text-align: center;
  margin-top: -1rem !important;

  a, p {
    color: var(--grey);
  }

  a {
    :hover {
      color: var(--blurple) !important;
    }
  }

  div {
    margin-top: -1.5rem;
    padding-bottom: 2.5rem;
  }

  .logo {
    ${() => mixins.flexCenter};
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
`;

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--white)" fill-opacity="1" d="M0,0L34.3,37.3C68.6,75,137,149,206,154.7C274.3,160,343,96,411,101.3C480,107,549,181,617,192C685.7,203,754,149,823,117.3C891.4,85,960,75,1029,85.3C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <StyledFooter>
        <div className="container">
          <p><Link to="/" className="logo"><FontAwesomeIcon className="icon" icon={faRobot} size="1x" /> Rune<strong>bot</strong></Link></p>
          <p>
            Copyright © {moment().year()} <a href={developerURL} target="_blank" rel="noopener noreferrer">{developerName}</a>. Built with Gatsby 5.
          </p>
          
        </div>
      </StyledFooter>
    </>
  )
};
  
export default Footer;