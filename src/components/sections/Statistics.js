import * as React from "react";

// Styles
import styled from 'styled-components';
import mixins from '../../styles/mixins';

const StyledStatsSection = styled.section`
  ${() => mixins.flexCenter};
  min-height: 25vh;
  text-align: center;
  h1 {
    padding: 12px 0;
  }
`;

const StyledStatsDiv = styled.div`
  ${() => mixins.flexCenter};
  color: var(--lavender);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; 
  }
  p {
    font-size: 24px;
  }
  .count {
    margin-top: 2.5em;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .heavy {
    font-size: 36px;
    font-weight: 800;
    padding: 12px 0;
  }
`;

function Statistics() {
  return (
    <StyledStatsSection>
      <div className="container">
        <h1>Trusted by dozens of communities.</h1>
        <p>Don't just take our word for it, meet the people who already use Runebot.</p>
        <StyledStatsDiv>
          <div className="count">
            <span className="heavy">00+</span>
            <p>Servers</p>
          </div>
          <div className="count">
            <span className="heavy">00+</span>
            <p>Channels</p>
          </div>
          <div className="count">
            <span className="heavy">00+</span>
            <p>Users</p>
          </div>
          <div className="count">
            <span className="heavy">00%</span>
            <p>Uptime</p>
          </div>
        </StyledStatsDiv>
      </div>
    </StyledStatsSection>
  )
}

export default Statistics;