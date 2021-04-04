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
        <h3>Select options...</h3>
      </div>
      {
        open === true && (
        <div className="checkboxes">
          {options.map((option) => (
            <label htmlFor={option} key={option}>
              <input
                role="tab"
                onChange={handleChange(option)}
                type="checkbox"
                id={option}
                value={option}
                checked={isSelected(option)}
              />
              {option}
            </label>
          ))}
        </div>
        )
        }
    </div>
  );
}
