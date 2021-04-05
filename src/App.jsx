import React, { useState } from 'react';
import houseData from './data/houses.json';
import Card from './Card.jsx';
import Dropdown from './Dropdown.jsx';

// using Set() becuase we only want one type of thing
let houseTypes = new Set();
let houseColor = new Set();
let trimColor = new Set();
let roofMaterial = new Set();
let roofColor = new Set();
let doorType = new Set();
let doorColor = new Set();
let animalType = new Set();
let personalityType = new Set();

houseData.forEach((villager) => {
  houseTypes.add(villager['House Type']);
  houseColor.add(villager['House Color']);
  trimColor.add(villager['Trim Color']);
  roofMaterial.add(villager['Roof Material']);
  roofColor.add(villager['Roof Color']);
  doorType.add(villager['Door Style']);
  doorColor.add(villager['Door Color']);
  animalType.add(villager.Animal);
  personalityType.add(villager.Personality);
});

// converting back to a sorted array
houseTypes = [...houseTypes].sort();
houseColor = [...houseColor].sort();
trimColor = [...trimColor].sort();
roofMaterial = [...roofMaterial].sort();
roofColor = [...roofColor].sort();
doorType = [...doorType].sort();
doorColor = [...doorColor].sort();
animalType = [...animalType].sort();
personalityType = [...personalityType].sort();

// filtering mechanic in dropdowns
const filterData = (data, filters) => data.filter((villager) => {
  if (filters.houseTypes.length > 0 && !filters.houseTypes.includes(villager['House Type'])) {
    return false;
  }
  if (filters.houseColor.length > 0 && !filters.houseColor.includes(villager['House Color'])) {
    return false;
  }
  if (filters.trimColor.length > 0 && !filters.trimColor.includes(villager['Trim Color'])) {
    return false;
  }
  if (filters.roofMaterial.length > 0 && !filters.roofMaterial.includes(villager['Roof Material'])) {
    return false;
  }
  if (filters.roofColor.length > 0 && !filters.roofColor.includes(villager['Roof Color'])) {
    return false;
  }
  if (filters.doorType.length > 0 && !filters.doorType.includes(villager['Door Style'])) {
    return false;
  }
  if (filters.doorColor.length > 0 && !filters.doorColor.includes(villager['Door Color'])) {
    return false;
  }
  if (filters.animalType.length > 0 && !filters.animalType.includes(villager.Animal)) {
    return false;
  }
  if (filters.personalityType.length > 0 && !filters.personalityType.includes(villager.Personality)) {
    return false;
  }
  return true;
});

// App render
const App = () => {
  const [filters, setFilters] = useState({
    houseTypes: [],
    houseColor: [],
    trimColor: [],
    roofMaterial: [],
    roofColor: [],
    doorType: [],
    doorColor: [],
    animalType: [],
    personalityType: [],
  });

  const setFilter = (filter = '') => (selected = []) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: selected,
    }));
  };

  const filteredData = filterData(houseData, filters);

  return (
    <div className="App">
      <section className="dropdown-container">
        <div className="dropdown-wrapper">
          <h1>House</h1>
          <h2>House Type</h2>
          <Dropdown
            role="tablist"
            title="House Types"
            options={houseTypes}
            onChange={setFilter('houseTypes')}
          />
          <h2>House Color</h2>
          <Dropdown
            role="tablist"
            title="House Color"
            options={houseColor}
            onChange={setFilter('houseColor')}
          />
          <h2>Trim Color</h2>
          <Dropdown
            role="tablist"
            title="Trim Color"
            options={trimColor}
            onChange={setFilter('trimColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Roof</h1>
          <h2>Roof Material</h2>
          <Dropdown
            role="tablist"
            title="Roof Material"
            options={roofMaterial}
            onChange={setFilter('roofMaterial')}
          />
          <h2>Roof Color</h2>
          <Dropdown
            role="tablist"
            title="Roof Color"
            options={roofColor}
            onChange={setFilter('roofColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Door</h1>
          <h2>Door Type</h2>
          <Dropdown
            role="tablist"
            title="Door Type"
            options={doorType}
            onChange={setFilter('doorType')}
          />
          <h2>Door Color</h2>
          <Dropdown
            role="tablist"
            title="Door Color"
            options={doorColor}
            onChange={setFilter('doorColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Villagers</h1>
          <h2>Animal</h2>
          <Dropdown
            role="tablist"
            title="Animal"
            options={animalType}
            onChange={setFilter('animalType')}
          />
          <h2>Personality</h2>
          <Dropdown
            role="tablist"
            title="Personality"
            options={personalityType}
            onChange={setFilter('personalityType')}
          />
        </div>
      </section>
      <section className="card-wrapper">
        {filteredData.map((villager) => (
          <Card
            key={villager.Villager}
            villager={villager}
          />
        ))}
        {filteredData.length === 0 ? (
          <div className="Card no-results">
            <div>
              <h1 className="villager-text">No Results</h1>
              <br />
              <p>Your current selection does not match any of the available villager homes.</p>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default App;
