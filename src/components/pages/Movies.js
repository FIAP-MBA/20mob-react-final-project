import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'
import Container from '../modules/Container'
import Loader from '../modules/Loader'
import MoviePreviewCard from '../modules/MoviePreviewCard'

function Movies() {
  const { movies, isLoading } = useApplication()

  return (
    <ContainerMovies className="movies">
      <Container>
        {movies.length === 0 && (
          <h1 className="error">Não foi encontrado nenhum filme!</h1>
        )}
        {!isLoading ? (
          movies && movies.map((movieItem, index) => (

            <MoviePreviewCard key={index} movie={movieItem} index={index} />
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </ContainerMovies>
  );
};

const ContainerMovies = styled.div`
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
  
  export default Movies;