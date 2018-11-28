import React, { Component } from 'react';
import samples_db from './samples_db.json';
import Zoom from '../Zoom/Zoom.jsx';
import './Samples.css';

class Samples extends Component {

  constructor() {
    super();

    this.state = {
      category: 'childcolor',
      zoomSample: {},
      zoomIndex: -1
    };
  }

  render() {
    return (
      <div>
        <div id="content">
          <h2 top="top">{samples_db[this.state.category].desc}</h2>
          <p>Here are some samples of my work. Click on a thumbnail to see the full picture.</p>
          <div id="thumbnailPane">
            {samples_db[this.state.category].samples.map((sample, index) => {
              return (
                <div key={index} className="thumbnail">
                  <button onClick={(event) => this.loadImage(index, event)} >
                    <img src={sample.thumbnail} alt="copyright Darcy Bell-Myers" border="3"/>
                  </button>
                </div>
              );
            })}
          </div>
          <p className="copyright">(These images are copyrighted, and are provided only for viewing on this site.
            Please do not reproduce them, or use them for any other purpose.  Thank you.)
          </p>
        </div>
        <Zoom sample={this.state.zoomSample}
          zoomOut={() => this.zoomOut()}
          next={(event) => this.loadImage(this.state.zoomIndex + 1, event)}
          prev={(event) => this.loadImage(this.state.zoomIndex - 1, event)}/>
      </div>
    );
  }

  componentDidMount() {
    this.updateCategory(this.props);
  }

  componentWillReceiveProps(props) {
    this.updateCategory(props);
  }

  updateCategory(props) {
    if (props.match && props.match.params && props.match.params.category) {
      if (samples_db.hasOwnProperty(props.match.params.category) && this.state.category !== props.match.params.category) {
        this.setState({
          category: props.match.params.category
        });
        let topEl = document.querySelector('[top]');
        topEl.scrollIntoView();
      }
    }
  }

  loadImage(index, event) {
    index = index ? index : 0;

    if (index >= 0 && index < samples_db[this.state.category].samples.length) {
      this.setState({
        zoomSample: samples_db[this.state.category].samples[index],
        zoomIndex: index
      });
    }

    event.stopPropagation();
  }

  zoomOut() {
    this.setState({
      zoomSample: {}
    });
  }

}

export default Samples;
