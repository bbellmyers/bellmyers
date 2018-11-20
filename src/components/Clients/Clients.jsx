import React, { Component } from 'react';
import './Clients.css';

class Clients extends Component {

    render() {
        return (
            <div>
               <p>Clients {this.props.match.params.scroll}</p>
            </div>
        );
    }

}

export default Clients;
