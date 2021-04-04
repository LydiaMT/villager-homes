import React, { useRef, useState, useEffect } from 'react';

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
    <div
      className="dropdown"
      role="tablist"
      tabIndex="0"
      key={title}
      ref={dropdownRef}
      onClick={showCheckboxes}
      onKeyDown={showCheckboxes}
      onFocus={showCheckboxes}
    >
      <div className="dropdown-control">
        <h3>Select options...</h3>
        <div className="dropdown-arrow-wrapper">
          <span className="dropdown-arrow"> </span>
        </div>
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
