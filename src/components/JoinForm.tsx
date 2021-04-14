/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Colors from '../styled/Colors';
import ContainerJoinForm from './ContainerJoinForm';
import Button from './core/Button';
import Card from './core/Card';
import TextInput from './core/TextInput';
import { navigate } from 'gatsby';

const JoinFoorm = () => {
  const [userName, setUserName] = React.useState<string>('');
  const refUserName = React.useRef();
  const [roomName, setRoomName] = React.useState<string>('');
  const refRoomName = React.useRef();

  const joinChat = (): void => {
    navigate('chat');
  };

  return (
    <ContainerJoinForm>
      <Card>
        <p css={{ color: Colors.greyDark }}>Please input your username</p>
        <TextInput
          value={userName}
          testId={'userName'}
          placeholder={'e.g benakward'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.currentTarget.value)
          }
          ref={refUserName}
        />
        <div css={{ marginTop: '10px' }}>
          <p css={{ color: Colors.greyDark }}>Please input group name</p>
          <TextInput
            value={roomName}
            testId={'roomName'}
            placeholder={'e.g react'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setRoomName(e.currentTarget.value);
            }}
            ref={refRoomName}
          />
        </div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0px',
          }}
        >
          <Button
            loading={false}
            round={'small'}
            width={'50%'}
            onClick={() => joinChat()}
            testId={'buttonJoin'}
          >
            <span>Login</span>
          </Button>
        </div>
      </Card>
    </ContainerJoinForm>
  );
};

export default JoinFoorm;
