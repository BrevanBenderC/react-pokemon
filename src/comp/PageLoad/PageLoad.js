/* eslint-disable no-unused-vars */
import React from 'react';
import RenderPokes from '../renderPokes/renderPokes';

export default function PageLoad({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <RenderPokes key={poke.id} {...poke} />
      ))}
    </div>
  );
}
