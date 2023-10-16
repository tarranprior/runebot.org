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

  p {
    font-size: 18px;
    max-width: 600px;
  }

  .section-header {
    margin: auto;
    padding: 2.5em 2.5em;
    text-align: center;
  }

  .section-subheader {
    margin: auto;
    text-align:center;
    margin-top: 3.5rem;
    padding: 2.5em 2.5em;
  }

  .container {
    ${() => mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 50px;
    h2 {
      margin-top: 3.5rem;
    }
  }

  .feature-container {
    ${() => mixins.flexBetween};
    margin: 25px;
    padding: 25px 0;
    
    .feature-header {
      color: var(--darkest-grey);
      max-width: 600px;
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .feature-header {
    padding-bottom: 1rem;
  }

  .feature-text {
    ${() => mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    padding: 3.5rem;
    a {
      color: var(--darkest-grey);
    }
    @media (max-width: 1200px) {
      padding: 0;
    }
  }

  .feature-image {
    margin: auto;
    display: block;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .docs-button {
    ${() => mixins.lgButton};
    font-weight: 600;
    color: var(--white);
    background-color: var(--grey);
  }

  .align-center {
    margin: auto;
    @media (max-width: 768px) {
      margin-bottom: 2.75rem;
    }
  }
`;

function Features() {

  const docsButton = (
    <Link to="#docs" className="docs-button"><FontAwesomeIcon className="fa-icon" icon={faBook} size="1x" />Explore The Docs</Link>
  )

  return (
    <>
      <StyledFeaturesSection id="features">
        <div className="section-header">
          <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <h1>Features of Runebot</h1>
          </div>
          <div data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
            <p>Here are just <b>some</b> of the best features Runebot offers right out the box {'\u2026'}</p>
          </div>
        </div>
        <div className="container">
          <div className="feature-container">
            <div data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease">
              <img src="3rd-age-platebody.png" className="feature-image" alt="3rd age platebody"/>
            </div>
            <div data-sal="slide-left" data-sal-delay="400" data-sal-easing="ease">
              <div className="feature-text">
                <h3 className="feature-header">Search for anything on RuneScape, directly from Discord.</h3>
                <p>By using the official Old School RuneScape wiki, Runebot allows your community to explore the largest and most up-to-date repository of information available.<br/><br/>Whether you're a main looking for the next boss to slay, or group ironmen tracking your stats and progress, Runebot helps <strong>bring players together</strong>.</p>
              </div>
            </div>
          </div>
          <div className="feature-container">
            <div data-sal="slide-right" data-sal-delay="400" data-sal-easing="ease">
              <div className="feature-text">
                <h3 className="feature-header">Discover the latest price analytics and trends with built-in data visualisation.</h3>
                <p>Runebot talks to the official <a href="https://secure.runescape.com/m=itemdb_oldschool/" target="_blank" rel="noreferrer">Grand Exchange</a> to fetch the latest data and analytics from the game's player economy, allowing users to discover the <strong>latest trends</strong> and the <strong>highest margins</strong>.</p>
              </div>
            </div>
            <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease">
              <img src="armadyl-godsword.png" className="feature-image" alt="Armadyl godsword"/>
            </div>
          </div>
          <div className="feature-container">
            <div data-sal="slide-left" data-sal-delay="400" data-sal-easing="ease">
              <img src="tool-selection.png" className="feature-image" alt="Tool selection"/>
            </div>
            <div data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease">
              <div className="feature-text">
                <h3 class="feature-header">Enjoy the latest integrations of Discord's user experience.</h3>
                <p>By using the latest features of Discord's developer tools, Runebot provides a <strong>rich and smooth user experience</strong> - and fully supports slash commands, select menus, button components, autocompletion and more.</p>
              </div>
            </div>
          </div>
          <div className="section-subheader">
            <div data-sal="slide-down" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="500">
              <h2>But wait! There's more ...</h2>
            </div>
          </div>
          <div className="align-center wobble-on-hover">
            <div data-sal="slide-down" data-sal-delay="600" data-sal-easing="ease">
              {docsButton}
            </div>
          </div>
        </div>
      </StyledFeaturesSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--white)" fill-opacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,128C480,128,549,160,617,186.7C685.7,213,754,235,823,213.3C891.4,192,960,128,1029,122.7C1097.1,117,1166,171,1234,192C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    </>
  );
};

export default Features;