/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Colors from '../../styled/Colors';
import { transition } from '../../styled/Mixin';

type Props = {
  loading: boolean;
  round: 'small' | 'big';
  children: React.ReactNode;
  width: string;
  onClick: React.MouseEventHandler;
  testId: string;
};

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <button
      css={{
        background: `${Colors.primaryLight}`,
        padding: '10px 20px',
        border: '1px solid transparent',
        borderRadius: `${props.round === 'big' ? '50px' : '6px'}`,
        fontSize: '14px',
        color: Colors.white,
        boxSizing: 'border-box',
        width: `${props.width}`,
        ':hover': {
          color: Colors.white,
          cursor: 'pointer',
          background: `${Colors.primary}`,
          border: `1px solid ${Colors.primary}`,
        },
        ':focus': {
          outline: 'none',
          border: `1px solid ${Colors.grey}`,
          background: `${Colors.primaryLight}`,
          color: `${Colors.white}`,
        },
        animationName: 'backgroundButton',
        ...transition('background-color', '300ms'),
      }}
      ref={ref}
      onClick={props.onClick}
      data-test-id={props.testId}
    >
      {props.loading ? 'loading' : props.children}
    </button>
  );
});

export default Button;
