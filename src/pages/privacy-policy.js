import * as React from "react";

// Components
import Footer from '../components/Footer';

// Styles
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const StyledBody = styled.body`
  background-color: var(--white);
  color: var(--dark-grey);
  
  h2, h3 {
    margin-top: 2.75rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 600;
  }

  ul {
    padding: 1.25rem;
    li, p {
      font-size: 16px;
    }
  }

  pre {
    padding-top: 3.5rem;
  }
`;

export default function Home() {
  return (
    <StyledBody>
      <GlobalStyle />
      <div className="container">
        <pre>🚧 Please Note: This policy is currently under construction and subject to change.</pre>
        <h2>Our Privacy Policy</h2>
        <p>Your privacy is important to us.</p>
        <p>It is Runebot's policy to respect your privacy regarding any information we may collect from you across our website or Discord bot, https://runebot.org, and other sites we own and operate.</p>
        <h3>Data We Collect</h3>
        <p>Runebot currently stores the following user data:</p>
        <ul>
          <li><p><strong>RuneScape Account Data</strong></p></li>
          <li><p><strong>Discord User ID</strong></p></li>
        </ul>
        <h4>How We Collect Information</h4>
        <p>We collect information by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. You are free to refuse our request for this information, with the understanding that we may be unable to provide you with some of your desired services without it.</p>
        <h3>Use of Data</h3>
        <p>We may use a combination of identifying and non-identifying information to understand who our visitors are, how they use our services, and how we may improve their experience of our website in future. We do not disclose the specifics of this information publicly, but may share aggregated and anonymized versions of this information, for example, in website and customer usage trend reports.</p>
        <h3>Data Processing & Storage</h3>
        <p>We only retain personal information for as long as necessary to provide a service, or to improve our services in future. While we retain this data, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        <h3>Disclosure of Data</h3>
        <p>We care about your data. We will not give your user information to anyone outside of our team, other than in the belief that such action is necessary to:</p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of ChannelBot</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
      </div>
      <Footer />
    </StyledBody>
  );
};

export function Head() {
  return (
    <title>Our Privacy Policy - Runebot</title>
  );
};