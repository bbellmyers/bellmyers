import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import './Zoom.scss';

class Zoom extends Component {

  constructor() {
    super();
    this.state = {
      zoomed: false,
      zoomWidth: 0,
      zoomHeight: 0
    };
    this.zoomFit = this.zoomFit.bind(this);
  }

  render() {
    const { zoomed, zoomHeight, zoomWidth } = this.state;
    const { sample, showPrev, showNext } = this.props;
    return (
      <Swipeable onSwipedLeft={(event) => this.onSwipedLeft(event)} onSwipedRight={(event) => this.onSwipedRight(event)}>
      <div id="shadow" className={zoomed ? null : 'closed'} onClick={() => this.closeShadow()}>
        <div className="zoomPanel" style={{ width: zoomWidth }}>
          {showPrev &&
            <button className="prev" onClick={(event) => this.prevSample(event)}>&lang;</button>
          }
          <img border="0" alt="(c) copyright Darcy Bell-Myers"
            src={sample.full}
            style={{width: zoomWidth, height: zoomHeight}}
            onLoad={(event) => this.zoomFit(event)} />
          {showNext &&
            <button className="next" onClick={(event) => this.nextSample(event)}>&rang;</button>
          }
        </div>
      </div>
      </Swipeable>
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

  zoomFit(event) {
    var zoom = event.target;
    let ratio = zoom.naturalWidth / zoom.naturalHeight;

    // shrink to fit width, if necessary
    let reducedWidth = Math.min(zoom.naturalWidth, window.innerWidth - 48);
    let reducedHeight = reducedWidth / ratio;

    // if this is still too tall, shrink some more
    if (reducedHeight > window.innerHeight - 48) {
      reducedHeight = window.innerHeight - 48;
      reducedWidth = reducedHeight * ratio;
    }

    this.setState({
      zoomed: true,
      zoomWidth: reducedWidth + 8,
      zoomHeight: reducedHeight + 8
    });
  }

  prevSample(event) {
    this.props.prev(event);
  }

  nextSample(event) {
    this.props.next(event);
  }

  onSwipedLeft(event) {
    this.nextSample(event);
  }

  onSwipedRight(event) {
    this.prevSample(event);
  }

}

export default Zoom;
