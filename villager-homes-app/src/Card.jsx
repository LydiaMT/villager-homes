import React from 'react';

function Card({ villager }){

  return (
    <div className="Card" class="card">
      <div class="container-left">
        <img class="house-img" alt={`${villager["Villager"]}'s house`} src={`img/homes/${villager["Villager"]} - ${villager["Personality"]}.png`} />
      </div>
      <div class="container-right">
        <h3>{villager["Villager"]}</h3>
        <h4>{villager["Animal"]}</h4>
        <h4>{villager["Personality"]}</h4>
        <img class="villager-img" alt={`${villager["Villager"]}'s icon`}src={`img/villagers/${villager["Villager"]}_NH_Villager_Icon.png`} />
      </div>
    </div>
  );
}

export default Card;