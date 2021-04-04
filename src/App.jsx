import React, { useState } from 'react';
import houseData from './data/houses.json';
import Card from './Card.jsx';
import Dropdown from './Dropdown.jsx';

const houseTypes = new Set();
const houseColor = new Set();
const trimColor = new Set();
const roofMaterial = new Set();
const roofColor = new Set();
const doorType = new Set();
const doorColor = new Set();
const animalType = new Set();
const personalityType = new Set();

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
            options={[...houseTypes].sort()}
            onChange={setFilter('houseTypes')}
          />
          <h2>House Color</h2>
          <Dropdown
            role="tablist"
            title="House Color"
            options={[...houseColor].sort()}
            onChange={setFilter('houseColor')}
          />
          <h2>Trim Color</h2>
          <Dropdown
            role="tablist"
            title="Trim Color"
            options={[...trimColor].sort()}
            onChange={setFilter('trimColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Roof</h1>
          <h2>Roof Material</h2>
          <Dropdown
            role="tablist"
            title="Roof Material"
            options={[...roofMaterial].sort()}
            onChange={setFilter('roofMaterial')}
          />
          <h2>Roof Color</h2>
          <Dropdown
            role="tablist"
            title="Roof Color"
            options={[...roofColor].sort()}
            onChange={setFilter('roofColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Door</h1>
          <h2>Door Type</h2>
          <Dropdown
            role="tablist"
            title="Door Type"
            options={[...doorType].sort()}
            onChange={setFilter('doorType')}
          />
          <h2>Door Color</h2>
          <Dropdown
            role="tablist"
            title="Door Color"
            options={[...doorColor].sort()}
            onChange={setFilter('doorColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Villagers</h1>
          <h2>Animal</h2>
          <Dropdown
            role="tablist"
            title="Animal"
            options={[...animalType].sort()}
            onChange={setFilter('animalType')}
          />
          <h2>Personality</h2>
          <Dropdown
            role="tablist"
            title="Personality"
            options={[...personalityType].sort()}
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
      </section>
    </div>
  );
};

export default App;
