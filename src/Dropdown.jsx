import React, { useState, useEffect } from 'react';

export default function Dropdown({
  title = '',
  options = [],
  onChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [selections, setSelections] = useState([]);

  const toggleDropdown = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const addSelections = (selection) => {
    setSelections((prev) => [selection, ...prev]);
  };

  const removeSelections = (selectedItem) => {
    setSelections((prev) => prev.filter((selection) => selection !== selectedItem));
  };

  const isSelected = (selection) => selections.includes(selection);

  const handleChange = (option) => (_event) => {
    console.log('options', option);
    console.log('_event', _event);
    if (isSelected(option)) {
      removeSelections(option);
    } else {
      addSelections(option);
    }
  };

  useEffect(() => {
    onChange(selections);
  }, [selections]);

  return (
    <div
      className="dropdown"
      role="tablist"
      tabIndex="0"
      key={title}
    >
      <div
        role="button"
        tabIndex="0"
        className="dropdown-control"
        onClick={toggleDropdown}
        onKeyDown={toggleDropdown}
      >
        { open === false ? (<h3>Select Options...</h3>) : <h3>Close Menu</h3>}
      </div>
      {open === true && (
        <div className="checkboxes">
          {options.map((option) => (
            <label htmlFor={`${title}${option}`} key={`${title}${option}`}>
              <input
                role="tab"
                onChange={handleChange(option)}
                type="checkbox"
                id={`${title}${option}`}
                value={option}
                checked={isSelected(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
