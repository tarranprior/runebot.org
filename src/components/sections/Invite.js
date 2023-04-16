import * as React from "react";

// Styles
import styled from 'styled-components';
import mixins from '../../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDiscord} from "@fortawesome/free-brands-svg-icons";

const StyledInviteSection = styled.section`
  margin: 12em 0;
  .container {
    max-width: 800px;
  }

  p {
    padding-bottom: 36px;
  }

  .invite-button {
    ${() => mixins.lgButton};
    font-weight: 600;
    color: var(--white);
    background-color: var(--grey);
  }

  .server-button {
    ${() => mixins.lgButton};
    font-weight: 600;
    color: var(--dark-grey);
    background-color: var(--white);
  }

  .support-server {
    float: right;
    margin: 6rem 0;
  }

  .support-us {
    float: left;
    margin: 1em 0;
    @media (max-width: 468px) {
      float: right;
    }
  }
`;

function Invite() {

  const inviteButton = (<a href="https://invite.runebot.org" className="invite-button wobble-on-hover" target="_self"><FontAwesomeIcon className="fa-icon" icon={faDiscord} size="1x" />Invite To Discord</a>)
  const serverButton = (<a href="https://support.runebot.org" className="server-button wobble-on-hover" target="_self">Join Support Server</a>)

  return (
    <StyledInviteSection id="invite">
      <div className="container">
        <div>
          <h2>Ready to invite Runebot?</h2>
          <p>You've already came this far! Why not try it out?!</p>
          {inviteButton}
        </div>
        <div className="support-server">
          <h2>Still have questions?</h2>
          <p>Join the support server and ask away!</p>
          {serverButton}
        </div>
        <div className="support-us">
          <h2>Fancy supporting us?</h2>
          <p>The best way to support us is by using Runebot in your server, and dropping a <FontAwesomeIcon className="icon" icon={faStar} size="1x" /> on our <a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer">Github</a> repo!</p>
        </div>
      </div>
    </StyledInviteSection>
  )
}

export default Invite;