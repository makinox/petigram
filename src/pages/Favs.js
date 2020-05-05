import React from 'react';
import { FavsWithQuery } from '../containers/GetFavorites';
import { Layout } from '../components/Layout/layout';

export const Favs = () => (
  <Layout title={'Tus Favoritos'} subtitle={'Aquí puedes encontrar tus favoritos'}>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
);
