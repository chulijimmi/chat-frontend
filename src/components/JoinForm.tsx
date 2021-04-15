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
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/typesRedux';
import { joinRoomActions } from '../state/actions/chatActions';
import {
  getUserJoinStorage,
  setUserJoinStorage,
} from '../../utils/localStorage';

const JoinFoorm = () => {
  const [userName, setUserName] = React.useState<string>('');
  const refUserName = React.useRef();
  const [roomName, setRoomName] = React.useState<string>('');
  const refRoomName = React.useRef();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    const data = getUserJoinStorage();
    if (data?.user?.id) {
      doJoinRoom(data.user.userName, data.room.roomName);
    }
  }, []);

  const doJoinRoom = (userName: string, roomName: string): void => {
    const payload = { userName, roomName };
    server.room.emit('room:join', payload, (response) => {
      if (response.error) {
        setLoading(false);
        setErrorMessage(response.error.details[0].message);
      } else {
        server.debug('response:join', response);
        setLoading(false);
        dispatch(joinRoomActions(payload.roomName));
        setUserJoinStorage(response.data);
        navigate('chat');
      }
    });
  };

  const joinRoom = (): void => {
    if (userName === '') {
      setErrorMessage('Please input your username');
    } else if (roomName === '') {
      setErrorMessage('Room is required');
    } else {
      setLoading(true);
      setErrorMessage('');
      doJoinRoom(userName, roomName);
    }
  };

  // Receiving room list from server
  const getRoom = () => {
    server.room.emit('room:list', (response) => {
      server.debug('response:room:list', response);
    });
  };

  React.useEffect(() => {
    getRoom();
  }, []);

  // Disconnect from server
  React.useEffect(() => {
    server.room.emit('room:leave', (response) =>
      server.debug('response:room:leave', response),
    );
  }, []);

  // Receive welcome message
  React.useEffect(() => {
    server.room.on(`room:welcome`, (response) => {
      server.debug(`response:welcome`, response);
    });
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
            onClick={() => joinRoom()}
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
