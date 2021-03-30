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

houseData.forEach((villager) => {
  houseTypes.add(villager['House Type']);
  houseColor.add(villager['House Color']);
  trimColor.add(villager['Trim Color']);
  roofMaterial.add(villager['Roof Material']);
  roofColor.add(villager['Roof Color']);
  doorType.add(villager['Door Style']);
  doorColor.add(villager['Door Color']);
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
  });

  const setFilter = (filter = '') => (selected = []) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: selected,
    }));
  };

  const filteredData = filterData(houseData, filters);

  return (
    <span className="App wrapper">
      <section className="dropdown-container">
        <div className="dropdown-wrapper">
          <h1>House</h1>
          <h2>House Type</h2>
          <Dropdown
            title="House Types"
            options={[...houseTypes]}
            onChange={setFilter('houseTypes')}
          />
          <h2>House Color</h2>
          <Dropdown
            title="House Color"
            options={[...houseColor]}
            onChange={setFilter('houseColor')}
          />
          <h2>Trim Color</h2>
          <Dropdown
            title="Trim Color"
            options={[...trimColor]}
            onChange={setFilter('trimColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Roof</h1>
          <h2>Roof Material</h2>
          <Dropdown
            title="Roof Material"
            options={[...roofMaterial]}
            onChange={setFilter('roofMaterial')}
          />
          <h2>Roof Color</h2>
          <Dropdown
            title="Roof Color"
            options={[...roofColor]}
            onChange={setFilter('roofColor')}
          />
        </div>
        <div className="dropdown-wrapper">
          <h1>Door</h1>
          <h2>Door Type</h2>
          <Dropdown
            title="Door Type"
            options={[...doorType]}
            onChange={setFilter('doorType')}
          />
          <h2>Door Color</h2>
          <Dropdown
            title="Door Color"
            options={[...doorColor]}
            onChange={setFilter('doorColor')}
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
    </span>
  );
};

export default App;
