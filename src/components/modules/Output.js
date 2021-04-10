import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'
import Container from '../modules/Container'
import Movies from '../pages/Movies'
import MoviesPagination from '../pages/MoviesPagination'
import PopularMovies from '../pages/PopularMovies'
import Routes from "../../routes/Routes";
import About from '../pages/About';
import Details from '../pages/Details';

function Output() {
  const { activeLink } = useApplication()

  return (
    <OutputContainer className="output">
      {activeLink === "Home" && (
        <Container>
          <React.Fragment>
            <Movies />
            <MoviesPagination />
          </React.Fragment>
        </Container>
      )}
      {activeLink === "Populares" && (
        <Container>
          <PopularMovies />
        </Container>
      )}
      {activeLink === "Favoritos" && (

        <Routes />
      )}
      {activeLink === "Detalhes" && (

        <Container>
          <Details />
        </Container>
      )}
      {activeLink === "Sobre" && (

          
          <About />
      )}
    </OutputContainer>
  );
};

const OutputContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default Output;