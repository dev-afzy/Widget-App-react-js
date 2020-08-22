import React, { useState, useEffect } from 'react';
import List from './List';

const Header = () => {
  // const path = window.location.pathname;
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname);
  }, [setPath]);

  return (
    <div className="ui secondary pointing menu">
      <List href="/" className={path === `/` ? `active item` : `item`}>
        Accordian
      </List>
      <List
        href="/search"
        className={path === `/search` ? `active item` : `item`}
      >
        Wikipedia
      </List>
      <List
        href="/dropdown"
        className={path === `/dropdown` ? `active item` : `item`}
      >
        Color picker
      </List>
      <List
        href="/translate"
        className={path === `/translate` ? `active item` : `item`}
      >
        Traslate
      </List>
    </div>
  );
};

export default Header;
