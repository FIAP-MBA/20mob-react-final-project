import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'
import Container from '../modules/Container'
import MoviePreviewCard from '../modules/MoviePreviewCard'

function PopularMovies() {
    const { popularMovies } = useApplication()
  
    return (
      <ContainerPopularMovies className="popularMovies">
        <Container>
          {popularMovies && popularMovies.map((popularMovieItem, index) => (
              <MoviePreviewCard key={index} movie={popularMovieItem} index={index} />
            ))}
        </Container>
      </ContainerPopularMovies>
    );
  };
  
  const ContainerPopularMovies = styled.div`
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
  
  export default PopularMovies;
  