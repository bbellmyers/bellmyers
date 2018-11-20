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

  componentDidMount() {
    let foundSub = -1;
    let foundItem = -1;
    subitems.some((item, index) => {
      foundSub = item.findIndex((subitem) => {
        return subitem.route.indexOf(this.props.history.location.pathname) >= 0;
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
    return true;
  }

  render() {
    return (
      <ul>
        {this.subitems.map((items, i) => {
          return (
            <li key={i}>
              <NavItem items={items}
                open={i === this.state.selectedItem ? true : false} index={i}
                selected={this.state.selectedSubitem}
                selectedHandler={(index, subindex) => {
                  this.setState({ selectedItem: index, selectedSubitem: subindex});
                }}/></li>
          );
        })}
      </ul>
    );
  }

  componentWillReceiveProps(props) {
    if (props.match) {
      console.log(props.match);
    }
  }
}

export default LeftNav;
