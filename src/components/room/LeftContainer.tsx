/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';
import RoomTitle from './RoomTitle';
import UserJoin from './UserJoin';

const LeftContainer: FunctionComponent = () => {
  return (
    <div
      css={{
        width: '320px',
        height: 'calc(100% - 22px)',
        background: Colors.white,
        borderRight: `1px solid ${Colors.greyDarkLight}`,
      }}
    >
      <RoomTitle name={'React'} />
      <UserJoin username={'Ben Ackward'} />
    </div>
  );
};

export default LeftContainer;
