import React, { useRef, useState, useEffect } from 'react';
// , { useState , useEffect, useRef }

export default function Dropdown({
  title = '',
  options = [],
  onChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [selections, setSelections] = useState([]);

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(event.target) && open) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick, false);
    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false);
    };
  });

  const showCheckboxes = () => {
    setOpen(true);
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
    <div role="button" tabIndex="-1" key={title} ref={dropdownRef} onClick={showCheckboxes} onKeyDown={showCheckboxes}>
      <h2>Select option</h2>
      {
        open === true && (
        <div>
          {options.map((option) => (
            <label htmlFor={option} key={option}>
              <input onChange={handleChange(option)} type="checkbox" id={option} value={option} checked={isSelected(option)} />
              {option}
            </label>
          ))}
        </div>
        )
        }
    </div>
  );
}
