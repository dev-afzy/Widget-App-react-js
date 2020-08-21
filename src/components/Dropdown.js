import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const renderList = options.map((option) => {
    if (option.label === selected.label) {
      return null;
    }
    return (
      <div
        key={option.label}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.value}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select color</label>
        <div
          onClick={() => setOpen(!open)}
          className={` ui selection dropdown ${open ? 'visible active' : ''} `}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
