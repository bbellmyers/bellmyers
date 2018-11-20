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
