import React, { Component } from 'react';
import samples_db from './samples_db.json';
import './Samples.css';

class Samples extends Component {

  constructor() {
    super();

    this.state = {
      category: 'childcolor'
    };
  }

  render() {
    return (
      <div id="content">
        <p top="top">Here are some samples of my work. Click on a thumbnail to see the full picture.</p>
        <div id="thumbnailPane">
          {samples_db[this.state.category].map((sample, index) => {
            return (
              <div key={index} className="thumbnail">
                <button onClick={() => { return this.loadImage(index); }} >
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

  loadImage(index) {
    let sample;
    if (!index) {
      sample = samples_db[this.state.category][0];
    } else {
      sample = samples_db[this.state.category][index];
    }

    this.props.zoomIn(sample);

    return false;
  }
}

export default Samples;
