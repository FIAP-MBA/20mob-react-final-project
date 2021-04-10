import React from "react";
import styled from 'styled-components';
import { FavoriteIcon } from "./FavoriteIcon";
import { useApplication } from '../../context/ApplicationContext'

function MoviePreviewCard({ movie, index }) {
  const { setActiveLink, getMovieApi } = useApplication()

  function get(id) {
    setActiveLink("Detalhes")
    getMovieApi(id)
  }

  return (
    <PreviewCard>
      <PreviewImage key={index} src={ movie.posterPath } onClick={() => get(movie.id)} alt="movie" />
      <FavoriteIcon movie={movie} />
    </PreviewCard>
  );
};

const PreviewCard = styled.div`
    position: relative;
    cursor: pointer;
    width: 282px;
    max-height: 400px;
    overflow: hidden;
`;

const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover img {
        transform: scale(1.5);
      }
`;

export default MoviePreviewCard;