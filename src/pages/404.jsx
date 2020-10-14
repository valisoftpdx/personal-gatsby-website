import React from 'react';

import SEO from 'components/seo';
import Page from 'components/page';
import Header from 'components/header';
import Footer from 'components/footer';

import {Alert} from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <Page>
      <SEO title='404 - Not found' />
      <Header />
      <Alert variant='danger'>
        <Alert.Heading>Well crud!</Alert.Heading>
        <p>
          What you're looking for can't seem to be found. Maybe you misspelled
          the address, or perhaps it doesn't exist?
        </p>
      </Alert>
      <Footer />
    </Page>
  );
}
