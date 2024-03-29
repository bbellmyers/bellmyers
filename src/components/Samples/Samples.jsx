import React, { Component } from 'react';
import './Samples.scss';
import scrollTo from '../App/ScrollToTopOnMount';

class Samples extends Component {
  constructor() {
    super();
    this.state = {
      category: 'childcolor'
    };
  }

  /* eslint-disable jsx-a11y/anchor-is-valid */
  render() {
    const { samples, loadImage } = this.props;
    const { category } = this.state;

    return (
      <div id="content" className="samples">
        <a name="sampletop" className="subheader">
          {samples[category].desc}
        </a>
        <p>Here are some samples of my work. Click on a thumbnail to see the full picture.</p>
        <p>
          (These images are copyrighted, and are provided only for viewing on this site. Please do not reproduce them,
          or use them for any other purpose. Thank you.)
        </p>
        <div id="thumbnailPane">
          {samples[category].samples.map((sample, index) => {
            return (
              <div key={index} className="thumbnail">
                <button onClick={event => loadImage(category, index, event)}>
                  <img src={sample.thumbnail} alt="copyright Darcy Bell-Myers" border="3" />
                </button>
              </div>
            );
          })}
        </div>
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
    const { samples, match } = props;
    const { category } = this.state;
    const matchedCategory = match && match.params ? match.params.category : category;

    if (matchedCategory) {
      if (samples.hasOwnProperty(matchedCategory) && category !== matchedCategory) {
        this.setState({
          category: matchedCategory
        });
        this.props.scrollTo('sampletop');
      }
    }
  }
}

export default scrollTo(Samples);
