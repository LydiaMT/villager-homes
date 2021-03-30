import React, { useState } from 'react';
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
  const [value, setValue] = useState(null);

  return (
    <span className="App wrapper">
      <section className="dropdown-container">
        <div className="dropdown-wrapper">
          <h1>House</h1>
          
          <Dropdown 
            title="House Types"
            options={[...houseTypes]} 
            value={value}
            onChange={val => setValue(val)}/>
          <h2>House Color</h2>
          <Dropdown title="House Color"   options={[...houseColor]}/>
          <h2>Trim Color</h2>
          <Dropdown title="Trim Color"    options={[...trimColor]}/>
        </div>
        <div className="dropdown-wrapper">
          <h1>Roof</h1>
          <h2>Roof Material</h2>
          <Dropdown title="Roof Material" options={[...roofMaterial]}/>
          <h2>Roof Color</h2>
          <Dropdown title="Roof Color"    options={[...roofColor]}/>
        </div>
        <div className="dropdown-wrapper">
          <h1>Door</h1>
          <h2>Door Type</h2>
          <Dropdown title="Door Type"     options={[...doorType]}/>
          <h2>Door Color</h2>
          <Dropdown title="Door Color"    options={[...doorColor]}/>
        </div>
      </section>
      <section className="card-wrapper">
        {houseData.map(villager => {
          return (<Card 
            key={villager["Villager"]}
            villager={villager}
          />);
        })}
      </section>
    </span>
  );
}

export default App;
