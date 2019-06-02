import React, { Component } from 'react';

const scrollOnMount = (WrappedComponent) =>
  class extends Component {
    componentDidMount() {
      let topEl = document.querySelector('[top]');
      topEl.scrollIntoView();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default scrollOnMount;
