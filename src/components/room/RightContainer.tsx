/** @jsx jsx */
import { ChangeEvent, FunctionComponent, useState } from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';
import { Container, Conversation, SendMessageForm } from './ChatArea';
import TextInput from '../core/TextInput';

const RightContainer: FunctionComponent = () => {
  const [heightSendMessageForm, setHeightSendMessageForm] = useState(80);

  const sendMessage = (message) => {
    console.log('send_message', message);
  };

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
