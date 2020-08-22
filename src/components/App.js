import React, { useState } from 'react';
import Accordian from './Accordian';
import Search from './Search';
import Transition from './Translate';
import Dropdown from './Dropdown';
import Route from './Route';

const items = [
  { title: 'afees', content: 'developer' },
  { title: 'afisha', content: 'pharmasict' },
  { title: 'afnaj', content: 'student' },
];

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
    <div>
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Transition />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        <div style={{ color: selected.value, margin: 10 }}>
          {selected.label}
        </div>
      </Route>
    </div>
  );
};
