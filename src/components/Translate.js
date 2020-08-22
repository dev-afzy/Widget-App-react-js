import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert.js';

const options = [
  {
    label: 'Malayalam',
    value: 'ml',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];
const Transition = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="feild">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <div>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Transition;
