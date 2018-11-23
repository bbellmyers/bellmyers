import { Component } from 'react';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    let topEl = document.querySelector('[top]');
    topEl.scrollIntoView();
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;