/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';

function Chat(props: PageProps) {
  return (
    <>
      <SEO title={'Free chat room'} />
      <Layout>
        <div>Chat</div>
      </Layout>
    </>
  );
}

export default Chat;
