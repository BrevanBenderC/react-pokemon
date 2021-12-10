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
      <div className="poke-list">
        {pokemon.map((poke) => (
          <RenderPokes key={poke.id} {...poke} />
        ))}
      </div>

      <div className="button">
        <Button variant="outlined" onClick={handlePrevPage}>
          Prev Page
        </Button>
        <Button variant="outlined" onClick={handleNextPage}>
          Next Page
        </Button>
      </div>
    </>
  );
}
