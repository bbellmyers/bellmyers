import React, { Component } from 'react';
import './Contact.css';
import scrollTo from '../App/ScrollToTopOnMount';

class Contact extends Component {

    componentDidMount() {
        this.props.scrollTo();
    }

    render() {
        if (this.props.history.location.pathname.indexOf('/success') >= 0) {
            return (
                <div id="content">
                    <img src="images/title_contactme.gif" alt="Contact Me" width="145" height="34" border="0"/><br/>
                    Thanks for your note! I'll get back to you as soon as I can.
                </div>
            );
        } else {
            return (
                <div id="content">

                <img src="images/title_contactme.gif" alt="Contact Me" width="145" height="34" border="0"/><br/>
                You can use the form below, or, if you prefer, you can send me an email at
                <button onClick={() => window.decrypt_and_email(0)}>{this.email}</button>.<br/>
                (<span className="required">*</span> = required)<br/>
                &nbsp;
                <form name="frmContact" method="post" action="/cgi-bin/formmail.pl">
                <input type="hidden" name="recipient" value=""/>
                <input type="hidden" name="redirect"  value="http://www.bellmyers.com/#/contact/success"/>
                <input type="hidden" name="subject"   value="Contact Form Email"/>
                <input type="hidden" name="required"  value="realname,email,comments"/>
                <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <td>Name: <span className="required">*</span></td>
                        <td><input type="text" name="realname" size="30"/></td>
                    </tr>
                    <tr>
                        <td>E-Mail: <span className="required">*</span></td>
                        <td><input type="text" name="email" size="30"/></td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td><input type="text" name="title" size="30"/></td>
                    </tr>
                    <tr>
                        <td>Company: </td>
                        <td><input type="text" name="company" size="30"/></td>
                    </tr>
                    <tr>
                        <td>Street:</td>
                        <td><input type="text" name="street1" size="30"/></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td><input type="text" name="street2" size="30"/></td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td><input type="text" name="city" size="30"/></td>
                    </tr>
                    <tr>
                        <td>State/Province: &nbsp;</td>
                        <td><input type="text" name="state" size="4"/>
                        Zip: <input type="text" name="zip" size="6"/></td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td><input type="text" name="country" size="30"/></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <input type="checkbox" name="mailinglist" value="add"/>&nbsp;add me to your mailing list.
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
                        <td><input type="checkbox" name="sendBWsamples" value="send"/> Black &amp; White</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td><input type="checkbox" name="sendColorSamples" value="send"/> Color</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>Style: <input type="text" name="sendStyle" size="25"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Comments: <span className="required">*</span></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <textarea name="comments" rows="8" cols="38"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" value="Send" name="Send" onClick={(e) => {return this.validateContactForm(document.frmContact, e);}} />
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

    validateContactForm(frm, e) {
        if (this.isBlank(frm.realname) ||
            this.isBlank(frm.email) ||
            this.isBlank(frm.comments)) {
            alert('Sorry!  A required field missing. Please fill in\nall the fields with a red asterisk.');
            e.preventDefault();
        }
        if (frm.mailinglist.checked &&
            (this.isBlank(frm.company) ||
             this.isBlank(frm.street1) ||
             this.isBlank(frm.city) ||
             this.isBlank(frm.state) ||
             this.isBlank(frm.zip))) {
            alert('Sorry!  If you\'d like to be on my mailing list, \nplease provide a complete street address.');
            e.preventDefault();
        }
        frm.recipient.value = window.decrypt_string(0,0,0,true);
    }

    isBlank(field) {
        if (this.trim(field.value).length <=0) return true;
        return false;
    }

    trim(value) {
        var temp = value;
        var obj = /^(\s*)([\W\w]*)(\b\s*$)/;
        if (obj.test(temp)) { temp = temp.replace(obj, '$2'); }
        if (temp.search(/\S/) < 0) { temp = ""; }
        return temp;
    }

}

export default scrollTo(Contact);
