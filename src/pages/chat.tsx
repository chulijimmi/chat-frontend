/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import LeftContainer from '../components/room/LeftContainer';
import Colors from '../styled/Colors';
import RightContainer from '../components/room/RightContainer';
import { RootState } from '../state/typesRedux';
import { useSelector } from 'react-redux';
import server from '../config/server';

function Chat(props: PageProps) {
  const state: RootState = useSelector((state) => state);
  server.debug('state', state);
  return (
    <>
      <SEO title={'Free chat room'} />
      <Layout>
        <div
          css={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            boxSizing: 'border-box',
            background: Colors.greyLight,
            alignItems: 'center',
          }}
        >
          <div
            css={{
              width: '1280px',
              height: 'calc(100% - 100px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxSizing: 'border-box',
              background: Colors.primaryDark,
              boxShadow: `0px 2px 8px ${Colors.grey}, 0 2px 2px ${Colors.grey}`,
              borderRadius: '10px',
            }}
          >
            <LeftContainer />
            <RightContainer />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Chat;
