/* eslint-disable no-unused-vars */
import React from 'react';
import renderPokes from '../renderPokes/renderPokes';

export default function pageLoad({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <renderPokes key={poke.id} {...poke} />
      ))}
    </div>
  );
}
