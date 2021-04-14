/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Colors from '../styled/Colors';

const Footer = () => {
  return (
    <div
      css={{ width: '100%', padding: '20px 0px', background: Colors.greyLight }}
    >
      <p css={{ fontsize: 14, color: Colors.greyDark, textAlign: 'center' }}>
        simple chat v.0.1
      </p>
    </div>
  );
};

export default Footer;
