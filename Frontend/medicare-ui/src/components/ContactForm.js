import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to send the form data to your server or email service
    setShowPopup(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" value={message} onChange={handleMessageChange} required />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {showPopup && (
            <div className='mt-3'>
              <p style={{ color: 'green' ,fontWeight: 'bold'}}>Thank you! We will contact you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
