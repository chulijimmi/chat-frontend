/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import JoinForm from '../components/JoinForm';
import { RootState } from '../state/typesRedux';
import { useSelector } from 'react-redux';
import server from '../config/server';

function App(props: PageProps) {
  const state: RootState = useSelector((state) => state);
  server.debug('state', state);
  return (
    <>
      <SEO />
      <Layout>
        <JoinForm />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
