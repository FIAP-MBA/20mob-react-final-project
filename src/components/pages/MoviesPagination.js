import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'
import Container from '../modules/Container'

function MoviesPagination() {
    const { newPage, currentPage, showPagination } = useApplication()
  
    return (
      <ContainerPagination className="moviesPagination">
        {showPagination && (
          <Container>
            <React.Fragment>
              <button
                style={{
                  cursor: currentPage !== 1 ? "pointer" : "not-allowed",
                  background: currentPage !== 1 ? "#32de57" : "#303847",
                }}
                onClick={() => newPage("previous")}
              >
                Página anterior
              </button>
              <button onClick={() => newPage("next")}>Próxima página</button>
            </React.Fragment>
          </Container>
        )}
      </ContainerPagination>
    );
  };
  
  const ContainerPagination = styled.div`
    width: 100%;
    .container {
      &:nth-child(1) {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          border: none;
          outline: none;
          background: #32de57;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          border-radius: 4px;
          width: 160px;
          padding: 10px 0;
          cursor: pointer;
          user-select: none;
          margin: 0 10px;
          transition: background 500ms ease-in-out;
          &:hover {
            background: #259a3e;
          }
        }
      }
    }
  `;
  
  export default MoviesPagination;