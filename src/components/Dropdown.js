import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyEvent = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyEvent);
    return () => document.body.removeEventListener('click', onBodyEvent);
  }, []);
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
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
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
