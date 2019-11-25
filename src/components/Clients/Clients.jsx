import React, { Component } from 'react';
import './Clients.css';
import scrollTo from '../App/ScrollToTopOnMount';

class Clients extends Component {
  componentDidMount() {
    this.props.scrollTo();
  }

  render() {
    return (
      <div id="content">
        <h1>Clients</h1>
        <div className="col1">
          <span className="subheader">Book and other publishers:</span>
          <br />
          Abrams Publishers
          <br />
          Attitude Press
          <br />
          Beaver&apos;s Pond Press
          <br />
          Continental Press
          <br />
          Instructional Fair <br />
          In Celebration
          <br />
          The Meadowbrook Press
          <br />
          McGraw Hill
          <br />
          TS Denison
          <br />
          Vowac Publishing
          <br />
          &nbsp;
          <br />
          <span className="subheader">Animation:</span>
          <br />
          Mike Jones Film Corp.
          <br />
          Reelworks
          <br />
          &nbsp;
          <br />
          <i>Animation for:</i>
          <br />
          Best Buy
          <br />
          Bugles / Nabisco
          <br />
          Car-X
          <br />
          Firestone
          <br />
          Levi's
          <br />
          Mr. Clean
          <br />
          Mug Rootbeer
          <br />
          Old Dutch
          <br />
          &nbsp;
        </div>
        <div className="col2">
          <span className="subheader">Magazines and periodicals:</span>
          <br />
          City Business
          <br />
          City Pages
          <br />
          Family Times/Senior Times
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;/Grandparent Times/Baby Times
          <br />
          Minneapolis St Paul Magazine
          <br />
          Minnesota Medicine
          <br />
          Twin Cities Parent
          <br />
          Viking Magazine
          <br />
          &nbsp;
          <br />
          <span className="subheader">Design firms:</span>
          <br />
          Nina Jordan Design
          <br />
          Sue Stavig Design
          <br />
          Veronica Romano Design
          <br />
          Vicki Juris Design
          <br />
          &nbsp;
          <br />
          <span className="subheader">Software firms:</span>
          <br />
          Blue Willow Interactive
          <br />
          Javelin Technology/
          <br />
          Mastery Point
          <br />
          &nbsp;
        </div>
      </div>
    );
  }
}

export default scrollTo(Clients);
