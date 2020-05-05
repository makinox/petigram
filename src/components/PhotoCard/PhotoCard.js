import React from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Img, ImgWrapper, Article } from './styles';
import { FavButton } from '../FavButton/FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
              };
              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};
