/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';

interface UserJoinProps {
  username: string;
  self: boolean;
}

interface UserAvatarProps extends UserJoinProps {
  size: number;
}

export const UserAvatar: FunctionComponent<UserAvatarProps> = ({
  username,
  size,
  self,
}) => {
  return (
    <div
      css={{
        width: size,
        height: size,
        borderRadius: size,
        background: self ? Colors.secondary : Colors.primaryDark,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <span css={{ fontWeight: 'bold', color: Colors.white }}>
        {username.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

const UserJoin: FunctionComponent<UserJoinProps> = ({ username, self }) => {
  const heightContainer = 30;
  return (
    <div
      css={{
        width: '100%',
        padding: '0px 10px',
        margin: '10px 0px',
        height: heightContainer,
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      <UserAvatar username={username} size={heightContainer} self={self} />
      <div
        css={{
          width: `calc(100% - ${heightContainer}px)`,
          display: 'flex',
          alignItems: 'center',
          marginLeft: 10,
        }}
      >
        <span
          css={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {username}
        </span>
      </div>
    </div>
  );
};

export default UserJoin;
