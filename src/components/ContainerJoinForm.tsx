/** @jsx jsx */
import { jsx } from '@emotion/react';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function ContainerJoinForm({ children }) {
  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        [mq[0]]: {
          display: 'table',
        },
      }}
    >
      <div
        css={{
          width: '60%',
          height: '50vh',
          marginTop: '50px',
          [mq[0]]: {
            width: '100%',
          },
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ContainerJoinForm;
