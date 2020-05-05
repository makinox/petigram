import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import { Layout } from '../components/Layout/layout';

export const Detail = ({ categoryId }) => (
  <Layout title={`Fotografía ${categoryId}`}>
    <PhotoCardWithQuery id={categoryId} />
  </Layout>
);
