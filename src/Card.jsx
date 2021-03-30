import React from 'react';

export default function Card({ villager }) {
  return (
    <div className="Card card">
      <div className="container-left">
        <img className="house-img" alt={`${villager.Villager}'s house`} src={`img/homes/${villager.Villager} - ${villager.Personality}.png`} />
      </div>
      <div className="container-right">
        <h3>{villager.Villager}</h3>
        <h4>{villager.Animal}</h4>
        <h4>{villager.Personality}</h4>
        <img className="villager-img" alt={`${villager.Villager}'s icon`} src={`img/villagers/${villager.Villager}_NH_Villager_Icon.png`} />
      </div>
    </div>
  );
}
