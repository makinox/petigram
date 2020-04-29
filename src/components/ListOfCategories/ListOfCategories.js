import React, { useState, useEffect } from 'react';
import { List, Item } from './styles';
import { Category } from '../Category/category';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setFixed] = useState(false);

  useEffect(() => {
    fetch('https://petgram-server-makinox.makinoxx.now.sh/categories')
      .then((res) => res.json())
      .then((response) => setCategories(response));
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
