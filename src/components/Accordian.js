import React, { useState } from 'react';

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitlesClick = (index) => {
    setActiveIndex(index);
  };

  const renderList = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitlesClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div>
      <div className="ui styles accordion">{renderList}</div>
    </div>
  );
};
export default Accordian;
