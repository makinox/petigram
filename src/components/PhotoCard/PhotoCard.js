import React, { useEffect, useRef, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Button, Img, ImgWrapper, Article, LikeIcon } from './styles';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  const Icon = liked ? LikeIcon : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size={32} /> {likes} likes
          </Button>
        </>
      )}
    </Article>
  );
};
