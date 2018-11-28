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
      <div id="shadow" className={this.state.zoomed? "" : "closed"} onClick={() => this.closeShadow()}>
        <div className="zoomPanel" style={{ width: this.state.zoomWidth + 50}}>
          <button className="prev" onClick={(event) => this.prevSample(event)}>&lt;</button>
          <img border="0" alt="(c) copyright Darcy Bell-Myers"
            src={this.props.sample.full}
            style={{width: this.state.zoomWidth, height: this.state.zoomHeight}}
            onLoad={(event) => this.zoomFit(event, this)} />
          <button className="next" onClick={(event) => this.nextSample(event)}>&gt;</button>
        </div>
    </div>
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

  prevSample(event) {
    this.setState({
      zoomed: false,
      zoomWidth: window.innerWidth,
      zoomHeight: window.innerHeight
    });
    this.props.prev(event);
    event.stopPropagation();
  }

  nextSample(event) {
    this.setState({
      zoomed: false,
      zoomWidth: window.innerWidth,
      zoomHeight: window.innerHeight
    });
    this.props.next(event);
    event.stopPropagation();
  }

}

export default Zoom;
