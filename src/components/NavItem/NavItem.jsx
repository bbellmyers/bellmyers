import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {

  render() {
    if (this.props.open) {
        return (
            <div id={'nav' + this.props.index + '-open'} className="navOpen">
                <img src={'images/nav' + this.props.index + '_on.gif'} alt="" width="152" height="26" border="0" />
                <img src={'images/nav' + this.props.index + '_sub.gif'} alt="" width="13" height="13" border="0" />
                <div className={'subnav subnav' + this.props.index}>
                { this.props.items.map( (item, index) => {
                    return (
                        <a key={index} id={'subnav' + this.props.index + '-' + index} onClick={() => this.props.selectedHandler(this.props.index, index)}
                            href={'#page=nav' + this.props.index + '-' + index} className={index === this.props.selected ? 'selected' : ''}>
                            {item}
                        </a>
                    );
                }) }
                </div>
            </div>
        );
    } else {
        return (
            <div id={'nav' + this.props.index + '-closed'} className="navClosed">
                <a id={'nav' + this.props.index + '-0'} onClick={() => this.props.selectedHandler(this.props.index, 0)}
                    href={'#page=nav' + this.props.index + '-0'}>
                    <img src={'images/nav' + this.props.index + '_off.gif'} alt="" width="152" height="26" border="0" />
                </a>
            </div>
        );
    }
  }
}

export default NavItem;
