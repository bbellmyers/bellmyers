import React, { Component } from 'react';
import './Samples.css';

class Samples extends Component {
    render() {
        return (
            <div>
               <p>Samples {this.props.match.params.item} / {this.props.match.params.subitem}</p>
            </div>
        );
    }

}

export default Samples;
