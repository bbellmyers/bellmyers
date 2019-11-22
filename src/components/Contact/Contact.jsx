import React, { Component } from 'react';
import './Contact.scss';
import scrollTo from '../App/ScrollToTopOnMount';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.email = window.decrypt_string(0,0,0,true);
    this.state = {
      'form-name': 'frmContact',
      realname: '',
      email: '',
      title: '',
      company: '',
      street1: '',
      street2: '',
      city: '',
      usState: '',
      zip: '',
      country: '',
      mailinglist: false,
      sendBWsamples: false,
      sendColorSamples: false,
      sendStyle: '',
      comments: '',
      recipient: this.email,
      sentSuccess: false
    };
    this.validateContactForm = this.validateContactForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.scrollTo();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  encodeState(data) {
    return Object.keys(data)
      .reduce((acc, key, index) => {
        const value = data[key];
        if (this.isBlank(value)) {
          return acc;
        }
        const ampersand = index === 0 ? '' : '&';
        return `${acc}${ampersand}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }, '');
  }

  validateContactForm(event) {
    event.preventDefault();
    const { realname, email, comments, company, street1, city, usState: state, zip, mailinglist } = this.state;
    if (this.isBlank(realname) ||
      this.isBlank(email) ||
      this.isBlank(comments)) {
      alert('Sorry!  A required field missing. Please fill in\nall the fields with a red asterisk.');
      return false;
    }
    if (mailinglist &&
      (this.isBlank(company) ||
       this.isBlank(street1) ||
       this.isBlank(city) ||
       this.isBlank(state) ||
       this.isBlank(zip))) {
      alert('Sorry!  If you\'d like to be on my mailing list, \nplease provide a complete street address.');
      return false;
    }
    this.sendForm().then((ok) => {
      if (ok) {
        this.setState({
          sentSuccess: true
        });
      } else {
        alert('Ooops, error sending your email, sorry!  Try again later?');
      }
    });
    return false;
  }

  isBlank(value) {
    if (value.trim) {
      return value.trim().length <= 0;
    }
    return !value;
  }

  async sendForm() {
    console.log(this.encodeState(this.state));
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encodeState(this.state)
    });
    return response.ok;
  }

  render() {
    const { realname, email, title, company, street1, street2, city, usState,
      zip, country, mailinglist, sendBWsamples, sendColorSamples, sendStyle, comments, sentSuccess } = this.state;
    if (sentSuccess) {
      return (
        <div id="content">
          <img src="images/title_contactme.gif" alt="Contact Me" width="145" height="34" border="0"/><br/>
          Thanks for your note! I'll get back to you as soon as I can.
        </div>
      );
    } else {
      return (
        <div id="content" className='frm-contact'>

        <img src="images/title_contactme.gif" alt="Contact Me" width="145" height="34" border="0"/><br/>
        You can use the form below, or, if you prefer, you can send me an email at
        <button onClick={() => window.decrypt_and_email(0)}>{this.email}</button>.<br/>
        (<span className="required">*</span> = required)<br/>
        &nbsp;
        <form name="frmContact" onSubmit={this.validateContactForm} >
          <input type="hidden" name="form-name" value="frmContact" />
          <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>Name: <span className="required">*</span></td>
              <td><input type="text" name="realname" value={realname} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>E-Mail: <span className="required">*</span></td>
              <td><input type="text" name="email" value={email} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>Title:</td>
              <td><input type="text" name="title" value={title} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>Company: </td>
              <td><input type="text" name="company" value={company} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>Street:</td>
              <td><input type="text" name="street1" value={street1} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><input type="text" name="street2" value={street2} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>City:</td>
              <td><input type="text" name="city" value={city} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>State/Province: &nbsp;</td>
              <td><input type="text" name="usState" value={usState} onChange={this.handleChange} size="4"/>
              Zip: <input type="text" name="zip" value={zip} onChange={this.handleChange} size="6"/></td>
            </tr>
            <tr>
              <td>Country:</td>
              <td><input type="text" name="country" value={country} onChange={this.handleChange} size="30"/></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <input type="checkbox" name="mailinglist" value="add" checked={mailinglist}  onChange={this.handleChange} />&nbsp;add me to your mailing list.
                (address required)
              </td>
            </tr>
            <tr>
              <td colSpan="2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="2">Please send me some samples of your work:</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><input type="checkbox" name="sendBWsamples" value="send" checked={sendBWsamples} onChange={this.handleChange} /> Black &amp; White</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><input type="checkbox" name="sendColorSamples" value="send" checked={sendColorSamples} onChange={this.handleChange} /> Color</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Style: <input type="text" name="sendStyle" value={sendStyle} onChange={this.handleChange} size="25"/></td>
            </tr>
            <tr>
              <td colSpan="2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="2">Comments: <span className="required">*</span></td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea name="comments" rows="8" cols="38" onChange={this.handleChange} value={comments} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Send</button>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
        <p>&nbsp;<br/>&nbsp;<br/>&nbsp;</p>
      </div>
      );
    }
  }
}

export default scrollTo(Contact);
