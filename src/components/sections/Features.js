import * as React from "react";
import { Link } from '@reach/router';

// Styles
import styled from 'styled-components';
import mixins from '../../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook} from "@fortawesome/free-solid-svg-icons";

const StyledFeaturesSection = styled.section`
  ${() => mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;
  background-color: var(--white) !important;
  margin-top: -1em !important;
  margin-bottom: -1em !important;
  color: var(--dark-grey);

  .section-header {
    margin: auto;
    text-align: center;
  }

  .section-subheader {
    margin: auto;
    text-align:center;
    margin-top: 3.5rem;
    padding: 2.5em 2.5em;
  }

  p {
    font-size: 18px;
    max-width: 600px;
  }
`;

function Features() {
  return (
    <>
      <StyledFeaturesSection>
        <div className="section-header">
          <h1>Features of Runebot</h1>
          <p>Here are just <b>some</b> of the best features Runebot offers right out the box {'\u2026'}</p>
        </div>
      </StyledFeaturesSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--white)" fill-opacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,128C480,128,549,160,617,186.7C685.7,213,754,235,823,213.3C891.4,192,960,128,1029,122.7C1097.1,117,1166,171,1234,192C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    </>
  )
};

export default Features;