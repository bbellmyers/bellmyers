import React from 'react';
import './NavItem.css';

const NavItem = ({ open, index, items, selected, selectedHandler }) => {
  if (open) {
    return (
      <div id={`nav${index}-open`} className="navOpen">
        <img src={'images/nav' + index + '_on.gif'} alt="" width="152" height="26" border="0" />
        <img src={'images/nav' + index + '_sub.gif'} alt="" width="13" height="13" border="0" />
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
        <a id={`nav${index}-0`} onClick={() => selectedHandler(index, 0)} href={`#${items[0].route}`}>
          <img src={'images/nav' + index + '_off.gif'} alt="" width="152" height="26" border="0" />
        </a>
      </div>
    );
  }
};

export default NavItem;
