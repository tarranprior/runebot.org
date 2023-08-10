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
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          <h1>Trusted by dozens of communities.</h1>
        </div>
        <div data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
          <p>Don't just take our word for it, meet the people who already use Runebot.</p>
        </div>
        <StyledStatsDiv>
          <div className="count">
            <div data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">
              <span className="heavy">100+</span>
              <p>Servers</p>
            </div>
          </div>
          <div className="count">
            <div data-sal="slide-up" data-sal-delay="800" data-sal-easing="ease">
              <span className="heavy">2,000+</span>
              <p>Channels</p>
            </div>
          </div>
          <div className="count">
            <div data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">
              <span className="heavy">15,000+</span>
              <p>Users</p>
            </div>
          </div>
          <div className="count">
            <div data-sal="slide-up" data-sal-delay="1000" data-sal-easing="ease">
              <span className="heavy">99.99%</span>
              <p>Uptime</p>
            </div>
          </div>
        </StyledStatsDiv>
      </div>
    </StyledStatsSection>
  );
};

export default Statistics;