import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';
import { Layout } from '../components/Layout/layout';
import React from 'react';

const HomePage = ({ categoryId }) => {
  return (
    <Layout title={'Tu app de fotos de mascotas'} subtitle={'Con petigram puedes encontrar fotos de animales dómesticos muy bonitos'}>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => prevProps.categoryId === props.categoryId);
