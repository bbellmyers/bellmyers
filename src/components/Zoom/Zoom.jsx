import React, { Component } from 'react';
import './Zoom.css';

class Zoom extends Component {

  constructor() {
    super();
    this.state = {
      zoomed: false,
      zoomWidth: 0,
      zoomHeight: 0
    };
  }

  render() {
    return (
      <button id="shadow" className={this.state.zoomed? "" : "closed"} onClick={() => this.closeShadow()}>
          <img border="0" id="zoomZoomImage"
          alt="(c) copyright Darcy Bell-Myers"
          src={this.props.sample.full}
          style={{width: this.state.zoomWidth, height: this.state.zoomHeight}}
          onLoad={(event) => this.zoomFit(event, this)} />
      </button>
    );
  }

  closeShadow() {
    this.setState({
      zoomed: false,
      zoomWidth: window.innerWidth,
      zoomHeight: window.innerHeight
    });
    this.props.zoomOut();
  }

  zoomFit(event, comp) {
    var zoom = event.target;
    let ratio = zoom.width / zoom.height;

    let reducedWidth = Math.min(zoom.width, window.innerWidth - 48);
    let reducedHeight = reducedWidth / ratio;

    if (reducedHeight > window.innerHeight - 48) {
      reducedHeight = window.innerHeight - 48;
      reducedWidth = reducedHeight * ratio;
    }

    comp.setState({
      zoomed: true,
      zoomWidth: reducedWidth,
      zoomHeight: reducedHeight
    });
  }

}

export default Zoom;
