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
            <div>
               <p>Samples {this.state.category}: {samples_db[this.state.category].length}</p>

            <p>Here are some samples of my work. Click on a thumbnail to see the full picture.</p>
            <div id="thumbnailPane">
                {/* <script>
                    if (category) {
                        for (var i=0; i<samples[category].length; i++) {
                            var sample = samples[category][i];
                            document.write("<div class=\"thumbnail\">");
                            document.write("<a href=\"#\" onClick=\"return loadImage(" + i + ");\" \>");
                            document.write("<img src=\"" + sample.thumbnail + "\"" +
                            "alt=\"copyright Darcy Bell-Myers\" border=\"3\"></a></div>");
                        }
                    }
                </script> */}
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
        if (props.match.params && props.match.params.category) {
            if (samples_db.hasOwnProperty(props.match.params.category)) {
                this.setState({
                    category: props.match.params.category
                });
            }
        }
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
