import React from 'react';
import '../contact/contact.css';

const Contact = () => {
    return (
       <>
       <div className="contact">
        <div className="container">
          <div className="contactContainer">
            <div className="leftContact">
            <h4>Contact Information</h4>
            <p>Fill the form below or write us .We will help you as soon as possible.</p>
              <div className="contactCardContainer">
                <div className="contactCard1">
                  <h2>phone</h2>
                  <p>343434343434</p>
                </div>
                <div className="contactCard2">
                  <h2>phone</h2>
                  <p>343434343434</p>
                </div>
                <div className="contactCard3">
                  <h2>phone</h2>
                  <p>343434343434</p>
                </div>
              </div>
            </div>

            <div className="rightContact">
            <div className="contact-form">
                <h2>Get In Touch</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Demo Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email" name="email" placeholder="info@quomodosoft.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" id="subject" name="subject" placeholder="Your Subject here" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" name="message" placeholder="Type your message here" required></textarea>
                    </div>
                    <button type="submit">Send Now</button>
                </form>
            </div>
            </div>
          </div>
        </div>
       </div>
       </>
    );
}

export default Contact;
