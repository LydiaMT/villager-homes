import React, { useRef, useState, useEffect } from "react";
// , { useState , useEffect, useRef }

export default function Dropdown({ title = "" , options = [] }) {
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
    // componentWillUnmount
    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false);
    };
  });

  const showCheckboxes = () => {
    setOpen(true)
  }

  const addSelections = (selection) => {
    setSelections((prev) => {
      return[selection, ...prev];
    });
  };

  const removeSelections = (selectedIndex) => {
    setSelections((prev) => {
      return prev.filter((selection, index) => index !== selectedIndex)
    })
  }

  const isSelected = (selection) => {
    return selections.includes(selection)
  }

  const handleChange = (option) => (event) => {
    if (isSelected(option)) {
      removeSelections(option)
    } else {
      addSelections(option)
    }
  }

  console.log("selections", selections)
  return (
    <div key={title} ref={dropdownRef} onClick={showCheckboxes}>
      <h2>Select option</h2>
        {
        open === true && (
        <div>
          {options.map((option) => (
          <label for={option} key={option}>
            <input onChange={handleChange(option)} type="checkbox" id={option} value={option} checked={isSelected(option)}/>{option}
          </label>
          ))}
        </div>)
        }
    </div>
  )
}


