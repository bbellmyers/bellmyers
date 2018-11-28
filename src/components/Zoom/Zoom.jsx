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
        <div className="zoomPanel" style={{ width: this.state.zoomWidth }}>
          {this.props.showPrev ?
            <button className="prev" onClick={(event) => this.prevSample(event)}>&lang;</button>
            : '' }
          <img border="0" alt="(c) copyright Darcy Bell-Myers"
            src={this.props.sample.full}
            style={{width: this.state.zoomWidth, height: this.state.zoomHeight}}
            onLoad={(event) => this.zoomFit(event, this)} />
          {this.props.showNext ?
            <button className="next" onClick={(event) => this.nextSample(event)}>&rang;</button>
            : '' }
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

    // shrink to fit width, if necessary
    let reducedWidth = Math.min(zoom.width, window.innerWidth - 48);
    let reducedHeight = reducedWidth / ratio;

    // if this is still too tall, shrink some more
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
  }

  nextSample(event) {
    this.setState({
      zoomed: false,
      zoomWidth: window.innerWidth,
      zoomHeight: window.innerHeight
    });
    this.props.next(event);
  }

}

export default Zoom;
