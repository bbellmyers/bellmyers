import React, { Component } from 'react';
import './Animation.css';
import scrollOnMount from '../App/ScrollToTopOnMount';

class Animation extends Component {

    render() {
        return (
            <div id="content">

            <div className="animation" align="center">
                <video controls>
                <source src="media/Animation_Demo_Reel.m4v" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <div id="zoomText"><h2>Animation Demo Reel</h2>
                    <h3>Mike Jones Animation,<br/>TS Denison</h3>
                    <p>Samples of original animations, in-betweening and video game sprites and backgrounds.</p>
                </div>
            </div>
                 
            </div>
        );
    }

}

export default scrollOnMount(Animation);
