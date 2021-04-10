import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'

function Details() {
  const { movie } = useApplication()

  return (
    <ContainerDetails>
      <ContainerMovie>
        <MovieImg src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" />

        <MovieInfo>
          <MovieTitle>
            <strong>{movie.title}</strong>
          </MovieTitle>
          <MovieRating>
            <i className="fas fa-star" /> {movie.vote_average}/10
            </MovieRating>
          <MovieOverview>{movie.overview}</MovieOverview>
          <OtherDetails>
            <p>
              <strong>Genero:</strong>
              {movie.genres && movie.genres.map((genres, index) => (
                <i> {genres.name} </i>
              ))}
            </p>
            <p>
              <strong>Pais:</strong> 
              {movie.production_countries && movie.production_countries.map((country, index) => (
                <i> {country.name}</i>
              ))}
            </p>
            <p>
              <strong>Ano de lançamento:</strong> {new Date(movie.release_date).toLocaleString(undefined, {month: "short",year: "numeric",day: "numeric",})}
            </p>
            <p>
              <strong>Idioma:</strong> 
              {movie.spoken_languages && movie.spoken_languages.map((lg, index) => (
                <i>{lg.name}</i>
              ))}
            </p>
          </OtherDetails>
        </MovieInfo>
      </ContainerMovie>
    </ContainerDetails>
  );
};

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1b1c22;

    @media (max-width: 920px) {
      .imageMoviePage {
          margin: 10px;
          height: 240px;
          width: 160px;
      }
  
      .movieTrailer {
          width: 540px;
          height: 304px;
          margin: 10px;
      }
  
      .movieInfo {
          margin: 10px;
          width: 540px;
      }
  
      .movieTitle {
          font-size: 20px;
      }
  
      .movieOverview, .movieRating, .otherDetails {
          font-size: 16px;
      }
  }
`;

const ContainerMovie = styled.div`
    height: 100%;
    display: flex;
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
`;

const MovieImg = styled.img`
    margin: 20px;
    height: 300px;
    width: 200px;
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px;
    width: 700px;
  `;

const OtherDetails = styled.div`
  margin-top: 20px;
  font-size: 18px;
  `;

const MovieTitle = styled.div`
    font-size: 24px;
  `;

const MovieRating = styled.div`
    font-size: 18px;
    margin-top: 10px;
    color: #f0ff00;
  `;

const MovieOverview = styled.div`
    margin-top: 10px;
    font-size: 20px;
  `;


export default Details;