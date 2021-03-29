import React from 'react';
import houseData from './data/houses.json';
import Card from './Card';
// import villagerData from './data/villagers.json';

function App(){

  return (
    <div className="App" class="card-container">
        {houseData.map(villager => {
          return (<Card 
            key={villager["Villager"]}
            villager={villager}
          />);
        })}
    </div>
  );
}

export default App;
