/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Colors from '../../styled/Colors';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      css={{
        display: 'table',
        background: Colors.white,
        width: '100%',
        height: '100%',
        borderRadius: '6px',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
        padding: '15px',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
