import React from 'react';

export default function Card({ villager }) {
  return (
    <div className="Card card">
      <div className="container-left">
        <img className="house-img" alt={`${villager.Villager}'s house`} src={`img/homes/${villager.Villager} - ${villager.Personality}.png`} />
      </div>
      <div className="container-right">
        <h1>{villager.Villager}</h1>
        <h2>{villager.Animal}</h2>
        <h2>{villager.Personality}</h2>
        <img className="villager-img" alt={`${villager.Villager}'s icon`} src={`img/villagers/${villager.Villager}_NH_Villager_Icon.png`} />
      </div>
    </div>
  );
}
