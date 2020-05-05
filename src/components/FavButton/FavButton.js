import React from 'react';
import { Button, LikeIcon } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';
import PropTypes from 'prop-types';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? LikeIcon : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <Icon size={32} /> {likes} likes
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
