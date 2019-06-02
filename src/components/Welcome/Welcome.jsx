import React, { Component } from 'react';
import './Welcome.css';
import scrollToTop from '../App/ScrollToTopOnMount';

class Welcome extends Component {

  constructor() {
    super();
    this.email = window.decrypt_string(0,0,0,true);
  }

  render() {
    return (
<div id="content">
	<img top="top" src="images/title_welcome.gif" alt="Welcome to my website!" width="291" height="34" border="0" /><br/>
	<img className="home_portrait" src="images/rhino.jpg" alt="rhino author" width="180" height="216" border="0" />
	<p>
	If you're an art director, publisher, graphic
	designer, ad exec,  editor, or anyone else looking to hire an
	illustrator to create beautiful custom illustration and design, you've
	come to the right place. </p>
	<p>
	This site will show you some <a href="#/samples">examples
	of my work</a>.  Through the years, I've done children's storybooks, both in color and black &amp;
	white, editorial work for magazines, books and newspapers, and lots of other fun projects.</p>
	<p>
	You can review my	<a href="#/about/skills">resume</a>	and <a href="#/clients/list">client list</a>,
	or get on my <a href="#/contact">mailing list</a>.
	For other questions or sample requests, e-mail me at <button onClick={() => this.decryptEmail()}>{this.email}</button>.</p>
	<p>
	I hope you like this site, it's for you after all. Make yourself at home!</p>

	<img src="images/title_working.gif" alt="Skills" width="212" height="34" border="0"/>
	<p>
	Over the years I've worked on a variety of projects in a variety of mediums,
	though have come to specialize in making art for children. This does not mean
	that the work is less serious or important to me; indeed I consider work for
	children to be very important and very worthwhile. I try not to talk down to
	my audience and strive to communicate to them in the same way that I would to
	any adult audience. I always figure that if something seems humorous to me,
	it will be to the kids looking at my work too! Likewise if it seems to ring
	false to me, to be clich&eacute;d or too cutesy, my audience of children will be the
	first to discern this and unlike most adults will be sure to let me know!</p>

	<p><a href="#/clients/working" target="_top">Click here to learn more...</a></p>

  </div>
    );
  }

  decryptEmail() {
    window.decrypt_and_email(0);
  }

}

export default scrollToTop(Welcome);
