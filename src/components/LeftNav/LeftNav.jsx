import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';
import navitems from './navitems.json';
import './LeftNav.scss';

class LeftNav extends Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 0,
      selectedSubitem: 0
    };
    this.findSub = this.findSub.bind(this);
  }

  render() {
    return (
      <ul className="nav">
        {navitems.map((item, index) => {
          return (
            <li key={index}>
              <NavItem
                name={item.name}
                items={item.subitems}
                open={index === this.state.selectedItem ? true : false}
                index={index}
                selected={this.state.selectedSubitem}
                selectedHandler={(index, subindex) => this._selectedHandler(index, subindex)}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.findSub(this.props, navitems);
  }

  componentWillReceiveProps(props) {
    this.findSub(props, navitems);
  }

  _selectedHandler(index, subindex) {
    this.setState({ selectedItem: index, selectedSubitem: subindex });
    this.props.onNav();
  }

  findSub(props, navitems) {
    let foundSub = -1;
    let foundItem = -1;
    navitems.some((item, index) => {
      // findIndex requires polyfill in IE
      foundSub = item.subitems.findIndex(subitem => {
        return props.history.location.pathname.indexOf(subitem.route) >= 0;
      });
      if (foundSub >= 0) {
        foundItem = index;
        return true;
      }
      return false;
    });
    if (foundSub >= 0) {
      this.setState({
        selectedItem: foundItem,
        selectedSubitem: foundSub
      });
    }
  }
}

export default LeftNav;
