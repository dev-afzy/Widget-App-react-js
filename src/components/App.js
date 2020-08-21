import React, { useState } from 'react';
// import Accordian from './Accordian';
// import Search from './Search';
import Dropdown from './Dropdown';

// const items = [
//   { title: 'afees', content: 'developer' },
//   { title: 'afisha', content: 'pharmasict' },
//   { title: 'afnaj', content: 'student' },
// ];

const options = [
  {
    label: 'color red',
    value: 'red',
  },
  {
    label: 'color green',
    value: 'green',
  },
  {
    label: 'color blur',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    // <div className="ui container">
    //   <Search />{' '}
    // </div>
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
