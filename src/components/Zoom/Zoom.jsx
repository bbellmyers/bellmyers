import React, { Component } from 'react';
import './Zoom.css';

class Zoom extends Component {

	constructor() {
		super();
		this.state = {
			zoomed: false,
			zoomSrc: 'images/spacer.gif'
		};
	}

  render() {
    return (
			<button id="shadow" className={this.state.zoomed? "" : "closed"} onClick={() => this.closeShadow()}>
				<table height="100%">
						<tbody>
						<tr>
								<td>
									<img border="0" id="zoomZoomImage" src={this.state.zoomSrc} alt="(c) copyright Darcy Bell-Myers" />
								</td>
						</tr>
						</tbody>
				</table>
			</button>
		);
	}

	closeShadow() {
    this.setState({
      zoomed: false
    });
	}

	componentWillReceiveProps(props) {
		if (props.fullSrc) {
			this.setState({
				zoomSrc: props.fullSrc ? props.fullSrc : 'images/spacer.gif'
			});
			var zoom = document.getElementById("zoomZoomImage");
			zoom.style.width = null;
			zoom.style.height = null;
			zoom.addEventListener("load", () => {
				if (zoom.width > window.innerWidth) {
						var reducedWidth = window.innerWidth - 30 + "px";
						zoom.style.width = reducedWidth;
				}
				// still too big
				if (zoom.height > window.innerHeight) {
						zoom.style.width = null;
						var reducedHeight = window.innerHeight - 30 + "px";
						zoom.style.height = reducedHeight;
				}
				this.setState({
					zoomed: true
				});
			});
		}
	}

}

export default Zoom;
