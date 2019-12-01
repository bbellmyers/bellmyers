import React from 'react';
import './NavItem.scss';

const NavItem = ({ name, open, index, items, selected, selectedHandler }) => {
  if (open) {
    return (
      <div id={`nav${index}-open`} className="navOpen">
        <div className={`navName navName${index}`}>
          <span className="background"></span>
          <span className="name">{name}</span>
        </div>
        <div className={`subnav subnav${index}`}>
          {items.map((item, itemIndex) => {
            return (
              <a
                key={itemIndex}
                id={`subnav${index}-${itemIndex}`}
                onClick={() => selectedHandler(index, itemIndex)}
                href={`#${item.route}`}
                className={itemIndex === selected ? 'selected' : ''}>
                {item.desc}
              </a>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div id={`nav${index}-closed`} className="navClosed">
        <a
          className={`navName navName${index}`}
          id={`nav${index}-0`}
          onClick={() => selectedHandler(index, 0)}
          href={`#${items[0].route}`}>
          <span className="name">{name}</span>
        </a>
      </div>
    );
  }
};

export default NavItem;
