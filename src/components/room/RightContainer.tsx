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

const RightContainer: FunctionComponent = () => {
  const [heightSendMessageForm, setHeightSendMessageForm] = useState(80);

  const sendMessage = (message) => {
    console.log('send_message', message);
  };

  // Receive welcome message
  React.useEffect(() => {
    server.room.on(`room:welcome`, (response) => {
      console.log(`response:welcome`, response);
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
        <Conversation
          heightSendMessageForm={heightSendMessageForm}
        ></Conversation>
        <SendMessageForm
          action={(message) => {
            sendMessage(message);
            setHeightSendMessageForm(80);
          }}
          setHeightConversation={(height) => {
            console.log('set height conversation', height);
            setHeightSendMessageForm(height);
          }}
        />
      </Container>
    </div>
  );
};

export default RightContainer;
