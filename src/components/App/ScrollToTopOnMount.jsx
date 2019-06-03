import React, { Component } from 'react';

const scrollTo = (WrappedComponent) =>
  class extends Component {
    scrollTo(name) {
      const pos = name ? document.querySelector(`[name='${name}']`).offsetTop : 0;
      const contentFrame = document.querySelector('#contentFrame');
      const headerHeight = document.querySelector('#header').offsetHeight;
      if (contentFrame) {
        setTimeout(() => contentFrame.scrollTo(0, pos - headerHeight), 0);
      }
    }

    render() {
      return <WrappedComponent scrollTo={this.scrollTo} {...this.props} />;
    }
  };

export default scrollTo;
