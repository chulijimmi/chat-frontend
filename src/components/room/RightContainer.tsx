/** @jsx jsx */
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';
import { Container, Conversation, SendMessageForm } from './ChatArea';
import TextInput from '../core/TextInput';
import server from '../../config/server';
import { AppDispatch, RootState } from '../../state/typesRedux';
import { useDispatch, useSelector } from 'react-redux';
import { updateConversation } from '../../state/actions/chatActions';
import moment from 'moment';
import Message from './Message';
import { getUserJoinStorage } from '../../../utils/localStorage';

const RightContainer: FunctionComponent = () => {
  const [heightSendMessageForm, setHeightSendMessageForm] = useState(80);
  const dispatch: AppDispatch = useDispatch();
  const data = getUserJoinStorage();
  const state: RootState = useSelector((state) => state);
  const { chat } = state;

  const sendMessage = (message) => {
    server.room.emit(
      'room:conversation',
      { user: data.user, room: data.room, message },
      (response) => {
        server.debug('response', response);
      },
    );
  };

  // Fetch cache when in top stage
  React.useEffect(() => {
    server.room.emit(
      'room:conversation:all',
      { room: data.room },
      (response) => {
        server.debug('response:conversation:all', response);
        response.map((item) =>
          dispatch(
            updateConversation(
              item.user.userName,
              item.message,
              item.createdAt,
            ),
          ),
        );
      },
    );
  }, []);

  // Receive welcome message
  React.useEffect(() => {
    server.room.on(`room:welcome`, (response) => {
      server.debug(`response:welcome`, response);
    });
  }, []);

  // Receive typing in room
  React.useEffect(() => {
    server.room.on('room:conversation:typing', (response) => {
      server.debug('response:conversation:typing', response);
      dispatch(updateConversation(response.from, response.says, new Date()));
    });
  }, []);

  return (
    <div
      css={{
        width: 'calc(100% - 320px)',
        height: 'calc(100% - 22px)',
        background: Colors.white,
      }}
    >
      <Container>
        <Conversation heightSendMessageForm={heightSendMessageForm}>
          {chat &&
            chat?.conversation &&
            chat?.conversation.map((item, index) => {
              return (
                <Message
                  key={index.toString()}
                  from={item?.from}
                  message={item?.message}
                  createdAt={item?.createdAt}
                  userName={data?.user?.userName}
                />
              );
            })}
        </Conversation>
        <SendMessageForm
          action={(message) => {
            sendMessage(message);
            setHeightSendMessageForm(80);
          }}
          setHeightConversation={(height) => {
            setHeightSendMessageForm(height);
          }}
        />
      </Container>
    </div>
  );
};

export default RightContainer;
