/** @jsx jsx */
import {
  ChangeEvent,
  Fragment,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { jsx } from '@emotion/react';
import { FiSend } from 'react-icons/fi';
import Colors from '../../styled/Colors';
import ContentEditable from 'react-contenteditable';

export const Container: FunctionComponent = ({ children }) => {
  return <div css={{ width: '100%', height: '100%' }}>{children}</div>;
};

interface ConversationProps {
  heightSendMessageForm: number;
}
export const Conversation: FunctionComponent<ConversationProps> = ({
  children,
  heightSendMessageForm,
}) => {
  return (
    <div
      css={{
        width: '100%',
        height: `calc(100% - ${heightSendMessageForm}px)`,
        background: 'yellow',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Fragment>{children}</Fragment>
    </div>
  );
};

interface SendMessageForm {
  action: (message: string) => void;
  setHeightConversation: (height: number) => void;
}
export const SendMessageForm: FunctionComponent<SendMessageForm> = ({
  action,
  setHeightConversation,
}) => {
  const sizeSendButton = 40;
  const [message, setMessage] = useState<string>('');
  const ref = useRef(null);

  const sendMessage = () => {
    action(message.replace(/(<([^>]+)>)/gi, '')), setMessage('');
  };

  const doSetHeightConversation = () => {
    setHeightConversation(ref.current.clientHeight);
  };

  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        paddingBottom: '20px',
      }}
      ref={ref}
    >
      <div
        css={{
          width: 'calc(100% - 20px)',
          padding: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            width: `calc(100% - ${sizeSendButton}px)`,
            height: 'auto',
            display: 'inline-block',
            wordBreak: 'break-all',
            overflow: 'hidden',
          }}
        >
          <ContentEditable
            tagName="div"
            html={message}
            disabled={false}
            onChange={(e) => setMessage(e.target.value)}
            css={{
              width: 'calc(100% - 40px)',
              border: `1px solid ${Colors.greyDarkLight}`,
              overflowY: 'scroll',
              maxHeight: 300,
              padding: 10,
              color: Colors.dark,
              fontSize: 14,
              ':focus': {
                outline: 'none',
              },
              '::-webkit-scrollbar': {
                width: '10px',
              },
              '::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '::-webkit-scrollbar-thumb': {
                background: Colors.greyDarkLight,
              },
              '::-webkit-scrollbar-thumb:hover': {
                background: Colors.greyDark,
              },
            }}
            onKeyDown={() => doSetHeightConversation()}
            onKeyUp={() => doSetHeightConversation()}
          />
        </div>
        <div
          css={{
            width: sizeSendButton,
            height: sizeSendButton,
          }}
        >
          <FiSend
            onClick={() => sendMessage()}
            css={{
              background: Colors.greyLight,
              width: sizeSendButton - 20,
              height: sizeSendButton - 20,
              borderRadius: sizeSendButton - 20 / 2,
              padding: 11,
              color: Colors.greyDark,
              border: `1px solid ${Colors.grey}`,
              ':hover': {
                color: Colors.primaryLight,
                cursor: 'pointer',
              },
            }}
          ></FiSend>
        </div>
      </div>
    </div>
  );
};
