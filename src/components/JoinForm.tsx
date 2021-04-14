/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Colors from '../styled/Colors';
import ContainerJoinForm from './ContainerJoinForm';
import Button from './core/Button';
import Card from './core/Card';
import TextInput from './core/TextInput';
import { navigate } from 'gatsby';
import server from '../config/server';

const JoinFoorm = () => {
  const [userName, setUserName] = React.useState<string>('');
  const refUserName = React.useRef();
  const [roomName, setRoomName] = React.useState<string>('');
  const refRoomName = React.useRef();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const joinChat = (): void => {
    const payload = { userName, roomName };
    setLoading(true);
    setErrorMessage('');
    server.room.emit('room:join', payload, (response) => {
      if (response.error) {
        setLoading(false);
        setErrorMessage(response.message);
        server.debug('error:room:join', response);
      } else {
        setLoading(false);
        server.debug('error:room:join', response);
        navigate('chat');
      }
    });
  };

  // Receiving room list from server
  const getRoom = () => {
    server.room.emit('room:list', (response) => {
      server.debug('response_room:list', response);
    });
  };

  React.useEffect(() => {
    getRoom();
  }, []);

  // Disconnect from server
  const leaveRoom = () => {
    server.room.emit('root:leave', (response) =>
      server.debug('response_room_leave', response),
    );
  };

  React.useEffect(() => {
    leaveRoom();
  }, []);

  return (
    <ContainerJoinForm>
      <Card>
        {errorMessage && (
          <div
            css={{ background: Colors.alert, padding: 10, borderRadius: 6 }}
            onClick={() => setErrorMessage('')}
          >
            <span css={{ color: Colors.white, fontSize: 12 }}>
              {errorMessage}
            </span>
          </div>
        )}
        <p css={{ color: Colors.greyDark }}>Please input your username</p>
        <TextInput
          value={userName}
          testId={'userName'}
          placeholder={'e.g benakward'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          ref={refUserName}
        />

        <div css={{ marginTop: '10px' }}>
          <p css={{ color: Colors.greyDark }}>Please input room name</p>
          <TextInput
            value={roomName}
            testId={'roomName'}
            placeholder={'e.g react'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setRoomName(e.target.value);
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
            loading={loading}
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
