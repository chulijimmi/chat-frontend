/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';

interface RoomTitleProps {
  name: string;
}
const RoomTitle: FunctionComponent<RoomTitleProps> = ({ name }) => {
  return (
    <div
      css={{
        width: 'calc(100% - 19px)',
        padding: 10,
        background: Colors.primary,
      }}
    >
      <p
        css={{
          margin: '5px 0px 10px 0px',
          fontSize: 12,
          color: Colors.greyLight,
        }}
      >
        You Join In
      </p>
      <div
        css={{
          width: '100%',
          display: 'flex',
        }}
      >
        <span
          css={{
            fontSize: 16,
            color: Colors.white,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default RoomTitle;
