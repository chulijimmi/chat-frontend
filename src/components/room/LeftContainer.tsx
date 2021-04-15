/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';
import RoomTitle from './RoomTitle';
import UserJoin from './UserJoin';
import UserInRoom from './UserInRoom';

const LeftContainer: FunctionComponent = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const cache: any = localStorage.getItem('user:join');
    setData(JSON.parse(cache));
  }, []);
  return (
    <div
      css={{
        width: '320px',
        height: 'calc(100% - 22px)',
        background: Colors.white,
        borderRight: `1px solid ${Colors.greyDarkLight}`,
        overflow: 'hidden',
      }}
    >
      <RoomTitle name={data?.room?.roomName} />
      <UserJoin username={data?.user?.userName} self={true} />
      <UserInRoom />
    </div>
  );
};

export default LeftContainer;
