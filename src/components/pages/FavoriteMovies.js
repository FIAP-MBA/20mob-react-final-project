import React from 'react';
import styled from 'styled-components';
import Container from '../modules/Container'
import MoviePreviewCard from '../modules/MoviePreviewCard'
import { useApplication } from '../../context/ApplicationContext';

function FavoriteMovies() {
  const { favoriteMovies } = useApplication()

  return (
    <ContainerFavoriteMovies className="favoriteMovies">
      <Container>
        {favoriteMovies &&
          favoriteMovies.map((favoriteMovieItem, index) => (
            <MoviePreviewCard key={index} movie={favoriteMovieItem} index={index} />
          ))}
      </Container>
    </ContainerFavoriteMovies>
  );
};

const ContainerFavoriteMovies = styled.div`
width: 100%;
margin-top: 16px;
margin-right: 16px;
.container {
  &:nth-child(1) {
    height: 68vh;
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &::-webkit-scrollbar {
      width: 0;
    }
    .error {
      font-size: 38px;
      color: red;
      height: 32px;
    }
  }
}
  `;

export default FavoriteMovies;
