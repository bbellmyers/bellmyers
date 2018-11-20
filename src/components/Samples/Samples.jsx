import React, { Component } from 'react';
import samples_db from './samples_db.json';
import './Samples.css';

class Samples extends Component {

    constructor() {
        super();
        console.log(samples_db);
    }
    render() {
        return (
            <div>
               <p>Samples {this.props.match.params.category}: {samples_db[this.props.match.params.category].length}</p>
            </div>
        );
    }

  // getZoomHref(sample) {
  //   var href = "zoomPane.html?fullSrc=" + sample.full;
  //     if (sample.title) href += "&title=" + sample.title;
  //     if (sample.subtitle) href += "&subtitle=" + sample.subtitle;
  //     if (sample.comments) href += "&comments=" + sample.comments;

  //   return encodeURI(href);
  // }

  // zoomZoom(fullSrc) {
  //   document.getElementById("shadow").style.display = "block";
  //     var zoom = document.getElementById("zoomZoomImage");
  //     zoom.addEventListener("load", function() {
  //         if (zoom.width > window.innerWidth) {
  //             var reducedWidth = window.innerWidth - 30 + "px";
  //             zoom.style.width = reducedWidth;
  //         }
  //         // still too big
  //         if (zoom.height > window.innerHeight) {
  //             zoom.style.width = null;
  //             var reducedHeight = window.innerHeight - 30 + "px";
  //             zoom.style.height = reducedHeight;
  //         }
  //         zoom.style.visibility = "visible";
  //     });
  //     zoom.src = fullSrc;
  // }

  // closeShadow() {
  //   document.getElementById("shadow").style.display = "none";
  //     var zoom = document.getElementById("zoomZoomImage");
  //   zoom.src = "images/spacer.gif";
  //     zoom.removeAttribute("style");
  //     zoom.style.visibility = "hidden";
  // }

}

export default Samples;
