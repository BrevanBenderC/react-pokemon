import React from 'react';
import RenderPokes from '../renderPokes/renderPokes';
import { Button } from '@mui/material';

export default function PokeList({ pokemon, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevState) => --prevState);
    setLoading(true);
  };

  return (
    <>
      <div className="compiledMon">
        {pokemon.map((pokemon) => (
          <RenderPokes key={pokemon.id} {...pokemon} />
        ))}
      </div>

      <div className="button">
        <Button variant="outlined" onClick={handlePrevPage}>
          Previous Page
        </Button>
        <Button variant="outlined" onClick={handleNextPage}>
          Next Page
        </Button>
      </div>
    </>
  );
}
