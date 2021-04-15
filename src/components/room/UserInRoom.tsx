/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import { FunctionComponent } from 'react';
import server from '../../config/server';
import Colors from '../../styled/Colors';
import UserJoin from './UserJoin';
import { AppDispatch, RootState } from '../../state/typesRedux';
import { useDispatch, useSelector } from 'react-redux';
import { updateOnlineUser } from '../../state/actions/chatActions';
import moment from 'moment';

const UserInRoom: FunctionComponent = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const cache = localStorage.getItem('user:join');
    setData(JSON.parse(cache));
  }, []);
  const dispatch: AppDispatch = useDispatch();
  const state: RootState = useSelector((state) => state);
  const { chat } = state;

  React.useEffect(() => {
    server.room.emit(
      'room:join:logs',
      { user: data?.user, room: data?.room },
      (response) => {
        dispatch(updateOnlineUser(response));
      },
    );
  }, []);
  return (
    <>
      <div
        css={{
          background: Colors.greyLight,
          padding: '5px 10px',
          borderTop: `1px solid ${Colors.greyDarkLight}`,
          borderBottom: `1px solid ${Colors.greyDarkLight}`,
        }}
      >
        <p css={{ fontSize: 12, color: Colors.greyDark }}>
          <span css={{ color: Colors.primary, fontWeight: 'bold' }}>
            {chat?.onlineUser?.length}
          </span>{' '}
          User online
        </p>
      </div>
      <div css={{ height: 'calc(100% - 170px)', overflowY: 'scroll' }}>
        {chat?.onlineUser?.map((item) => {
          return (
            <div>
              <UserJoin username={item?.user?.userName} self={false} />
              <span css={{ color: Colors.grey, fontSize: 12, marginLeft: 10 }}>
                Last join {moment(item?.lastJoin).fromNow()}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserInRoom;
