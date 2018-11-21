import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';
import subitems from './navitems.json';
import './LeftNav.css';


class LeftNav extends Component {

  constructor() {
    super();
    this.contentIframe = null;
    this.butterflyImg = null;
    this.navmenu = null;

    this.subitems = subitems;

    this.state = {
      selectedItem: 0,
      selectedSubitem: 0
    };
  }

  render() {
    return (
      <ul className="nav">
        {this.subitems.map((items, i) => {
          return (
            <li key={i}>
              <NavItem items={items}
                open={i === this.state.selectedItem ? true : false} index={i}
                selected={this.state.selectedSubitem}
                selectedHandler={(index, subindex) => this._selectedHandler(index, subindex)}/></li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.findSub(this.props);
  }

  componentWillReceiveProps(props) {
    this.findSub(props);
  }

  _selectedHandler(index, subindex) {
    this.setState({ selectedItem: index, selectedSubitem: subindex});
    this.props.onNav();
  }

  findSub(props) {
    let foundSub = -1;
    let foundItem = -1;
    subitems.some((item, index) => {
      // findIndex requires polyfill in IE
      foundSub = item.findIndex((subitem) => {
        return subitem.route === props.history.location.pathname;
      });
      if (foundSub >= 0) {
        foundItem = index;
        return true;
      }
      return false;
    });
    if (foundSub >= 0 && this.state.selectedSubitem !== foundSub) {
      this.setState({
        selectedItem: foundItem,
        selectedSubitem: foundSub
      });
    }
  }
}

export default LeftNav;
