/** @jsx jsx */
import { jsx } from '@emotion/react';
import moment from 'moment';
import { FunctionComponent } from 'react';
import server from '../../config/server';
import Colors from '../../styled/Colors';

interface MessageProps {
  from: string;
  message: string;
  createdAt: Date;
  userName: string;
}

const Message: FunctionComponent<MessageProps> = ({
  from,
  message,
  createdAt,
  userName,
}) => {
  server.debug('data', { from, userName });
  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        justifyContent: from === userName ? 'flex-start' : 'flex-end',
        marginBottom: 20,
      }}
    >
      <div
        css={{
          padding: '10px 20px',
          background: Colors.white,
          borderRadius: 6,
          textAlign: from === userName ? 'left' : 'right',
        }}
      >
        <span css={{ fontSize: 12, color: Colors.primary }}>{from} says:</span>
        <p
          css={{
            fontSize: 14,
            color: Colors.dark,
            marginBottom: 2,
            marginTop: 5,
            padding: 0,
          }}
        >
          {message}
        </p>
        <p css={{ fontSize: 11, color: Colors.grey, margin: 0, padding: 0 }}>
          {moment(createdAt).format('YYYY-MM-DD')}
        </p>
      </div>
    </div>
  );
};

export default Message;
