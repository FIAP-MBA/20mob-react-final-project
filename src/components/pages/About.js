import React from 'react';
import styled from 'styled-components';

function About() {

  return (
    <ContainerDetails>
      <ContainerMovie>
        <AboutInfo>
          <MovieTitle>
            <strong>Trabalho final de react, projeto de filmes favoritos!</strong>
          </MovieTitle>
          <AboutDetails>
            <i className="fas fa-star" /> Esse projeto foi Desenvolvido com 
            intuito de você adicionar os filmes que já assistiu ou filmes favoritos para assistir mais tarde.
            </AboutDetails>
            <AboutInfo>Desenvolvido por:</AboutInfo>
            <OtherDetails>
            <p>
              <strong>Welton Dornelas Magalhaes RM336708</strong> 
            </p>
            <p>
              <strong>César Rodrigues RM336648</strong> 
            </p>
            <p>
              <strong>Rafael Barros RM336738</strong> 
            </p>
            <p>
              <strong>Valmir Torres RM336666</strong> 
            </p>
            </OtherDetails>
        </AboutInfo>
      </ContainerMovie>
    </ContainerDetails>
  );
};

const ContainerDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1b1c22;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }
`;

const ContainerMovie = styled.div`
    height: 100%;
    display: flex;
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
`;

const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px;
    width: 700px;
  `;

const MovieTitle = styled.div`
    font-size: 24px;
  `;

const AboutDetails = styled.div`
    font-size: 18px;
    color: #f0ff00;
    margin-top: 50px;
  `;

  const OtherDetails = styled.div`
  margin-top: 20px;
  font-size: 18px;
  `;


export default About;