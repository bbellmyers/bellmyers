import React, { Component } from 'react';
import './Zoom.css';

const SPACER = 'images/spacer.gif';

class Zoom extends Component {

  constructor() {
    super();
    this.state = {
      zoomed: false,
      zoomSrc: SPACER,
      zoomWidth: 0,
      zoomHeight: 0
    };
  }

  render() {
    return (
      <button id="shadow" className={this.state.zoomed? "" : "closed"} onClick={() => this.closeShadow()}>
          <img border="0" id="zoomZoomImage" src={this.state.zoomSrc}
          alt="(c) copyright Darcy Bell-Myers" style={{width: this.state.zoomWidth, height: this.state.zoomHeight}}/>
      </button>
    );
  }

  closeShadow() {
    this.setState({
      zoomed: false,
      zoomSrc: SPACER,
      zoomWidth: window.innerWidth,
      zoomHeight: window.innerHeight
    });
  }

  componentWillReceiveProps(props) {
    if (props.sample.full) {
      this.setState({
        zoomed: false,
        zoomSrc: props.sample.full ? props.sample.full : SPACER
      });
      var zoom = document.getElementById("zoomZoomImage");
      zoom.addEventListener("load", () => {

        if (zoom.src.indexOf(SPACER) < 0) {
          let ratio = zoom.width / zoom.height;

          let reducedWidth = Math.min(zoom.width, window.innerWidth - 48);
          let reducedHeight = reducedWidth / ratio;

          if (reducedHeight > window.innerHeight - 48) {
            reducedHeight = window.innerHeight - 48;
            reducedWidth = reducedHeight * ratio;
          }

          this.setState({
            zoomed: true,
            zoomWidth: reducedWidth,
            zoomHeight: reducedHeight
          });
        }
      });
    }
  }

}

export default Zoom;
