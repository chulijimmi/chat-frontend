/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { transition } from '../../styled/Mixin';
import Colors from '../../styled/Colors';

type Props = {
  value: string;
  testId: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
};
export type Ref = HTMLInputElement;

const TextInput = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <input
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      data-test-id={props.testId}
      onChange={props.onChange}
      css={{
        width: '100%',
        padding: '14px 20px',
        fontSize: '12px',
        background: `${Colors.white}`,
        border: `1px solid ${Colors.dark}`,
        boxSizing: 'border-box',
        ':focus': {
          outline: 'none',
          border: `1px solid ${Colors.dark}`,
          boxShadow: `0px 2px 10px ${Colors.grey}, 0 2px 2px ${Colors.grey}`,
        },
        animationName: 'backgroundButton',
        ...transition('background-color', '300ms'),
        ...transition('box-shadow', '0.3s'),
      }}
      ref={ref}
    />
  );
});

export default TextInput;
