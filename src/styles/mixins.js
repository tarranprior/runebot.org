import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  smButton: css`
  background-color: transparent;
  border: 1px solid var(--lavender);
  border-radius: 8px;
  padding: 12px 16px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
`,
lgButton: css`
  color: var(--white);
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
`,
};

export default mixins;