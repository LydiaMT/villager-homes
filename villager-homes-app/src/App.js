import React from 'react';
import houseData from './data/houses.json';
import Card from './Card';
import Dropdown from './Dropdown';

const houseTypes = new Set();
const houseColor = new Set();
const trimColor = new Set();
const roofMaterial = new Set();
const roofColor = new Set();
const doorType = new Set();
const doorColor = new Set();

houseData.forEach(villager => {
  houseTypes.add(villager["House Type"]);
  houseColor.add(villager["House Color"]);
  trimColor.add(villager["Trim Color"]);
  roofMaterial.add(villager["Roof Material"]);
  roofColor.add(villager["Roof Color"]);
  doorType.add(villager["Door Style"]);
  doorColor.add(villager["Door Color"]);
})

function App(){

  return (
    <div className="App" class="card-container">
      <div>
        <Dropdown title="House Types"   options={[...houseTypes]} />
        <Dropdown title="House Color"   options={[...houseColor]}/>
        <Dropdown title="Trim Color"    options={[...trimColor]}/>
        <Dropdown title="Roof Material" options={[...roofMaterial]}/>
        <Dropdown title="Roof Color"    options={[...roofColor]}/>
        <Dropdown title="Door Type"     options={[...doorType]}/>
        <Dropdown title="Door Color"    options={[...doorColor]}/>
      </div>
      <div class="card-container">
        {houseData.map(villager => {
          return (<Card 
            key={villager["Villager"]}
            villager={villager}
          />);
        })}
      </div>
    </div>
  );
}

export default App;
