/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import JoinForm from '../components/JoinForm';

function App(props: PageProps) {
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
