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
				<table>
						<tbody>
						<tr>
								<td>
									<img border="0" id="zoomZoomImage" src={this.state.zoomSrc} alt="(c) copyright Darcy Bell-Myers" />
								</td>
						</tr>
						<tr className="caption">
							<h2>{this.props.sample.title}</h2>
							{this.props.sample.subtitle}
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
		if (props.sample.full) {
			this.setState({
				zoomSrc: props.sample.full ? props.sample.full : 'images/spacer.gif'
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
