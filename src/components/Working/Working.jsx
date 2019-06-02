import React, { Component } from 'react';
import scrollOnMount from '../App/ScrollToTopOnMount';
import './Working.css';

class Working extends Component {

  render() {
    return (
<div id="content">
<img top="top" src="images/title_working.gif" alt="Skills" width="212" height="34" border="0"/>
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

	<span className="subheader">Before we begin</span> a project I will need to know a few things:
	<ul>
	<li>number of images (if more than one)</li>
	<li>approximate  dimensions of the finished work</li>
	<li>if it will be in color or black and white</li>
	<li>what  style or feeling you want the final art to possess</li>
	<li>when you want the finished image</li>
	<li>your budget for the piece</li>
	<li>If you have any text to be placed, an article or story that the work
	will be based upon, or a preliminary layout you can fax it to me, although
	this is not always necessary</li>
	</ul>
	<p>
	I'm used to working on tight deadlines, and under tight budget constraints on both
	large and small projects. If you want an image with a large impact, but don't have
	a large budget, talk to me and we will work creatively to find an answer.  If you
	do not live in Minnesota, where I'm based, do not be concerned as I am used
	to using fax, Fed-X and the internet (FTP and e-mail) to send sketches and final
	art overnight across the US and internationally.</p>
	<p>
	I pride myself on being a "thinking" illustrator and can come up with ideas for you,
	or simply can execute something you already have in mind. I can also provide graphic
	design services in Adobe Illustrator, Photoshop, and Quark Express if you should
	need them. I can also provide images on disk or via the internet, depending on the project.</p>
	<p>
	Lastly, I hope that you will find that I am a good communicator,  professional
	and pleasant to work with. I hope to make your job and mine easier in the process.
	It is always my goal to provide beautiful work on time and within budget. I love what
	I do and would consider it a privilege to share it with you.</p>

	<p>
	Thanks,<br/>
	<img src="images/darcy_sig.gif" alt="Darcy" width="105" height="60" border="0"/></p>

</div>
        );
    }
}

export default scrollOnMount(Working);
