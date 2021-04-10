import React from 'react';
import styled from 'styled-components';
import { useApplication } from '../../context/ApplicationContext'

function HeaderSearch() {
  const { search, setSearch, handleSearch, activeLink } = useApplication()

  return (
    <Form onSubmit={handleSearch}>
      {activeLink !== "Favoritos" && activeLink !== "Populares" && activeLink !== "Detalhes" && activeLink !== "Sobre" && (
        <Input
          type="text"
          placeholder="Pesquisar ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </Form>
  );
};

const Input = styled.input`
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid #2c2f39;
    background: transparent;
    padding: 10px 16px;
    width: 260px;
    color: #f9a5ff;
    &::placeholder {
      color: #f9a5ff;
      letter-spacing: 1px;
    }
`;

const Form = styled.form`
  height: 40px;
  min-height: 40px;
`;

export default HeaderSearch;