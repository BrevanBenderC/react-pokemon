import React from 'react';

export default function RenderPokes({ pokemon, url_image }) {
  return (
    <div className="indiPoke">
      <img src={url_image} />
      <h1>{pokemon}</h1>
    </div>
  );
}
