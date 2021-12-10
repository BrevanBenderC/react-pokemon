import React from 'react';
import './renderPokes.css';

export default function RenderPokes({
  pokemon,
  url_image,
  hp,
  attack,
  special_attack,
  defense,
  special_defense,
  speed,
}) {
  return (
    <div className="indiPoke">
      <img src={url_image} />
      <h1 className="name">{pokemon}</h1>
      <span className="stats">Hp: {hp}</span>
      <span className="stats">Attack: {attack}</span>
      <span className="stats">Defense: {defense}</span>
      <span className="stats">Sp Attack: {special_attack}</span>
      <span className="stats">Sp Defense: {special_defense}</span>
      <span className="stats">Speed: {speed}</span>
    </div>
  );
}
